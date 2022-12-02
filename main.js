// JavaScript Code
// EVENTLISTENER
document.getElementById("magicBall-img") .addEventListener("click" , imgclicked);

// VARIABLES
let outputEl = document.getElementById("output");

function imgclicked () {
     let ansRand = Math.random;
     if (ansRand >= 0.1 && ansRand <= 0.99) {
        if (ansRand <= 0.18) {
            outputEl.innerHTML = "Without a doubt";
        } else if (ansRand <= 0.36) {
            outputEl.innerHTML = "As I see it yes";
        } else if (ansRand <= 0.54) {
            outputEl.innerHTML = "Concentrate and ask again";
        } else if (ansRand <= 0.72) {
            outputEl.innerHTML = "Don't count on it"
        } else if (ansRand <= 0.9) {
            outputEl.innerHTML
        } else {
            outputEl.innerHtML = "Yes";
        }
     }    else {
        outputEl.innerHTML = "Please ask again";
     }
}
