$(document).ready(function(){

  $('form').on('submit', function(){
    const zipcode = $('input').val();
    const userData = {zipcode:zipcode};

    $.ajax({
      type: 'POST',
      url: '/',
      data: userData,
      success: function(data){
        console.log(data);
        alert("connection successful");
        window.location.replace("weatherDisplay");
      },
    });

  });

});
