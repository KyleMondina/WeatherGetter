$(document).ready(function(){

  $('form').on('submit', function(){
    const zipcode = $('input').val();
    const data = {zipcode:zipcode};

    $.ajax({
      type: 'POST',
      url: '/',
      data: data,
      success: function(data){
        alert("connection successful");
      },
    });
    
  });

});
