var data;
var userData;
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

    userData = {
        storeUserDataInSession: function(userData) {
            var userObjectString = JSON.stringify(data);
            window.sessionStorage.setItem('userObject',userObjectString)
        },
        getUserDataFromSession: function() {
            var data = window.sessionStorage.getItem('userObject')
            return JSON.parse(data);
        }
    }

    

})(jQuery);


function timeline(data){
    for (let i = 0; i < data.length; i++) {
        var $div = $('#original');
        var $klon = $div.clone(true).prop('id', 'klon'+i );
        $('.timeline').append( $klon);
        $('#klon'+i+' .perfil img').attr('src', data[i].picture);
        $('#klon'+i+' .firstName').text(data[i].name);
        $('#klon'+i+' .stars').text(data[i].ranking);
        $('#klon'+i+' .aviso-timeline .movie').text(data[i].aviso[0].pelicula);
        $('#klon'+i+' .hora').text(data[i].aviso[0].horario);
        $('#klon'+i+' .dia').text(data[i].aviso[0].dia);
        $('#klon'+i+' .lugar').text(data[i].aviso[0].lugar);
        $('#klon'+i).show();
        
    }
    // var $div = $('div[id^="klon"]:last');
    // var $klon = $div.clone().prop('id', 'klon'+num );
    // $div.after( $klon.text('klon'+num) );
}



