// JavaScript Code
// EVENTLISTENER
document.getElementById("magicBall-img").addEventListener("click", imgclicked);

function imgclicked() {
  // VARIABLES
  let qn = document.getElementById("question").value.toLowerCase();

  // OUTPUT
  document.getElementById("output").innerHTML = getResponse(qn);

}

function getResponse(qn1) {
  if (qn1 === "does the magic 8 ball work" || qn1 === "does this 8 ball work") {
    return "Does your brain work?";
  } else if (qn1 === "is js awesome" || qn1 === "is javascript awesome" ) {
    return "Of course it is!";
  } else if (qn1 == "") {
    return "Please ask a question";
  } else {
    return randomResponse();
  }
}

function randomResponse() {
  let ansRand = Math.random();

  if (ansRand < 0.35) {
    return "How am I supposed to know?";
  } else if (ansRand < 0.45) {
    return "Girl just no";
  } else if (ansRand < 0.55) {
    return "You're not concentrating :|";
  } else if (ansRand < 0.65) {
    return "Without a doubt";
  } else if (ansRand < 0.75) {
    return "did you know blue is the best color?";
  } else if (ansRand < 0.85) {
    return "Don't do it";
  } else if (ansRand < 0.95) {
    return "Bonjour, je m'appelle Luoisa, ta boule magique 8";
  } else {
    return "Have a great day";
  }
}