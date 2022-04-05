
const signUpForm = document.querySelector(".signUp-form");
const upName = document.getElementById("signUp-userName");
const upEmail = document.getElementById("signUp-userEmail");
const upPwd = document.getElementById("signUp-userPassword");

function signUpEvent(evn){
    evn.preventDefault();

    const name = upName.value;
    const email = upEmail.value;
    const pwd = upPwd.value;

    localStorage.setItem("name", JSON.stringify(name));
    localStorage.setItem("id", JSON.stringify(email));
    localStorage.setItem("pwd", JSON.stringify(pwd));        
    
    alert(`${name}님 회원가입을 축하드립니다.`)
}

signUpForm.addEventListener("submit", signUpEvent);


