
/* --------------- 로그인 Event -------------*/

const inputForm = document.querySelector(".login-form");
const inputEmail = document.getElementById("userEmail");
const inputPassword = document.getElementById("userPassword");

function loginEvent (evn){
    evn.preventDefault();

    const name = JSON.parse(localStorage.getItem("name"));
    const userEmail = JSON.parse(localStorage.getItem("id"));
    const userPwd = JSON.parse(localStorage.getItem("pwd"));
    
    loginShow(name, userEmail, userPwd)
}

    function loginShow(name, userEmail, userPwd){
    const email = inputEmail.value;
    const password = inputPassword.value;
        
    if(email === userEmail && password === userPwd) {
        alert(`안녕하세요. ${name}님`);
    }else{
        alert(`이메일 또는 비밀번호를 잘못입력하셨습니다.`);
    }
}

inputForm.addEventListener("submit", loginEvent);

