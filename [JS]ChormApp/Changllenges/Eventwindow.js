
const Text = document.querySelector("h1")
const bodyTag = document.querySelector("body");

Text.style.color = "white";


function resizeEvent(){
    const windowWidth = window.innerWidth;

    if(windowWidth < 500){
        bodyTag.style.backgroundColor="skyblue";
    }else if(windowWidth > 1001){
        bodyTag.style.backgroundColor="yellow";
    }
    else if(windowWidth > 600 || windowWidth < 1000){
        bodyTag.style.backgroundColor="purple";
    }
}

    window.addEventListener("resize", resizeEvent);
