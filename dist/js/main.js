(function ($) {

    $("#toggle-password").on('click', function(event) {
        event.preventDefault();
        if($('#pwd').attr("type") == "text"){
            $('#pwd').attr('type', 'password');
            $('#toggle-password .toggle-icon').removeClass( "fa-eye-slash" );
            $('#toggle-password .toggle-icon').addClass( "fa-eye" );            
        }else if($('#pwd').attr("type") == "password"){
            $('#pwd').attr('type', 'text');            
            $('#toggle-password .toggle-icon').addClass( "fa-eye-slash" );
            $('#toggle-password .toggle-icon').removeClass( "fa-eye" );
        }
    });

})(jQuery);

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};


function expandTextarea(id) {
    document.getElementById(id).addEventListener('keyup', function () {
        this.style.overflow = 'hidden';
        this.style.height = 0;
        this.style.height = this.scrollHeight + 'px';
    }, false);
}

function resetTextarea(id) {
    document.getElementById(id).style.overflow = 'hidden';
    document.getElementById(id).style.height = 0;
    document.getElementById(id).style.height = '36px';
}



var ordenArray = 
[
    'Últimos avisos',
    'Ordenados por Película A-Z',
    'Ordenados por Película Z-A',
    'Ordenados por Aviso más solicitado',
    'Ordenados por Perfil con mejor ranking'
];

var peliculasArray = 
[    
    '12 horas para sobrevivir: el inicio',
    '1945',
    'Acusada',
    'Aire',
    'Alfa',
    'All inclusive',
    'Animales en apuros',
    'Animales fantásticos 2',
    'Bohemian Rhapsody',
    'Bohemian Rhapsody SING ALONG',
    'Camino sinuoso',
    'Christopher Robin',
    'Cold War',
    'De despojos y costillas',
    'Dovlatov',
    'El Potro',
    'El amor menos pensado',
    'El cascanueces y los cuatro reinos',
    'El libro de imagen',
    'El origen de la tristeza',
    'El otro verano',
    'El repostero de Berlin',
    'El silencio es un cuerpo que cae',
    'El ángel',
    'Escalofríos 2',
    'Esto no es un golpe',
    'Fátima, el último misterio',
    'Gauguin: viaje a Tahiti',
    'Gonjiam: hospital maldito',
    'Gracias Gauchito',
    'Halloween',
    'Hell Fest: juegos diabólicos',
    'Impuros',
    'Infiltrado del kkklan',
    'Konstruktion Argentina',
    'La casa junto al mar',
    'La esposa',
    'La monja',
    'La noche de 12 años',
    'La número uno',
    'Las hijas del fuego',
    'Los increíbles 2',
    'Lucky',
    'Matar o morir',
    'Mi mejor amigo',
    'Mi obra maestra',
    'Misión imposible 6',
    'Nace una estrella',
    'Operación Overlord',
    'Pablo Escobar: La traición',
    'Pañuelos para la historia',
    'Piazzolla: los años del tiburón',
    'Pie pequeño',
    'Re loca',
    'Rojo',
    'Sangre Blanca',
    'Solo el amor',
    'Somos campeones',
    'Teatro de guerra',
    'Todavía',
    'Transit',
    'Venom'
];

var zonaArray =
[
    'Abasto',
    'Barrio Norte',
    'Belgrano',
    'Caballito',
    'Centro',
    'Flores',
    'Palermo',
    'Puerto Madero',
    'Villa Devoto',
    'Zona Norte',
    'Zona Oeste',
    'Zona Sur'
];