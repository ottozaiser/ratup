!function(o){o("#toggle-password").on("click",function(a){a.preventDefault(),"text"==o("#pwd").attr("type")?(o("#pwd").attr("type","password"),o("#toggle-password .toggle-icon").removeClass("fa-eye-slash"),o("#toggle-password .toggle-icon").addClass("fa-eye")):"password"==o("#pwd").attr("type")&&(o("#pwd").attr("type","text"),o("#toggle-password .toggle-icon").addClass("fa-eye-slash"),o("#toggle-password .toggle-icon").removeClass("fa-eye"))})}(jQuery);var getUrlParameter=function(o){var a,e,r=window.location.search.substring(1),s=r.split("&");for(e=0;e<s.length;e++)if(a=s[e].split("="),a[0]===o)return void 0===a[1]||decodeURIComponent(a[1])},ordenArray=["Últimos avisos","Ordenados por Película A-Z","Ordenados por Película Z-A","Ordenados por Aviso más solicitado","Ordenados por Perfil con mejor ranking"],peliculasArray=["12 horas para sobrevivir: el inicio","1945","Acusada","Aire","Alfa","All inclusive","Animales en apuros","Animales fantásticos 2","Bohemian Rhapsody","Bohemian Rhapsody SING ALONG","Camino sinuoso","Christopher Robin","Cold War","De despojos y costillas","Dovlatov","El Potro","El amor menos pensado","El cascanueces y los cuatro reinos","El libro de imagen","El origen de la tristeza","El otro verano","El repostero de Berlin","El silencio es un cuerpo que cae","El ángel","Escalofríos 2","Esto no es un golpe","Fátima, el último misterio","Gauguin: viaje a Tahiti","Gonjiam: hospital maldito","Gracias Gauchito","Halloween","Hell Fest: juegos diabólicos","Impuros","Infiltrado del kkklan","Konstruktion Argentina","La casa junto al mar","La esposa","La monja","La noche de 12 años","La número uno","Las hijas del fuego","Los increíbles 2","Lucky","Matar o morir","Mi mejor amigo","Mi obra maestra","Misión imposible 6","Nace una estrella","Operación Overlord","Pablo Escobar: La traición","Pañuelos para la historia","Piazzolla: los años del tiburón","Pie pequeño","Re loca","Rojo","Sangre Blanca","Solo el amor","Somos campeones","Teatro de guerra","Todavía","Transit","Venom"],zonaArray=["Abasto","Barrio Norte","Belgrano","Caballito","Centro","Flores","Palermo","Puerto Madero","Villa Devoto","Zona Norte","Zona Oeste","Zona Sur"];