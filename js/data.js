const GAME={
 total:5,
 levels:{
  suma:[{id:'suma1',name:'Nivel 1',desc:'Resultado hasta 10',max:10},{id:'suma2',name:'Nivel 2',desc:'Resultado hasta 20',max:20},{id:'suma3',name:'Nivel 3',desc:'Resultado hasta 100',max:100}],
  resta:[{id:'resta1',name:'Nivel 1',desc:'Hasta 10, sin negativos',max:10},{id:'resta2',name:'Nivel 2',desc:'Hasta 20, sin negativos',max:20},{id:'resta3',name:'Nivel 3',desc:'Hasta 100, sin negativos',max:100}],
  sopa:[{id:'sopa1',name:'Nivel 1',desc:'5 × 5 · horizontal',size:5,dirs:['h']},{id:'sopa2',name:'Nivel 2',desc:'6 × 6 · horizontal y vertical',size:6,dirs:['h','v']},{id:'sopa3',name:'Nivel 3',desc:'7 × 7 · también al revés',size:7,dirs:['h','v','hr','vr']}]
 },
 words:[['GATO','🐱'],['PATO','🦆'],['CASA','🏠'],['MESA','🪑'],['MANO','✋'],['LUNA','🌙'],['SOPA','🥣'],['CAMA','🛏️'],['SOL','☀️'],['PERA','🍐'],['PERRO','🐶'],['RANA','🐸'],['VACA','🐮'],['LEON','🦁'],['OSO','🐻'],['PEZ','🐟'],['RATON','🐭'],['MONO','🐵'],['CERDO','🐷'],['OVEJA','🐑'],['TIGRE','🐯'],['PANDA','🐼'],['ZORRO','🦊'],['KOALA','🐨'],['POLLO','🐤'],['ABEJA','🐝'],['FLOR','🌸'],['ARBOL','🌳'],['HOJA','🍃'],['NUBE','☁️'],['NIEVE','❄️'],['FUEGO','🔥'],['MAR','🌊'],['ISLA','🏝️'],['PAN','🍞'],['QUESO','🧀'],['HUEVO','🥚'],['LECHE','🥛'],['UVA','🍇'],['FRESA','🍓'],['COCHE','🚗'],['BARCO','🚢'],['TREN','🚆'],['AVION','✈️'],['BICI','🚲'],['BUS','🚌'],['RELOJ','⌚'],['LLAVE','🔑'],['LIBRO','📘'],['LAPIZ','✏️']].map(([word,icon])=>({word,icon})),
 items:[
  {id:'ce_comun_casco',name:'Casco espacial común',cat:'casco',price:15,image:'assets/equipment/caballero_espacial/comun/casco.png',quality:'comun'},
  {id:'ce_comun_pecho',name:'Peto espacial común',cat:'pecho',price:20,image:'assets/equipment/caballero_espacial/comun/pecho.png',quality:'comun'},
  {id:'ce_comun_guantes',name:'Guantes espaciales comunes',cat:'guantes',price:12,image:'assets/equipment/caballero_espacial/comun/guantes.png',quality:'comun'},
  {id:'ce_comun_cinturon',name:'Cinturón espacial común',cat:'cinturon',price:10,image:'assets/equipment/caballero_espacial/comun/cinturon.png',quality:'comun'},
  {id:'ce_comun_pierneras',name:'Pierneras espaciales comunes',cat:'pierneras',price:15,image:'assets/equipment/caballero_espacial/comun/pierneras.png',quality:'comun'},
  {id:'ce_comun_botas',name:'Botas espaciales comunes',cat:'botas',price:12,image:'assets/equipment/caballero_espacial/comun/botas.png',quality:'comun'},
  {id:'ce_comun_capa',name:'Capa espacial común',cat:'capa',price:18,image:'assets/equipment/caballero_espacial/comun/capa.png',quality:'comun'},
  {id:'ce_comun_espada',name:'Espada espacial común',cat:'arma',price:18,image:'assets/equipment/caballero_espacial/comun/espada.png',quality:'comun'},
  {id:'ce_comun_arma_energia',name:'Arma de energía común',cat:'arma',price:20,image:'assets/equipment/caballero_espacial/comun/arma_energia.png',quality:'comun'},
  {id:'ce_comun_escudo',name:'Escudo estelar común',cat:'escudo',price:18,image:'assets/equipment/caballero_espacial/comun/escudo.png',quality:'comun'}
 ]
};
