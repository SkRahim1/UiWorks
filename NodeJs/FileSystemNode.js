var http = require("http");
var fs = require("fs");
http.createServer((req, res) => {
  fs.readFile("temp.html", function (err, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    if(data){
      res.write(data);}
    else{

      res.write(err);
    }
    return res.end();
  })
  console.log("listening at 7070");
  res.end("Hello it's Rahim");
}).listen(7070);