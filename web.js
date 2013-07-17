var http = require('http');
var fs = require('fs');
var port =  process.env.PORT || 5000;

var server =  http.createServer(function(request, response){

fs.readFile('index.html', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }

  console.log(data);
});

responce.end();

});

server.listen(port);
//var goodWords = "Yet today I consider myself the luckiest man on the face of this earth.";

//fs.writeFileSync('lou.txt', someText);

//fs.readFile('index.html', 'utf8', function (err,data) {
  //if (err) {
    //return console.log(err);
  //}

  //console.log(data);
//});
//var http://
//var express=require('express');


//var app = express.createServer(express.logger());

//app.use(router);
//app.use(express.static(index.html + "/"));//
//app.get('/', function(request, response) {
  //response.send('Hello World 2!');
//});

//var port = process.env.PORT || 5000;
//app.listen(port, function() {
//  console.log("Listening on " + port);
//});

