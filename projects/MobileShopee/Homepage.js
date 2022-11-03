showLogInPage=()=>{
document.querySelector(".logInPage").style.display="block";
}
cross_red =(type)=>{
    switch(type){
        case "logInPage":
        document.querySelector(".logInPage").style.display="none";
        break;
        case "SignUpPage":
            document.querySelector(".SignUpPage").style.display="none";
    }
}
showSignUpPage=()=>{
    document.querySelector(".SignUpPage").style.display="block";
    document.querySelector(".logInPage").style.visibility="none";
}