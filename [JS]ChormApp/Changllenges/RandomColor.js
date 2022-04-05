const button = document.querySelector("button");
const body = document.querySelector("body");
const html = document.querySelector("html");

const Color = ["#CEB5D8", "#F3A9C5", "#ADC3E8", "#ADC3E8","#9c88ff","#8c7ae6","#fbc531","#487eb0"];

html.style.display ="flex";
html.style.alignItems = "center";
html.style.justifyContent = "center";
html.style.height = "100vh";

button.style.justifyContent="center";
button.style.alignItems="center";
button.style.backgroundColor = "white";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.cursor = "pointer";

function random2(){
    return Color[Math.floor(Math.random() * Color.length)];
}

function RandomColor(){        
    const ColorColor = `linear-gradient(0.25turn, ${random2()}, ${random2()})`;
    body.style.background = ColorColor;
}

button.addEventListener("click", RandomColor);
