/* Aprendo Jugando - Avatar paper-doll V2.4.2 piloto
   Reemplaza el modo de tarjetas de V2.4.1 por capas reales prealineadas.
   Solo se renderizan assets declarados como capas de avatar. Nunca se reutilizan
   iconos de tienda como equipamiento visual. */

const AVATAR_SYSTEM = Object.freeze({
  canvas: { width: 1024, height: 1024 },
  base: 'assets/avatar/base/avatar_base.png?v=242',
  layers: Object.freeze({
    ce_comun_pecho: {
      slot: 'pecho',
      src: 'assets/equipment/caballero_espacial/comun/layers/pecho.png?v=242',
      z: 40
    },
    ce_comun_casco: {
      slot: 'casco',
      src: 'assets/equipment/caballero_espacial/comun/layers/casco.png?v=242',
      z: 80
    }
  })
});

function ensureAvatarPaperDollStyles(){
  if(document.getElementById('avatar-paper-doll-styles')) return;
  const style=document.createElement('style');
  style.id='avatar-paper-doll-styles';
  style.textContent=`
    .avatar-photo-wrap.avatar-paper-doll{
      position:relative;
      width:min(100%,260px);
      aspect-ratio:1/1;
      margin:auto;
      overflow:hidden;
      border-radius:22px;
    }
    .avatar-paper-doll .avatar-canvas{
      position:absolute;
      inset:0;
      width:100%;
      height:100%;
    }
    .avatar-paper-doll .avatar-canvas img{
      position:absolute;
      inset:0;
      display:block;
      width:100%;
      height:100%;
      object-fit:contain;
      object-position:center;
      pointer-events:none;
      user-select:none;
      -webkit-user-drag:none;
    }
    .avatar-paper-doll .avatar-base-layer{z-index:0}
    .avatar-paper-doll .avatar-equip-layer{transform:none}
    .avatar-paper-doll .avatar-layer-status{
      position:absolute;
      left:8px;
      right:8px;
      bottom:8px;
      z-index:200;
      padding:5px 8px;
      border-radius:999px;
      background:rgba(30,38,40,.72);
      color:white;
      font-size:.68rem;
      font-weight:800;
      text-align:center;
      backdrop-filter:blur(3px);
    }
  `;
  document.head.appendChild(style);
}

function avatarRenderableLayers(d){
  const equippedIds=Object.values(d.equipado||{}).filter(Boolean);
  return equippedIds
    .map(id=>({id,...AVATAR_SYSTEM.layers[id]}))
    .filter(layer=>layer.src)
    .sort((a,b)=>a.z-b.z);
}

function avatarHTML(d){
  ensureAvatarPaperDollStyles();
  const layers=avatarRenderableLayers(d);
  const equippedCount=Object.values(d.equipado||{}).filter(Boolean).length;
  const unsupported=Math.max(0,equippedCount-layers.length);

  return `<div class="avatar-photo-wrap avatar-paper-doll" data-avatar-canvas="1024x1024">
    <div class="avatar-canvas" aria-label="Avatar equipado">
      <img class="avatar-base-layer" src="${AVATAR_SYSTEM.base}" alt="Avatar">
      ${layers.map(layer=>`<img class="avatar-equip-layer" src="${layer.src}" alt="" style="z-index:${layer.z}" data-item-id="${layer.id}" data-slot="${layer.slot}">`).join('')}
    </div>
    ${unsupported?`<div class="avatar-layer-status">${layers.length} capas listas · ${unsupported} pendientes de asset</div>`:''}
  </div>`;
}
