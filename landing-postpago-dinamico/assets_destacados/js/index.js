$( document ).ready(function() {
	var html_planes = '';
	var html_plan_destacado_desk = '';
	var html_plan_destacado_mobi = '';
	var tab_carc = '';
	
	// console.log($(window).width());

	/*INICIALIZAR PLANES EN CARRUSEL*/
	for (var i in planes_moviles) {	
		tab_carc = parseInt(i);
		switch (tab_carc) {
			case 0:
				tab_carc = "uno";
				break;
			case 1:
				tab_carc = "dos";
				break;
			case 2:
				tab_carc = "tres";
				break;
			case 3:
				tab_carc = "cuatro";
				break;
			case 4:
				tab_carc = "cinco";
				break;
		}
		
					
		var id = 								planes_moviles[i]['id'];
		var nombre = 							planes_moviles[i]['nombre'];
		var valor_fijo_portabilidad_propio =	planes_moviles[i]['valor_fijo_portabilidad_propio'];
		var valor_fijo_portabilidad_arriendo =  planes_moviles[i]['valor_fijo_portabilidad_arriendo'];
		var valor_fijo_numero_nuevo_propio = 	planes_moviles[i]['valor_fijo_numero_nuevo_propio'];
		var valor_fijo_numero_nuevo_arriendo =  planes_moviles[i]['valor_fijo_numero_nuevo_arriendo'];
		var minutos = 							planes_moviles[i]['minutos'];
		var megas_navegacion =					planes_moviles[i]['megas_navegacion'];
		var destacado =							planes_moviles[i]['destacado'];
		var url_plan =							planes_moviles[i]['url_plan'];
		var sms = 								planes_moviles[i]['sms'];
		if(destacado == '1'){
			if($(window).width() <= 600){
				html_planes += '<li>';
			}
			html_planes += '<article class="plan-destacado-Landing">';
			html_planes += '<ul class="nav nav-tabs">';
			html_planes += '<li class="active"><a data-toggle="tab" href="#plan-'+tab_carc+'">Plan</a></li>';
			html_planes += '<li><a data-toggle="tab" href="#caract-'+tab_carc+'">Características</a></li>';
			html_planes += '</ul>';
			html_planes += '<div class="tab-content">';
			html_planes += '<div id="plan-'+tab_carc+'" class="tab-pane fade in active">';
			html_planes += '<h1>Plan <strong>'+nombre+'</strong></h1>';
			html_planes += '<div class="Element-Precio">';
			
			if(id == 'prm' || id == 'prm_black'){
				html_planes += '<span style="margin-top:10px;">GB Libres</span>';
			}else{
				html_planes += '<h3>Internet</h3>';
			}

            if(id == 'prm'){
                html_planes += '<h3>Para disfrutar hasta 60 GB</h3>';
            }else if ( id == 'prm_black'){
                html_planes += '<h3>Para disfrutar hasta 70 GB</h3>';
            }else{
			html_planes += '<span>'+megas_navegacion+'</span>';
			}
			if(id != 's'){
				html_planes += '<!--<div class="destacado">Plan disponible en 2X1</div>-->';
			}
			html_planes += '</div>';
			
			if(id != 'prm' && id != 'prm_black'){
				html_planes += '<h3>Navegación Libre en Redes Sociales:</h3>';
				html_planes += '<ul class="redes-sociales-P">';
				html_planes += '<li><img src="assets_destacados/img/social-media-i.svg" alt="Red social Instagram"></li>';
				html_planes += '<li><img src="assets_destacados/img/social-media-f.svg" alt="Red social Facebook"></li>';
				html_planes += '<li><img src="assets_destacados/img/social-media-w.svg" alt="Red social whatsApp"></li>';
				html_planes += '<li><img src="assets_destacados/img/social-media-m.svg" alt="Red social Messenger"></li>';
				html_planes += '<li><img src="assets_destacados/img/social-media-mu.svg" alt="Claro video"></li>';
				if(id == 's' || id == 'm' || id == 'x' || id == 'xl' || id == 'l'){
					html_planes += '<li><img src="assets_destacados/img/social-media-tw.svg" alt="Red Social Twitter"></li>';			
				}
				html_planes += '</ul>';
				html_planes += '<img src="assets_destacados/img/incluye_llamadas_whatsapp.png" alt="" style="width: unset;margin: 0 auto; display:block;">';
			}
			
			html_planes += '<ul class="caractaristicas-min">';
			html_planes += '<li class="caract line-plan-min">';
			html_planes += '<img src="assets_destacados/img/icon-minutos.svg" alt="icono minutos">';
			
			if(minutos == 'libres'){
				if(id == 'm' || id == 'x' || id == 'y'){
					html_planes += '<h2>Minutos <strong>'+minutos+'</strong> a 100 números</h2>';
				}else if(id == 'xl' || id == 'prm' || id == 'prm_black' || id == 'l'){
					html_planes += '<h2>Minutos <strong>'+minutos+'</strong> a 300 números</h2>';
				}else{
					html_planes += '<h2>Minutos <strong>'+minutos+'</strong></h2>';
					
				}
				
			}else{
				html_planes += '<h2><strong>'+minutos+' minutos</strong></h2>';
			}
			html_planes += '</li>';
			html_planes += '</ul>';
			html_planes += '<p>Valor mensual desde:</p>';
			html_planes += '<h2><span>$</span>'+valor_fijo_portabilidad_propio+'</h2>';
			html_planes += '<a class="btn-Landing OPEN-MODAL" data-plan-name="¡Contrata Plan '+nombre.toUpperCase()+' como quieras!" data-plan-url="'+url_plan+'" data-plan-producto="Plan '+nombre.toUpperCase()+'" href="#animatedModal">Lo quiero <i class="fa fa-angle-right" aria-hidden="true"></i></a>';
			html_planes += '</div>';
			html_planes += '<div id="caract-'+tab_carc+'" class="tab-pane fade">';
			html_planes += '<ul class="precios-planes">';
			html_planes += '<li class="title-plan line-plan-1" style="width: 100%">';
			html_planes += '<h5 style="font-size: 22px">Cargo fijo mensual</h5>';
			html_planes += '<p>$'+valor_fijo_portabilidad_propio+'</p>';
			html_planes += '</li>';
			html_planes += '</ul>';
			html_planes += '<ul class="caractaristicas-plan">';
			html_planes += '<li class="caract line-plan-1">';
			html_planes += '<div style="height:55px;float:left;" ><img src="assets_destacados/img/icon-minutos.svg" alt="icono minutos"></div>';
			if(minutos == 'libres'){
				if(id == 'm' || id == 'x' || id == 'y'){
					html_planes += '<h2>Minutos <strong>'+minutos+'</strong> a 100 números</h2>';
				}
				if(id == 'xl' || id == 'prm' || id == 'prm_black' || id == 'l'){
					html_planes += '<h2>Minutos <strong>'+minutos+'</strong> a 300 números</h2>';
				}
			}else{
				html_planes += '<h2><strong>'+minutos+' </strong>minutos</h2>';
			}
			html_planes += '</li>';
			html_planes += '<li class="caract line-plan-2">';
			html_planes += '<img src="assets_destacados/img/icon-sms.svg" alt="icono de sms">';
			if(sms == 'libres'){
				if(id == 'xl' || id == 'prm' || id == 'prm_black' || id == 'l'){
					html_planes += '<h2>SMS <strong>'+sms+'</strong> a 300 números</h2>';					
				}else{
					html_planes += '<h2>SMS <strong>'+sms+'</strong></h2>';					
				}
			}else{
				html_planes += '<h2><strong>'+sms+'</strong> SMS</h2>';
			}
			html_planes += '</li>';
			html_planes += '<li class="caract2 line-plan-3">';
			
			if(id != 's'){
				html_planes += '<p>Incluye suscripci&oacute;n a:</p>';
				html_planes += '<img src="assets_destacados/img/icon-video.svg" alt="icono minutos">';
				html_planes += '<!--<h2><strong>+1 Estreno de regalo</strong></h2>-->';
			}
			
			html_planes += '</li>';
			html_planes += '<li class="caract2 line-plan-4">';
			html_planes += '<img src="assets_destacados/img/icon-musica.svg" alt="icono de sms">';
			/*
			html_planes += '<a class="link-Landing" onclick="window.top.location.href=\'http://www.clarochile.cl/personas/servicios/entretenimiento/claro-musica/\';" href="#">Conoce más</a>';
			*/
			if(id == 'prm_black'){
				html_planes += '<p>Incluye suscripción a Claro Música</p>';								
			}else{
				html_planes += '<p>Sin consumir tus megas, sección escucha gratis</p>';				
			}
			html_planes += '</li>';
			html_planes += '</ul>';
			html_planes += '<a class="link-Landing plan-link" href="detalle/?plan='+id+'">Ver condiciones del plan</a>';
			html_planes += '</div>';
			html_planes += '</div>';
			html_planes += '</article>';
			if($(window).width() <= 600){
				html_planes += '</li>';
			}
		}
	}	
	
	
	 if($(window).width() <= 600){
		$(".slides-desktop").remove();
		 $(".slides").append(html_planes);
	}else{
		$(".slides").remove();
		$(".slides-desktop").append(html_planes);
	}
	

});





