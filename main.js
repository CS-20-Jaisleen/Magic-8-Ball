// JavaScript Code
// EVENTLISTENER
document.getElementById("magicBall-img").addEventListener("click", imgclicked);

function imgclicked() {
  // VARIABLES
  let outputEl = document.getElementById("output");
  let qn = document.getElementById("question").value.toLowerCase();

  // else {
  //   // Random Response
  //   let ansRand = Math.random();
  //   if (ansRand < 0.35) {
  //     outputEl.innerHTML = "How am I supposed to know?";
  //   } else if (ansRand < 0.45) {
  //     outputEl.innerHTML = "Girl just no";
  //   } else if (ansRand < 0.55) {
  //     outputEl.innerHTML = "You're not concentrating :|";
  //   } else if (ansRand < 0.65) {
  //     outputEl.innerHTML = "Go get a life";
  //   } else if (ansRand < 0.75) {
  //     outputEl.innerHTML = "Ooo";
  //   } else if (ansRand < 0.85) {
  //     outputEl.innerHTML = "Seek help";
  //   } else if (ansRand < 0.95) {
  //     outputEl.innerHTML = "Umm";
  //   } else {
  //     outputEl.innerHTML = "Have a great day";
  //   }
  // }
}

function getResponse(qn) {
  if (qn === "does the magic 8 ball work" || qn === "does this 8 ball work") {
    outputEl.innerHTML = "Does your brain work?";
  } else if (qn === "is js awesome" || qn === "is javascript awesome" ) {
    
  } else if (qn == "") {
    outputEl.innerHTML = "Please ask a question";
  } 
}