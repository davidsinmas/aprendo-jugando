function avatarHTML(d){
 const equipped=Object.entries(d.equipado||{})
  .map(([slot,id])=>GAME.items.find(x=>x.id===id))
  .filter(Boolean);

 return `<div class="avatar-photo-wrap">
   <img class="avatar-photo" src="assets/avatar/base/avatar_base.png" alt="Avatar">
   ${equipped.length?`<div class="equipped-strip">
     ${equipped.map(i=>`<div class="equipped-chip" title="${i.name}">
       <img src="${i.image}" alt="${i.name}">
     </div>`).join('')}
   </div>`:''}
 </div>`
}
