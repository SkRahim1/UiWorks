var tem = require("http");
var sever = tem.createServer((req , res)=>{
    console.log("sever is listning at 7081");
    res.end("Sever got started");
}).listen(7081);
