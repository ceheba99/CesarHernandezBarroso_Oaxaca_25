const a0_0x175b09=a0_0x1d2e;(function(_0x2380fd,_0x1b0a83){const _0x4f34cd=a0_0x1d2e,_0x5bc937=_0x2380fd();while(!![]){try{const _0x2a8f0d=-parseInt(_0x4f34cd(0x1c2))/0x1+-parseInt(_0x4f34cd(0x1ff))/0x2+parseInt(_0x4f34cd(0x1fc))/0x3+-parseInt(_0x4f34cd(0x1cb))/0x4*(-parseInt(_0x4f34cd(0x1f0))/0x5)+-parseInt(_0x4f34cd(0x1b7))/0x6+parseInt(_0x4f34cd(0x1f4))/0x7+parseInt(_0x4f34cd(0x1f2))/0x8;if(_0x2a8f0d===_0x1b0a83)break;else _0x5bc937['push'](_0x5bc937['shift']());}catch(_0x27394b){_0x5bc937['push'](_0x5bc937['shift']());}}}(a0_0x5470,0x6f0ae));import{MAP_CONFIG}from'./config.obf.js';import{cargarCapaGeoJSON,manejarError}from'./utils.obf.js';import{aplicarFormatoCondicional}from'./grafico.obf.js';function a0_0x1d2e(_0x5366af,_0x26451){const _0x5470ef=a0_0x5470();return a0_0x1d2e=function(_0x1d2e92,_0x3f46c7){_0x1d2e92=_0x1d2e92-0x1b1;let _0x10c69e=_0x5470ef[_0x1d2e92];return _0x10c69e;},a0_0x1d2e(_0x5366af,_0x26451);}let allLayers=[],map,ocultarPoligonos=![];export function mostrarTodosLosPoligonos(){const _0x5a7ce5=a0_0x1d2e;allLayers[_0x5a7ce5(0x1b6)](_0x4fe60c=>{const _0x2e066c=_0x5a7ce5;!map['hasLayer'](_0x4fe60c)&&map[_0x2e066c(0x202)](_0x4fe60c);}),map[_0x5a7ce5(0x1e3)]();}function ocultarOtrosPoligonos(_0x19439c){const _0x25e53f=a0_0x1d2e;ocultarPoligonos&&(allLayers[_0x25e53f(0x1b6)](_0x1c1099=>{const _0x30a004=_0x25e53f;_0x1c1099!==_0x19439c&&map[_0x30a004(0x1ee)](_0x1c1099)&&map[_0x30a004(0x208)](_0x1c1099);}),map[_0x25e53f(0x1e3)]());}export function toggleOcultarPoligonos(){const _0x2f0113=a0_0x1d2e;ocultarPoligonos=!ocultarPoligonos;const _0x5de914=ocultarPoligonos?_0x2f0113(0x1f7):_0x2f0113(0x1b8);alert(_0x5de914);}export function cargarCapaColonias(_0xf55bfe){const _0x13f0f1=a0_0x1d2e,_0x45dbc0=MAP_CONFIG['capaColoniasUrl'];cargarCapaGeoJSON(_0x45dbc0,_0x4181ca=>{const _0x2b6646=a0_0x1d2e,_0x1766a6=L[_0x2b6646(0x1f8)](_0x4181ca,{'style':{'color':_0x2b6646(0x1ec),'weight':0x3},'onEachFeature':(_0x22c47d,_0x193b8f)=>{const _0xf4a323=_0x2b6646,_0x2c279f=_0x22c47d[_0xf4a323(0x1bf)];_0x193b8f['on'](_0xf4a323(0x20c),function(){const _0x5c65e9=_0xf4a323;this[_0x5c65e9(0x1d9)](_0x5c65e9(0x206)+(_0x2c279f[_0x5c65e9(0x1ef)]||'Sin\x20nombre')+_0x5c65e9(0x20d),{'permanent':![],'direction':'top','className':'colonia-label'})[_0x5c65e9(0x1fe)]();}),_0x193b8f['on'](_0xf4a323(0x204),function(){const _0x29a22e=_0xf4a323;this[_0x29a22e(0x1f1)]();});}});_0xf55bfe['addOverlay'](_0x1766a6,_0x2b6646(0x203)),_0x1766a6[_0x2b6646(0x1cd)](map),map[_0x2b6646(0x1e3)]();},_0x37a3b6=>manejarError(_0x37a3b6,_0x13f0f1(0x1dc)));}export function cargarCapaINEGI(_0x6fedd7){const _0x891cc8=a0_0x1d2e;cargarCapaGeoJSON(MAP_CONFIG['capaINEGIUrl'],_0x5738f6=>{const _0x46b753=a0_0x1d2e,_0x2043f4=L['geoJSON'](_0x5738f6,{'onEachFeature':(_0x59095e,_0x29c2c3)=>{const _0x5f58ab=a0_0x1d2e,_0x56499b=_0x59095e['properties'];let _0x3a1630=_0x5f58ab(0x20b)+(_0x56499b[_0x5f58ab(0x1c7)]||_0x5f58ab(0x1d8))+'<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>POBTOT:</strong>\x20'+(_0x56499b['POBTOT']||_0x5f58ab(0x1d8))+_0x5f58ab(0x1d2)+(_0x56499b[_0x5f58ab(0x207)]||'N/A')+'<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>POBMAS:</strong>\x20'+(_0x56499b['POBMAS']||_0x5f58ab(0x1d8))+'<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>P_0A17:</strong>\x20'+(_0x56499b[_0x5f58ab(0x1c5)]||_0x5f58ab(0x1d8))+_0x5f58ab(0x1c8)+(_0x56499b[_0x5f58ab(0x1d1)]||_0x5f58ab(0x1d8))+_0x5f58ab(0x1e5)+(_0x56499b[_0x5f58ab(0x1cc)]||_0x5f58ab(0x1d8))+_0x5f58ab(0x1bc)+(_0x56499b[_0x5f58ab(0x1d5)]||'N/A')+_0x5f58ab(0x20e)+(_0x56499b[_0x5f58ab(0x1e0)]||_0x5f58ab(0x1d8))+_0x5f58ab(0x1e1)+(_0x56499b['PSINDER']||_0x5f58ab(0x1d8))+_0x5f58ab(0x1ea)+(_0x56499b['PDER_SS']||_0x5f58ab(0x1d8))+'<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>TOTHOG:</strong>\x20'+(_0x56499b[_0x5f58ab(0x1d6)]||_0x5f58ab(0x1d8))+_0x5f58ab(0x210)+(_0x56499b[_0x5f58ab(0x1e4)]||'N/A')+_0x5f58ab(0x1de)+(_0x56499b[_0x5f58ab(0x1f6)]||_0x5f58ab(0x1d8))+_0x5f58ab(0x1ca)+(_0x56499b[_0x5f58ab(0x20a)]||_0x5f58ab(0x1d8))+'<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>VPH_AGUAFV:</strong>\x20'+(_0x56499b[_0x5f58ab(0x1b9)]||_0x5f58ab(0x1d8))+_0x5f58ab(0x1e2)+(_0x56499b['VPH_NODREN']||_0x5f58ab(0x1d8))+_0x5f58ab(0x1da)+(_0x56499b['VPH_NDEAED']||_0x5f58ab(0x1d8))+_0x5f58ab(0x1d7)+(_0x56499b[_0x5f58ab(0x1be)]||_0x5f58ab(0x1d8))+_0x5f58ab(0x1c0)+(_0x56499b[_0x5f58ab(0x1fd)]||'N/A')+_0x5f58ab(0x20f)+(_0x56499b[_0x5f58ab(0x1db)]||'N/A')+_0x5f58ab(0x1b3)+(_0x56499b[_0x5f58ab(0x1df)]||_0x5f58ab(0x1d8))+_0x5f58ab(0x1bb);_0x29c2c3[_0x5f58ab(0x1d4)](_0x3a1630),_0x29c2c3['on'](_0x5f58ab(0x1b2),()=>{const _0x317edd=_0x5f58ab;ocultarOtrosPoligonos(_0x29c2c3),document['getElementById'](_0x317edd(0x1d3))['innerHTML']='',window[_0x317edd(0x1f5)](_0x56499b),window['mostrarDatosCompletos']({'features':[_0x59095e]});}),allLayers['push'](_0x29c2c3);}});_0x6fedd7[_0x46b753(0x1b1)](_0x2043f4,'Capa\x20INEGI'),_0x2043f4[_0x46b753(0x1cd)](map),map[_0x46b753(0x1e3)]();},_0x2cb4bb=>manejarError(_0x2cb4bb,_0x891cc8(0x1c4)));}export function cargarCapaOriginal(_0x2168ce){const _0x1a4811=a0_0x1d2e;cargarCapaGeoJSON(MAP_CONFIG[_0x1a4811(0x1eb)],_0x477b1f=>{const _0x448357=_0x1a4811,_0x145f78=L[_0x448357(0x1f8)](_0x477b1f,{'style':function(_0x1f0e79){const _0x226191=_0x448357;return{'color':_0x1f0e79[_0x226191(0x1bf)][_0x226191(0x1c1)]>_0x1f0e79['properties']['MORENA']?_0x226191(0x1e6):_0x226191(0x1e9)};},'onEachFeature':(_0x121c46,_0x3529f6)=>{const _0x14a5bf=_0x448357,_0x532a8a=_0x121c46[_0x14a5bf(0x1bf)];let _0x3d44ad='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>SECCION:</strong>\x20'+(_0x532a8a[_0x14a5bf(0x1c7)]||'N/A')+_0x14a5bf(0x1c6)+(_0x532a8a[_0x14a5bf(0x1ce)]||_0x14a5bf(0x1d8))+_0x14a5bf(0x1c3)+(_0x532a8a[_0x14a5bf(0x1ed)]||_0x14a5bf(0x1d8))+'<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>LISTA\x20HOMBRES:</strong>\x20'+(_0x532a8a[_0x14a5bf(0x1e8)]||_0x14a5bf(0x1d8))+_0x14a5bf(0x205)+(_0x532a8a[_0x14a5bf(0x209)]||_0x14a5bf(0x1d8))+_0x14a5bf(0x1cf)+(_0x532a8a[_0x14a5bf(0x1f9)]||_0x14a5bf(0x1d8))+_0x14a5bf(0x1bb);_0x3529f6['bindPopup'](_0x3d44ad),_0x3529f6['on'](_0x14a5bf(0x1b2),()=>{const _0x3b6646=_0x14a5bf;ocultarOtrosPoligonos(_0x3529f6),document[_0x3b6646(0x1d0)]('info-table-body')[_0x3b6646(0x1dd)]='',window['actualizarGrafico'](_0x532a8a),window[_0x3b6646(0x1ba)]({'features':[_0x121c46]}),aplicarFormatoCondicional();}),allLayers[_0x14a5bf(0x1c9)](_0x3529f6);}});_0x2168ce[_0x448357(0x1b1)](_0x145f78,_0x448357(0x1b4)),_0x145f78[_0x448357(0x1cd)](map),map['invalidateSize']();},_0x446d0c=>manejarError(_0x446d0c,_0x1a4811(0x1fa)));}export function inicializarMapa(){const _0x129a7b=a0_0x1d2e;map=L[_0x129a7b(0x1e7)](_0x129a7b(0x1e7))[_0x129a7b(0x211)]([17.06542,-96.72365],0xc);const _0xee93b4=L[_0x129a7b(0x1f3)](_0x129a7b(0x1fb),{'attribution':_0x129a7b(0x200)}),_0x3156d2=L[_0x129a7b(0x1f3)](_0x129a7b(0x1b5),{'attribution':_0x129a7b(0x200)});let _0x2e9416=L['control']['layers']({'Google\x20Maps':_0xee93b4,'Google\x20Satélite':_0x3156d2})[_0x129a7b(0x1cd)](map);return _0xee93b4[_0x129a7b(0x1cd)](map),_0x2e9416;}function a0_0x5470(){const _0x4a0af1=['\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>P_60YMAS:</strong>\x20','Escape','VPH_SINRTV','properties','<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>VPH_SINLTC:</strong>\x20','PVEM','873293tZJNmC','<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>DISTRITO\x20LOCAL:</strong>\x20','Error\x20al\x20cargar\x20la\x20capa\x20INEGI','P_0A17','<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>DISTRITO\x20FEDERAL:</strong>\x20','SECCION','<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>P_18YMAS:</strong>\x20','push','<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>VPH_S_ELEC:</strong>\x20','11600JptHCA','P_18A24','addTo','DISTRITO_FEDERAL','<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>LISTA\x20NOMINAL:</strong>\x20','getElementById','P_18YMAS','<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>POBFEM:</strong>\x20','info-table-body','bindPopup','P_60YMAS','TOTHOG','<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>VPH_SINRTV:</strong>\x20','N/A','bindTooltip','<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>VPH_NDEAED:</strong>\x20','VPH_SINCIN','Error\x20al\x20cargar\x20la\x20capa\x20de\x20colonias','innerHTML','<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>VPH_PISOTI:</strong>\x20','VPH_SINTIC','PEA','<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>PSINDER:</strong>\x20','<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>VPH_NODREN:</strong>\x20','invalidateSize','PROM_OCUP','<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>P_18A24:</strong>\x20','rgb(118,\x20231,\x2025)','map','LISTA_HOMBRES','rgb(148,\x2023,\x2013)','<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>PDER_SS:</strong>\x20','capaOriginalUrl','yellow','DISTRITO_LOCAL','hasLayer','NOMBRE','435rsKnup','closeTooltip','13929808wGwgvm','tileLayer','1062453EiYbMq','actualizarGrafico','VPH_PISOTI','Ocultar\x20otros\x20polígonos\x20activado','geoJSON','LISTA_NOMINAL','Error\x20al\x20cargar\x20la\x20capa\x20original','https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&key=AIzaSyDfiPrJI5FlOqTkebOtNuK4vO4K2IEMhOk','741498PUidHD','VPH_SINLTC','openTooltip','825564qwJevR','&copy;\x20<a\x20href=\x22https://www.google.com/maps\x22>Google\x20Maps</a>','addEventListener','addLayer','Colonias','mouseout','<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>LISTA\x20MUJERES:</strong>\x20','<strong>','POBFEM','removeLayer','LISTA_MUJERES','VPH_S_ELEC','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>SECCION:</strong>\x20','mouseover','</strong>','<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>PEA:</strong>\x20','<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>VPH_SINCIN:</strong>\x20','<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>PROM_OCUP:</strong>\x20','setView','addOverlay','click','<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>VPH_SINTIC:</strong>\x20','Capa\x20Original','https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}&key=AIzaSyDfiPrJI5FlOqTkebOtNuK4vO4K2IEMhOk','forEach','3909396SPAvKv','Ocultar\x20otros\x20polígonos\x20desactivado','VPH_AGUAFV','mostrarDatosCompletos'];a0_0x5470=function(){return _0x4a0af1;};return a0_0x5470();}document[a0_0x175b09(0x201)]('keydown',function(_0x359a02){const _0x47ea15=a0_0x175b09;_0x359a02['key']===_0x47ea15(0x1bd)&&mostrarTodosLosPoligonos();});