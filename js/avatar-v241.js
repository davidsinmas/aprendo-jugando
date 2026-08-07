function avatarHTML(d){
 const equipped=Object.entries(d.equipado||{})
  .map(([slot,id])=>GAME.items.find(x=>x.id===id))
  .filter(Boolean);

 const testCards=equipped.map((i,idx)=>{
   const positions=[
     ['8%','8%'],['67%','8%'],['5%','37%'],['69%','37%'],['6%','66%'],
     ['68%','66%'],['20%','80%'],['53%','80%'],['36%','3%']
   ];
   const pos=positions[idx%positions.length];
   return `<div class="equip-test-card" style="left:${pos[0]};top:${pos[1]}">
     <img src="${i.image}" alt="${i.name}">
     <span>${i.cat.toUpperCase()}</span>
   </div>`
 }).join('');

 return `<div class="avatar-photo-wrap avatar-test-mode">
   <div class="avatar-test-title">TEST EQUIPAMIENTO · ${equipped.length} piezas</div>
   <img class="avatar-photo" src="assets/avatar/base/avatar_base.png?v=241" alt="Avatar">
   ${testCards}
   ${equipped.length?`<div class="equipped-strip">
     ${equipped.map(i=>`<div class="equipped-chip" title="${i.name}">
       <img src="${i.image}" alt="${i.name}">
     </div>`).join('')}
   </div>`:`<div class="no-equip-test">NINGUNA PIEZA EQUIPADA</div>`}
 </div>`
}
