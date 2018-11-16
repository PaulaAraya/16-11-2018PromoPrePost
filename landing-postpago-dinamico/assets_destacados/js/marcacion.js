$( document ).ready(function() {

var plan_nombre = "";
var plan_precio = "";
var plan_tab = "";

/*Botón Lo quiero*/
$(".btn-Landing").click(function() {
	
	if($(this).attr('id') != 'servicio-destacado-btn' && $(this).attr('id') != 'equipo-destacado-btn'){	
		plan_nombre = $(this).parent().find('h1').text();
		plan_precio = $(this).prev().text();
		//console.log(normalize(plan_nombre)+' - '+(plan_precio));
		dataLayer.push({'event': 'ev-int','ev-cat': 'planes postpago - lo quiero','ev-acc': 'click to action','ev-etq': normalize(plan_nombre)+' - '+(plan_precio)});
	}
});
/*Fin Botón Lo quiero*/	

/*Tabs Plan*/
$(".nav-tabs a").click(function() {
	plan_nombre = $(this).parent().parent().next().find('h1').text();
	plan_tab = $(this).text();
	//console.log(normalize(plan_nombre)+' - '+normalize((plan_tab)));
	dataLayer.push({'event': 'ev-int','ev-cat': 'planes postpago - plan - tab '+normalize(plan_tab),'ev-acc': 'interaction','ev-etq': normalize(plan_nombre)});
});
/*Fin Tabs Plan*/

/*Ver Todos los Planes*/
$(".plan-link").click(function() {
	dataLayer.push({'event': 'ev-int','ev-cat': 'planes postpago - ver todos los planes','ev-acc': 'goto','ev-etq': normalize($(this).text())});
});

/*Fin Ver Todos los Planes*/

/*enlaces telefonia*/
$(".enlace-telefonia").click(function() {
	dataLayer.push({'event': 'ev-int','ev-cat': 'planes postpago - enlaces telefonia','ev-acc': 'goto','ev-etq': normalize($(this).text().replace(' >', ''))});
});
/*enlaces telefonia*/

/*enlaces promociones*/
$(".enlace-promociones").click(function() {
	dataLayer.push({'event': 'ev-int','ev-cat': 'planes postpago - enlaces promociones','ev-acc': 'goto','ev-etq': normalize($(this).attr('data-promo'))});
});
/*enlaces promociones*/

/*enlace btn-planes-multimedia*/
$(".btn-planes-multimedia").click(function() {
	dataLayer.push({'event': 'ev-int','ev-cat': 'planes postpago - ver mas planes multimedia','ev-acc': 'goto','ev-etq': 'ver mas planes multimedia'});
});
/*enlaces btn-planes-multimedia*/




var normalize = (function() {
  var from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç", 
	  to   = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc",
	  mapping = {};
 
  for(var i = 0, j = from.length; i < j; i++ )
	  mapping[ from.charAt( i ) ] = to.charAt( i );
 
  return function( str ) {
	  var ret = [];
	  for( var i = 0, j = str.length; i < j; i++ ) {
		  var c = str.charAt( i );
		  if( mapping.hasOwnProperty( str.charAt( i ) ) )
			  ret.push( mapping[ c ] );
		  else
			  ret.push( c );
	  }      
	  return ret.join( '' ).toLowerCase();
  }
 
})();


});