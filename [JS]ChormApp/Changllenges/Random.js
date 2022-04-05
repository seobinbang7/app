const Between = document.querySelector(".Between");
const Guess = document.querySelector(".Guess");
const playButton = document.querySelector("#RandomInput-form button");
const ChooseValue = document.querySelector("#ChooseValue p");
const lolResult = document.querySelector("#lol-Result h3");

function RandomNumber(){
    const btnValue = Between.value;
    console.log(btnValue);
    console.log(Guess.value);    
    const RandomValue = [Math.floor(Math.random() * btnValue)+1];
    ChooseValue.innerText = "You chose:" + Guess.value + ", the machine chose:" + RandomValue + ".";

    if(Guess.value == RandomValue){
        lolResult.innerText = "you won!";
    }else{
        lolResult.innerText = "you lost!";
    }
}

    playButton.addEventListener("click", RandomNumber);




/*
function RandomNumber(event) {
    event.prevenDefault();
    const guessValue = localStorage.setItem("guessValue", guessValue);
    const randomValue = math.floor(math.random() * btnValue);
    youchose.innerText = "You chose:" + guessValue + ", the machine chose:" + randomValue;
}
    
mainClass.addEventListener("submit", RandomNumber);
*/
    
//    if(guessValue === randomValue{
        /* you won innerText */        
  //  }else{
        /*you lost inner Text*/
  //  }
