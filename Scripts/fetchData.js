$(document).ready(function(){
  var zipcode = "";
  const apikey = ',us&APPID=0da05e6276aacda7cb2bd245ce9e77cc';
  const apiurl = 'http://api.openweathermap.org/data/2.5/weather?zip=';


  $.ajax({
    type: 'GET',
    url: '/app.js',
    success: function(data){
      zipcode = data.userZip;
      alert(zipcode);
      alert("successfully fetched zipcode");
    },
  }).then(function(){
    $.ajax({
      type: 'GET',
      url: apiurl + zipcode + apikey,
      success: function(data){
        console.log(data);
        alert("successfully got data from openweather api");
      },
    });
  });




});
