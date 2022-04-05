/*---------- menu drop Down ------- */

function showFunction(){
    document.getElementById("menu-dropDown").classList.toggle("show");
}

/* ------------ login, sign Up / none -------------- */

const login = document.getElementById("header-login");
const signUp = document.getElementById("header-signUp");

if(localStorage.getItem("id") !== null){
    login.classList.add("none");
    signUp.classList.add("none");
}else{
    login.classList.remove("none");
    signUp.classList.remove("none");
}
