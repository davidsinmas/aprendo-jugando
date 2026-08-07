const STORE='aprendo_jugando_datos';
const EQUIP_SLOTS=['casco','pecho','guantes','cinturon','pierneras','botas','capa','arma','escudo'];

function emptyEquip(){
 const e={};EQUIP_SLOTS.forEach(k=>e[k]=null);return e
}

function blank(){
 return{
  versionDatos:7,
  perfil:{nombre:'Jugador'},
  diamantes:0,
  inventario:[],
  equipado:emptyEquip(),
  estadisticas:{},
  totalAciertos:0,
  nivelJugador:1,
  xp:0,
  retosDiarios:{fecha:'',sumas:false,restas:false,sopa:false,premio:false},
  retosCompletadosTotal:0,
  logros:[]
 }
}

function load(){
 let d;
 try{d=JSON.parse(localStorage.getItem(STORE))}catch{}
 if(!d)d=blank();

 d.diamantes=d.diamantes??d.monedas??0;
 delete d.monedas;
 d.inventario=Array.isArray(d.inventario)?d.inventario:[];
 if(!d.equipado || Array.isArray(d.equipado))d.equipado=emptyEquip();

 const next=emptyEquip();
 EQUIP_SLOTS.forEach(k=>{if(d.equipado[k])next[k]=d.equipado[k]});
 d.equipado=next;

 if(!d.nivelJugador)d.nivelJugador=1;
 if(d.xp===undefined)d.xp=0;
 if(!d.retosDiarios)d.retosDiarios={fecha:'',sumas:false,restas:false,sopa:false,premio:false};
 if(d.retosCompletadosTotal===undefined)d.retosCompletadosTotal=0;
 if(!d.logros)d.logros=[];
 d.versionDatos=7;

 for(const id of ['suma1','suma2','suma3','resta1','resta2','resta3']){
  const v=localStorage.getItem('aprendo_stats_'+id);
  if(v&&!d.estadisticas[id])try{d.estadisticas[id]=JSON.parse(v)}catch{}
 }
 save(d);return d
}
function save(d){localStorage.setItem(STORE,JSON.stringify(d))}
