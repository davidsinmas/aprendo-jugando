function avatarHTML(d){
 const equipped=Object.entries(d.equipado||{}).map(([slot,id])=>GAME.items.find(x=>x.id===id)).filter(Boolean);
 const layers=equipped.filter(i=>i.visual&&i.image).sort((a,b)=>(a.visual.z||50)-(b.visual.z||50)).map(i=>{
  const v=i.visual;
  return `<img class="avatar-equip-layer layer-${i.cat}" src="${i.image}" alt="${i.name}" style="left:${v.x}%;top:${v.y}%;width:${v.w}%;z-index:${v.z};transform:translate(-50%,-50%) rotate(${v.rot||0}deg)">`
 }).join('');
 return `<div class="avatar-photo-wrap avatar-layered"><div class="avatar-layer-canvas"><img class="avatar-photo" src="assets/avatar/base/avatar_base.png?v=240" alt="Avatar">${layers}</div>${equipped.length?`<div class="equipped-strip">${equipped.map(i=>`<div class="equipped-chip" title="${i.name}"><img src="${i.image}" alt="${i.name}"></div>`).join('')}</div>`:''}</div>`
}
