const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const urlencodedparser = bodyParser.urlencoded({extended:false});

var userInfo =
{
  userZip:""
}

app.set('view engine', 'ejs');
app.use('/Assets', express.static('Assets'));
app.use('/Scripts', express.static('Scripts'));
app.use('/node_modules', express.static('node_modules'));

app.get('/', function(req,res){
  res.render('landingPage');
});
app.post('/', urlencodedparser, function(req,res)
{
  const data = req.body.zipcode;
  userInfo.userZip = data;
  res.json(userInfo);
});

app.get('/WeatherDisplay', function(req,res){

  res.render('weatherDisplay');

});
app.get('/app.js', function(req,res){

  res.json(userInfo);

});

app.listen(3000);
