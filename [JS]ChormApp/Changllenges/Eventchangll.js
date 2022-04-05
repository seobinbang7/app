const HendlerText = document.querySelector("div.TextDiv:first-child h1");

const Textcolor = ["aqua", "darkcyan", "purple", "tomato"];


function superEventHandler(){
    HendlerText.style.color = Textcolor[0];   
    HendlerText.innerText = "The mouse is here!"
}

HendlerText.addEventListener("mouseenter", superEventHandler);

function superEventHandlerLeave(){
    HendlerText.style.color= Textcolor[1];   
    HendlerText.innerText = "The mouse is gone!"
}

HendlerText.addEventListener("mouseleave", superEventHandlerLeave);

function superEventHandlerResize(){
    HendlerText.style.color= Textcolor[2];
    HendlerText.innerText="You just resize!"
}

window.addEventListener("resize", superEventHandlerResize);

function superEventHandlerRight(){
    HendlerText.style.color= Textcolor[3];
    HendlerText.innerText="That was a right click!"
}

window.addEventListener("contextmenu", superEventHandlerRight);
