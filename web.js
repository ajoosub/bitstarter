var http = require('http');
var fs = require('fs');
var port =  process.env.PORT || 5000;

var server =  http.createServer(function(request, response){

fs.readFile('index.html', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
   else{
   console.log(data);
   }
response.end();


});

server.listen(port);

});





