
// const h1 = document.querySelector("div.Hello:first-child h1");

/*
function handleh1Click() {
    h1.classList.toggle("active");
}

h1.addEventListener("click", handleh1Click);
*/

const loginForm = document.querySelector("#login-Form");
const loginInput = document.querySelector("#login-Form input");

const link= document.querySelector("a");
const greeting = document.querySelector("#greeting");
/*
function handlebtn(event) {
    event.preventDefault();
    console.log(loginInput.value);
}
*/

const hiddenclass = "hidden";
const username_Key = "username";

function handleLinkClick(event){
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(username_Key, username);
    loginForm.classList.add(hiddenclass);    
    greetClass(username);
}

function greetClass(username){
    greeting.classList.remove(hiddenclass);
    greeting.innerText = `Hello ${username}`;  
}
    
    const saveUsername = localStorage.getItem(username_Key);

    if(saveUsername === null){
        loginForm.classList.remove(hiddenclass);
        loginForm.addEventListener("submit", handleLinkClick);
    }else{
        greetClass(saveUsername);
    }

//link.addEventListener("click", handleLinkClick)
