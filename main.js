var textBox = document.getElementById('textBox');
var toCelcius = document.getElementById('toCelcius');
var toFahrenheit = document.getElementById('toFahrenheit');
var result = document.getElementById('result');

var tempVal;
var temp;

function convert() {
	if (toCelcius.checked) {
		tempVal = Number(textBox.value);
		temp = ((tempVal - 32) * (5 / 9));
		result.innerHTML = temp.toFixed(1) + '°C';
	}

	else if (toFahrenheit.checked) {
		tempVal = Number(textBox.value);
		temp = ((tempVal * (9 / 5)) + 32);
		result.innerHTML = temp.toFixed(1) + '°F';
	}

	else {
		result.innerHTML = 'Select an option!';
	}
}

/*

function convert() {
	if (toCelcius.checked) {
		tempVal = Number(textBox.value);
		temp = ((tempVal - 32) * (5 / 9));
		result.innerHTML = temp.toFixed(1) + '°C';
	}

	else if (toFahrenheit.checked) {
		tempVal = Number(textBox.value);
		temp = ((tempVal * (9 / 5)) + 32);
		result.innerHTML = temp.toFixed(1) + '°F';
	}

	else {
		result.innerHTML = 'Select an option!';
	}
}

*/