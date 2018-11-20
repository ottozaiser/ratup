var data;
var userData;


(function ($) {


    $.getJSON( "../data.json", function(json) {
        //console.log( "success" );
        data = json;
        userData.storeUserDataInSession(json);
      })
        .fail(function() {
          console.log( "error" );
        });


})(jQuery);



