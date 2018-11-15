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


