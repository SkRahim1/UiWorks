var String="";
var values =document.querySelectorAll(".Button");
// values.addEventListner("click",(e)=>{
//    // document.querySelector("input").value=String;
//    console.log(e);
// })
values.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML=="="){
            String = eval(String);
            document.querySelector("input").value=String;
        }else if(e.target.innerHTML=="c"){
            String="";
            document.querySelector("input").value="";
        }
        else{
        String+=e.target.innerHTML;
        document.querySelector("input").value=String;
        console.log(e.target.innerHTML);
    }
    })
})
console.log(values);