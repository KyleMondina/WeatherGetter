const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use('/Assets', express.static('Assets'));

app.get('/', function(req,res){
  res.render('landingPage');
});

app.listen(3000);
