// JavaScript Code
// EVENTLISTENER
document.getElementById("magicBall-img") .addEventListener("click" , imgclicked);

// VARIABLES
let outputEl = document.getElementById("output");


function imgclicked () {
let qn = document.getElementById("question").value.toLowerCase();
let ansRand = Math.random();
      if (qn === "---") {
      outputEl.innerHTML = ansRand;
            } if (ansRand < 0.35) {
                  outputEl.innerHTML = "How am I supposed to know?";
            } else if (ansRand < 0.45) {
                  outputEl.innerHTML = "Girl just no";
            } else if (ansRand < 0.55) {
                  outputEl.innerHTML = "You're not concentrating :|";
            } else if (ansRand < 0.65) {
                  outputEl.innerHTML = "Go get a life";
            } else if (ansRand < 0.75) {
                  outputEl.innerHTML = "Ooo";
            } else if (ansRand < 0.85) {
                  outputEl.innerHTML = "Seek help";
            } else if (ansRand < 0.95) {
                  outputEl.innerHTML = "Umm";
            }else if (ansRand < 0.99) {
                  outputEl.innerHTML = "Have a great day";
      }else {
            if (qn === "does the magic 8 ball work" || qn === "does this 8 ball work") {
                  outputEl.innerHTML = "Does your brain work?";
            } else if (qn === "do I look pretty" || qn === "am i pretty") {
                  outputEl.innerHTMl = "Not more than me";  
            }
            } 
}

// function imgclicked () {
//       let ansRand = Math.random;
//       if (qn === "---") {
//           outputEl.innerHTML = ansRand;
//             } if (ansRand < 0.20) {
//                   outputEl.innerHTML = "Without a doubt";
//             } else if (ansRand < 0.40) {
//                   outputEl.innerHTML = "As I see it, yes";
//             } else if (ansRand < 0.60) {
//                   outputEl.innerHTML = "Concentrate and ask again";
//            } else if (ansRand < 0.80) {
//                   outputEl.innerHTML = "Don't count on it";
//            } else {
//                   outputEl.innerHTML = "Outlook not so good";
//          }
//   }