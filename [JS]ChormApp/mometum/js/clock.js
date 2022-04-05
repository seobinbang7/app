const clockText = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes=String(date.getMinutes()).padStart(2, "0");
    const seconds=String(date.getSeconds()).padStart(2, "0");
    const clockdate = `${hours}:${minutes}:${seconds}`;   
    clockText.innerText = clockdate;
}


getClock();
setInterval(getClock, 1000);
