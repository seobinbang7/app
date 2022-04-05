const TimeText = document.querySelector("h2");


function ChristmasTime(){
    const dDay = new Date("December 25, 2021 00:00:00");
    const toDay = new Date();

    const TimeTime = dDay.getTime() - toDay.getTime();
   
    const Day = Math.floor(TimeTime / (1000 * 60 * 60 *24));
    const House =  Math.floor((TimeTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const Minutes = Math.floor((TimeTime % (1000 * 60 * 60)) / (1000 * 60));
    const Seconds = Math.floor((TimeTime % (1000 * 60))/1000);

    TimeText.innerText = `${Day}d ${House}h ${Minutes}m ${Seconds}s`;
}

ChristmasTime();
setInterval(ChristmasTime, 1000);

/*
const TimeText = document.querySelector("h2");

function ChristmasTime(){
    const dDay = new Date("October 01, 2021 00:00:00");
    const toDay = new Date();

    const TimeTime = dDay.getTime() - toDay.getTime();
    
    const Day = Math.floor(TimeTime / (1000 * 60 * 60 *24));

    TimeText.innerText = `${Day}d`;
}

ChristmasTime();
*/