// calculator script
function addChar(input, character)

{
	if(input.value == null || input.value == "0")
		input.value = character
	else
		input.value += character}

function cos(form) {
	form.display.value = Math.cos(form.display.value);
}

function sin(form) {
	form.display.value = Math.sin(form.display.value);
}

function tan(form) {
	form.display.value = Math.tan(form.display.value);
}

function sqrt(form) {
	form.display.value = Math.sqrt(form.display.value);
}

function ln(form) {
	form.display.value = Math.log(form.display.value);
}

function exp(form) {
	form.display.value = Math.exp(form.display.value);
}

function deleteChar(input) {
	input.value = input.value.substring(0, input.value.length - 1)
}
var val = 0.0;
function percent(input) {
  val = input.value;
  input.value = input.value + "%";
}

function changeSign(input) {
	if(input.value.substring(0, 1) == "-")
		input.value = input.value.substring(1, input.value.length)
	else
		input.value = "-" + input.value
}

function compute(form) {
    form.display.value = eval(form.display.value);
  }


function square(form) {
	form.display.value = eval(form.display.value) * eval(form.display.value)
}

function checkNum(str) {
	for (var i = 0; i < str.length; i++) {
		var ch = str.charAt(i);
		if (ch < "0" || ch > "9") {
			if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
				&& ch != "(" && ch!= ")" && ch != "%") {
				alert("invalid entry!")
				return false
				}
			}
		}
		return true
}
 
// currence conveter script
	function EuroConverter(){
	document.converter.dollar.value = document.converter.Euro.value * 1.470
	document.converter.pound.value = document.converter.Euro.value * 0.717
	document.converter.Mk.value = document.converter.Euro.value /0.605
	}
	function dollarConverter(){
	document.converter.Euro.value = document.converter.dollar.value * 0.680
	document.converter.pound.value = document.converter.dollar.value * 0.488
	document.converter.Mk.value = document.converter.dollar.value /0.89
	}
	function poundConverter(){
	document.converter.dollar.value = document.converter.pound.value * 2.049
	document.converter.Euro.value = document.converter.pound.value * 1.394
	document.converter.Mk.value = document.converter.pound.value /0.434
	}
	function MkConverter(){
	document.converter.dollar.value = document.converter.Mk.value * 0.89
	document.converter.pound.value = document.converter.Mk.value * 0.434
	document.converter.Euro.value = document.converter.Mk.value * 0.605
	}