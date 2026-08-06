function avatarHTML(d){
 const outfit=GAME.items.find(x=>x.id===d.equipado.equipacion),helmet=GAME.items.find(x=>x.id===d.equipado.casco),weapon=GAME.items.find(x=>x.id===d.equipado.arma),shield=GAME.items.find(x=>x.id===d.equipado.escudo);
 return `<div class="avatar">
  <div class="avatar-shadow"></div>
  <div class="ear l"><i></i></div><div class="ear r"><i></i></div>
  <div class="hair back"><span class="hair-strand s1"></span><span class="hair-strand s2"></span><span class="hair-strand s3"></span></div><div class="head"><div class="face-light"></div><div class="cheek l"></div><div class="cheek r"></div>
   <div class="eyebrow l"></div><div class="eyebrow r"></div><div class="eye l"><i></i></div><div class="eye r"><i></i></div>
   <div class="nose"></div><div class="mouth"></div><div class="chin-light"></div>
  </div><div class="hair front"></div>
  <div class="neck"></div>
  <div class="arm l"><div class="sleeve"></div><div class="hand"></div></div><div class="arm r"><div class="sleeve"></div><div class="hand"></div></div>
  <div class="torso"><div class="hood-rim"></div><div class="shoulder-seam l"></div><div class="shoulder-seam r"></div><div class="hood-string l"></div><div class="hood-string r"></div><div class="zip"></div><div class="pocket"></div></div>
  <div class="belt"><span></span></div><div class="leg l"><i></i><b class="knee"></b></div><div class="leg r"><i></i><b class="knee"></b></div>
  <div class="shoe l"><span></span><i></i><b class="laces"></b></div><div class="shoe r"><span></span><i></i><b class="laces"></b></div>
  ${outfit?`<div class="layer outfit ${outfit.className}"><i></i><b></b></div>`:''}
  ${helmet?`<div class="layer helmet ${helmet.className}"><i></i><b></b></div>`:''}
  ${weapon?`<div class="layer weapon weapon-${weapon.id}">${weapon.icon}</div>`:''}
  ${shield?`<div class="layer shield">${shield.icon}</div>`:''}
 </div>`
}
