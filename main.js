// JavaScript Code
// EVENTLISTENER
document.getElementById("magicBall-img") .addEventListener("click" , imgclicked);

// VARIABLES
let outputEl = document.getElementById("output");
let qn = document.getElementById("question").value.toLowerCase();

function imgclicked () {
let ansRand = Math.random;

if (ansRand < 0.1) {
      outputEl.innerHTML = "I don't even know";
} else if (ansRand < 0.2) {
      outputEl.innerHTML = "Mhm";
} else if (ansRand < 0.3) {
      outputEl.innerHTML = "Girl just no";
} else if (ansRand < 0.4) {
      outputEl.innerHTML = "You're not concentrating :|";
} else if (ansRand < 0.5) {
      outputEl.innerHTML = "Find something else";
} else if (ansRand < 0.6) {
      outputEl.innerHTML = "Ooo";
} else if (ansRand < 0.7) {
      outputEl.innerHTML = "How am I supposed to know?";
} else if (ansRand < 0.8) {
      outputEl.innerHTML = "How am I supposed to know?";
}else {
      if (qn === "does the Magic 8 ball work" || qn === "does this 8 ball work") {
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