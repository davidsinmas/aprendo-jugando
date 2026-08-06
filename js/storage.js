const STORE='aprendo_jugando_datos';
function blank(){return{versionDatos:6,perfil:{nombre:'Jugador'},diamantes:0,inventario:[],equipado:{equipacion:null,casco:null,arma:null,escudo:null},estadisticas:{},totalAciertos:0,nivelJugador:1,xp:0,retosDiarios:{fecha:'',sumas:false,restas:false,sopa:false,premio:false},retosCompletadosTotal:0,logros:[]}}
function load(){let d;try{d=JSON.parse(localStorage.getItem(STORE))}catch{}if(!d)d=blank();
if(d.versionDatos<2||d.monedas!==undefined){d.diamantes=d.diamantes??d.monedas??0;d.inventario=d.inventario||[];d.equipado=Array.isArray(d.equipado)?{equipacion:null,casco:null,arma:null,escudo:null}:d.equipado||{equipacion:null,casco:null,arma:null,escudo:null};delete d.monedas}
if(!d.equipado.escudo)d.equipado.escudo=null;if(!d.nivelJugador)d.nivelJugador=1;if(d.xp===undefined)d.xp=0;if(!d.retosDiarios)d.retosDiarios={fecha:'',sumas:false,restas:false,sopa:false,premio:false};if(d.retosCompletadosTotal===undefined)d.retosCompletadosTotal=0;if(!d.logros)d.logros=[];d.versionDatos=6;
for(const id of ['suma1','suma2','suma3','resta1','resta2','resta3']){const v=localStorage.getItem('aprendo_stats_'+id);if(v&&!d.estadisticas[id])try{d.estadisticas[id]=JSON.parse(v)}catch{}}
save(d);return d}
function save(d){localStorage.setItem(STORE,JSON.stringify(d))}
