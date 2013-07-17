var express = require('express');
//var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/index.html', function(request, response) {

app.use(express.static('/index.html' + '/bitstarter'));
//var content = fs.readFileSync('./index.html','utf8');
  //response.render(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);

});



