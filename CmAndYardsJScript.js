 // JavaScript For Yards
function LengthConverter(valNum) {
  document.getElementById("outputfeet1").innerHTML=valNum*3;
}
function LengthConverter1(valNum) {
  document.getElementById("outputcm1").innerHTML=valNum/0.010936;
}
function LengthConverter2(valNum) {
  document.getElementById("outputKilocm1").innerHTML=valNum/1093.6;
}
function LengthConverter3(valNum) {
  document.getElementById("outputMiles1").innerHTML=valNum/0.0005681;
}
function LengthConverter4(valNum) {
  document.getElementById("outputInches1").innerHTML=valNum*36;
}
function LengthConverter5(valNum) {
  document.getElementById("outputm1").innerHTML=valNum/1.0936;
}

// Javascript for Cm to other Measure
function LengthConverter60(valNum) {
  document.getElementById("outputMiles").innerHTML=valNum*0.0000062137;
}

function LengthConverter50(valNum) {
  document.getElementById("outputKilocm").innerHTML=valNum/100000;
}

function LengthConverter40(valNum) {
  document.getElementById("outputYards").innerHTML=valNum*0.010936;
}


function LengthConverter30(valNum) {
  document.getElementById("outputm").innerHTML=valNum/100;
}

function LengthConverter20(valNum) {
  document.getElementById("outputInches").innerHTML=valNum*0.39370;
}

function LengthConverter10(valNum) {
  document.getElementById("outputfeet").innerHTML=valNum*0.032808;
}