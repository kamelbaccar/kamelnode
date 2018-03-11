var express = require("express");
var app     = express();
var path    = require("path");


app.get('/Myapp',function(req,res){
  res.sendFile(path.join(__dirname+'/Myapp/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/page.html'));
});

app.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname+'/page.html'));
});


app.listen(3000);

console.log("Running at Port 3000");
