var http = require("http");
var fs = require("fs");
http.createServer((req, res) => {
  //  res.end("Hello it's Rahim ");
    fs.readFile("Temprary.txt", (err, data) => {
        var msg = "";
        if (err) {
            msg = err;
        } else {
            msg = data;
        }
        res.end(msg);
    });
    fs.appendFile("Hello.docs","Add some some content here means I will understand",()=>{

    })
}).listen(2000, () => {
    console.log("listling at 2000");
});