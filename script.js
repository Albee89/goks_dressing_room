// Define rainbow array and getRandomInt function if not already defined
var rainbow = ["#FF0000", "#00FF00", "#0000FF"]; // Example colors, add more if needed
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Defining startTimer and stopTimer functions:
var startTime;
function startTimer() {
  startTime = performance.now();
}
function stopTimer() {
  return (performance.now() - startTime).toFixed(2);
}

// Rendering canvas #1
var canvas1  = new fabric.Canvas('c1', { backgroundColor: "#000" });

startTimer();
for (var i = 100; i >= 0; i--) {
  var dot = new fabric.Circle({
    left:   getRandomInt(0, 400),
    top:    getRandomInt(0, 350),
    radius: 3,
    fill:   rainbow[getRandomInt(0, rainbow.length - 1)],
    objectCaching: false
  });
  canvas1.add(dot);
}

// Rendering canvas #2
var canvas2  = new fabric.Canvas('c2', { backgroundColor: "#000", renderOnAddRemove: false });


startTimer();
for (var i = 1000; i >= 0; i--) {
  var dot = new fabric.Circle({
    left:   getRandomInt(0, 400),
    top:    getRandomInt(0, 350),
    radius: 3,
    fill:   rainbow[getRandomInt(0, rainbow.length - 1)],
    objectCaching: false
  });
  canvas2.add(dot);
}
canvas2.renderAll(); // Note, calling renderAll() is important in this case

//controls
const hatcheck = document.querySelector("#hat");
const glassescheck = document.querySelector("#eyeglasses");
const tiecheck = document.querySelector("#tie");
const detectiveHatCheck = document.querySelector("#detective-hat-control");
const judgeWigCheck = document.querySelector("#judge-wig-control");

//accessories
const hat = document.querySelector(".hat");
const glasses = document.querySelector(".glasses");
const tie = document.querySelector(".tie");
const detectiveHat = document.querySelector(".detective-hat");
const judgeWig = document.querySelector(".judge-wig");


//Reveal Hat
hatcheck.addEventListener("change", hatfun);

function hatfun() {
  if (hatcheck.checked == true) {
    hat.style.bottom = "165px";
  } else {
    hat.style.bottom = "400px";
  }
}

//Reveal Eyeglasses
glassescheck.addEventListener("change", glassesfun);

function glassesfun() {
  if (glassescheck.checked == true) {
    glasses.style.right = "50%";
  } else {
    glasses.style.right = "-50%";
  }
}

//Reveal Tie
tiecheck.addEventListener("change", tiefun);

function tiefun() {
  if (tiecheck.checked == true) {
    tie.style.bottom = "10px";
  } else {
    tie.style.bottom = "-80px";
  }
}



// Reveal Detective Hat
detectiveHatCheck.addEventListener("change", detectiveHatFun);

function detectiveHatFun() {
  if (detectiveHatCheck.checked) {
    detectiveHat.style.bottom = "165px";
  } else {
    detectiveHat.style.bottom = "350px";
  }
}

// Reveal Judge Wig
judgeWigCheck.addEventListener("change", judgeWigFun);

function judgeWigFun() {
  if (judgeWigCheck.checked) {
    judgeWig.style.bottom = "200px";
  } else {
    judgeWig.style.bottom = "380px";
  }
}


// Reveal Detective Hat
detectiveHatCheck.addEventListener("change", detectiveHatFun);

function detectiveHatFun() {
  if (detectiveHatCheck.checked) {
    detectiveHat.style.bottom = "165px";
  } else {
    detectiveHat.style.bottom = "350px";
  }
}

