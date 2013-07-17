var fs = require('fs');


fs.readFile('/index.html', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
   else{
   console.log(data);
   }


});







