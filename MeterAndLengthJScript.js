
  // Script for Feet
function LengthConverter(valNum) {
  document.getElementById("outputYards1").innerHTML=valNum*0.33333;
}
function LengthConverter1(valNum) {
  document.getElementById("outputcm1").innerHTML=valNum/0.032808;
}
function LengthConverter2(valNum) {
  document.getElementById("outputKilometers1").innerHTML=valNum/3280.8;
}
function LengthConverter3(valNum) {
  document.getElementById("outputMiles1").innerHTML=valNum*0.00018939;
}
function LengthConverter4(valNum) {
  document.getElementById("outputInches1").innerHTML=valNum*12;
}
function LengthConverter5(valNum) {
  document.getElementById("outputMeters1").innerHTML=valNum/3.2808;
}

// Script for Meters
function LengthConverter60(valNum) {
  document.getElementById("outputMiles").innerHTML=valNum*0.00062137;
}

function LengthConverter50(valNum) {
  document.getElementById("outputKilometers").innerHTML=valNum/1000;
}

function LengthConverter40(valNum) {
  document.getElementById("outputYards").innerHTML=valNum*1.0936;
}


function LengthConverter30(valNum) {
  document.getElementById("outputcm").innerHTML=valNum/0.01;
}

function LengthConverter20(valNum) {
  document.getElementById("outputInches").innerHTML=valNum*39.370;
}

function LengthConverter10(valNum) {
  document.getElementById("outputFeet").innerHTML=valNum*3.2808;

}