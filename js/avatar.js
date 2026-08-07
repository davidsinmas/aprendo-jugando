function avatarHTML(d){
 const outfit=GAME.items.find(x=>x.id===d.equipado.equipacion),
       helmet=GAME.items.find(x=>x.id===d.equipado.casco),
       weapon=GAME.items.find(x=>x.id===d.equipado.arma),
       shield=GAME.items.find(x=>x.id===d.equipado.escudo);
 return `<div class="avatar">
  <div class="avatar-shadow"></div>
  <div class="ear l"><i></i></div><div class="ear r"><i></i></div>

  <div class="hair back">
    <span class="hair-lock lock1"></span><span class="hair-lock lock2"></span><span class="hair-lock lock3"></span>
    <span class="hair-shine"></span>
  </div>

  <div class="head">
    <div class="face-light"></div>
    <div class="temple-shade l"></div><div class="temple-shade r"></div>
    <div class="cheek l"></div><div class="cheek r"></div>
    <div class="eyebrow l"></div><div class="eyebrow r"></div>
    <div class="eye l"><span class="iris"></span><i></i></div>
    <div class="eye r"><span class="iris"></span><i></i></div>
    <div class="nose"></div><div class="mouth"></div><div class="chin-light"></div>
  </div>

  <div class="hair front">
    <span class="fringe f1"></span><span class="fringe f2"></span><span class="fringe f3"></span>
  </div>

  <div class="neck"></div>

  <div class="arm l"><div class="sleeve"><span></span></div><div class="hand"><i></i></div></div>
  <div class="arm r"><div class="sleeve"><span></span></div><div class="hand"><i></i></div></div>

  <div class="torso">
    <div class="hood"></div>
    <div class="hood-rim"></div>
    <div class="shoulder-seam l"></div><div class="shoulder-seam r"></div>
    <div class="hood-string l"></div><div class="hood-string r"></div>
    <div class="zip"></div><div class="zip-pull"></div>
    <div class="pocket"></div>
    <div class="fabric-light"></div>
  </div>

  <div class="belt"><span></span></div>
  <div class="leg l"><i></i><b class="knee"></b><span class="leg-seam"></span></div>
  <div class="leg r"><i></i><b class="knee"></b><span class="leg-seam"></span></div>

  <div class="shoe l"><span></span><i></i><b class="laces"></b><em></em></div>
  <div class="shoe r"><span></span><i></i><b class="laces"></b><em></em></div>

  ${outfit?`<div class="layer outfit ${outfit.className}"><i></i><b></b><span></span><em></em><strong></strong><u></u></div>`:''}
  ${helmet?`<div class="layer helmet ${helmet.className}"><i></i><b></b><span></span><em></em></div>`:''}
  ${weapon?`<div class="layer weapon weapon-${weapon.id}">${weaponArt(weapon.id)}</div>`:''}
  ${shield?`<div class="layer shield shield-${shield.id}">${shieldArt(shield.id)}</div>`:''}
 </div>`
}

function weaponArt(id){
 if(id==='weapon_sword')return `<span class="blade"></span><span class="guard"></span><span class="grip"></span>`;
 if(id==='weapon_staff')return `<span class="staff-stick"></span><span class="staff-gem"></span><span class="staff-ring"></span>`;
 if(id==='weapon_energy')return `<span class="energy-blade"></span><span class="energy-guard"></span><span class="energy-grip"></span>`;
 return '';
}
function shieldArt(id){
 return `<span class="shield-face"><i></i><b></b></span>`;
}
