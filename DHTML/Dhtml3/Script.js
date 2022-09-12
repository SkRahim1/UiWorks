var x =document.createElement("div");
document.querySelector("body").append(x);
x.setAttribute("class","mainDiv");
document.querySelector(".mainDiv").style.border="1px solid";
document.querySelector(".mainDiv").style.height="25px";
x.innerHTML="Dynamic Document";
x.style.textAlign="center";
var y = document.createElement("div");
document.querySelector("body").append(y);
y.style.border="1px solid";
y.style.height="350px";
y.style.marginTop="2px";
y.setAttribute("class","2ndMainDiv");
var div1 = document.createElement("div");
document.querySelector(".2ndMainDiv").append(div1);
div1.setAttribute("class",div1);
document.querySelector(".div1").style.border="1px solid";


