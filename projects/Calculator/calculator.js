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
        }else if(e.target.innerHTML=="X"){
            String=String.substring(0,String.length-1);
            document.querySelector("input").value=String;
        }
        else{
        String+=e.target.innerHTML;
        document.querySelector("input").value=String;
        console.log(e.target.innerHTML);
    }
    })
})
console.log(values);