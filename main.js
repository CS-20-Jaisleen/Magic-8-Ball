// JavaScript Code
// EVENTLISTENER
document.getElementById("magicBall-img") .addEventListener("click" , imgclicked);

// VARIABLES
let outputEl = document.getElementById("output");
let qn = document.getElementById("question").value.toLowerCase();

function imgclicked () {
    let ansRand = Math.random;
    if (qn === "---") {
        outputEl.innerHTML = ansRand;
          } if (ansRand < 0.20) {
                outputEl.innerHTML = "Without a doubt";
          } else if (ansRand < 0.40) {
                outputEl.innerHTML = "As I see it, yes";
          } else if (ansRand < 0.60) {
                outputEl.innerHTML = "Concentrate and ask again";
         } else if (ansRand < 0.80) {
                outputEl.innerHTML = "Don't count on it";
         } else {
                outputEl.innerHTML = "Outlook not so good";
     } else {
        outputEl.innerHTML = "Please ask again"
     }
 
}





