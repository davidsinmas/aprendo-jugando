const GAME={
 total:5,
 levels:{
  suma:[{id:'suma1',name:'Nivel 1',desc:'Resultado hasta 10',max:10},{id:'suma2',name:'Nivel 2',desc:'Resultado hasta 20',max:20},{id:'suma3',name:'Nivel 3',desc:'Resultado hasta 100',max:100}],
  resta:[{id:'resta1',name:'Nivel 1',desc:'Hasta 10, sin negativos',max:10},{id:'resta2',name:'Nivel 2',desc:'Hasta 20, sin negativos',max:20},{id:'resta3',name:'Nivel 3',desc:'Hasta 100, sin negativos',max:100}],
  sopa:[{id:'sopa1',name:'Nivel 1',desc:'5 × 5 · horizontal',size:5,dirs:['h']},{id:'sopa2',name:'Nivel 2',desc:'6 × 6 · horizontal y vertical',size:6,dirs:['h','v']},{id:'sopa3',name:'Nivel 3',desc:'7 × 7 · también al revés',size:7,dirs:['h','v','hr','vr']}]
 },
 words:[['GATO','🐱'],['PATO','🦆'],['CASA','🏠'],['MESA','🪑'],['MANO','✋'],['LUNA','🌙'],['SOPA','🥣'],['CAMA','🛏️'],['SOL','☀️'],['PERA','🍐'],['PERRO','🐶'],['RANA','🐸'],['VACA','🐮'],['LEON','🦁'],['OSO','🐻'],['PEZ','🐟'],['RATON','🐭'],['MONO','🐵'],['CERDO','🐷'],['OVEJA','🐑'],['TIGRE','🐯'],['PANDA','🐼'],['ZORRO','🦊'],['KOALA','🐨'],['POLLO','🐤'],['ABEJA','🐝'],['FLOR','🌸'],['ARBOL','🌳'],['HOJA','🍃'],['NUBE','☁️'],['NIEVE','❄️'],['FUEGO','🔥'],['MAR','🌊'],['ISLA','🏝️'],['PAN','🍞'],['QUESO','🧀'],['HUEVO','🥚'],['LECHE','🥛'],['UVA','🍇'],['FRESA','🍓'],['COCHE','🚗'],['BARCO','🚢'],['TREN','🚆'],['AVION','✈️'],['BICI','🚲'],['BUS','🚌'],['RELOJ','⌚'],['LLAVE','🔑'],['LIBRO','📘'],['LAPIZ','✏️']].map(([word,icon])=>({word,icon})),
 items:[
  {id:'ce_comun_casco',name:'Casco espacial común',cat:'casco',price:15,image:'assets/equipment/caballero_espacial/comun/casco.png?v=240',quality:'comun',visual:{x:50,y:19,w:31,rot:0,z:80}},
  {id:'ce_comun_pecho',name:'Peto espacial común',cat:'pecho',price:20,image:'assets/equipment/caballero_espacial/comun/pecho.png?v=240',quality:'comun',visual:{x:50,y:42,w:37,rot:0,z:40}},
  {id:'ce_comun_guantes',name:'Guantes espaciales comunes',cat:'guantes',price:12,image:'assets/equipment/caballero_espacial/comun/guantes.png?v=240',quality:'comun',visual:{x:50,y:58,w:62,rot:0,z:65}},
  {id:'ce_comun_cinturon',name:'Cinturón espacial común',cat:'cinturon',price:10,image:'assets/equipment/caballero_espacial/comun/cinturon.png?v=240',quality:'comun',visual:{x:50,y:59,w:33,rot:0,z:55}},
  {id:'ce_comun_pierneras',name:'Pierneras espaciales comunes',cat:'pierneras',price:15,image:'assets/equipment/caballero_espacial/comun/pierneras.png?v=240',quality:'comun',visual:{x:50,y:73,w:40,rot:0,z:45}},
  {id:'ce_comun_botas',name:'Botas espaciales comunes',cat:'botas',price:12,image:'assets/equipment/caballero_espacial/comun/botas.png?v=240',quality:'comun',visual:{x:50,y:88,w:43,rot:0,z:50}},
  {id:'ce_comun_capa',name:'Capa espacial común',cat:'capa',price:18,image:'assets/equipment/caballero_espacial/comun/capa.png?v=240',quality:'comun',visual:{x:50,y:51,w:50,rot:0,z:15}},
  {id:'ce_comun_espada',name:'Espada espacial común',cat:'arma',price:18,image:'assets/equipment/caballero_espacial/comun/espada.png?v=240',quality:'comun',visual:{x:72,y:54,w:30,rot:-6,z:90}},
  {id:'ce_comun_arma_energia',name:'Arma de energía común',cat:'arma',price:20,image:'assets/equipment/caballero_espacial/comun/arma_energia.png?v=240',quality:'comun',visual:{x:72,y:54,w:30,rot:-6,z:90}},
  {id:'ce_comun_escudo',name:'Escudo estelar común',cat:'escudo',price:18,image:'assets/equipment/caballero_espacial/comun/escudo.png?v=240',quality:'comun',visual:{x:27,y:53,w:30,rot:3,z:85}}
 ]
};
