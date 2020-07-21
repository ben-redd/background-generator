let css = document.querySelector('h3');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let body = document.querySelector('#gradient');
let randomButton = document.querySelector('.randomButton');
let gradient;

newGradient();

function newGradient() {
	gradient = `linear-gradient(to right, ${color1.value}, ${color2.value}`;
	body.style.background = gradient;

	css.textContent = body.style.background + ';';
}

function randomRGB() {
	return Math.floor(Math.random() * 256);
}

const rgbToHex = (r, g, b) =>
	'#' +
	[ r, g, b ]
		.map((x) => {
			const hex = x.toString(16);
			return hex.length === 1 ? '0' + hex : hex;
		})
		.join('');

function randomColors() {
	let random1 = rgbToHex(randomRGB(), randomRGB(), randomRGB());
	let random2 = rgbToHex(randomRGB(), randomRGB(), randomRGB());
	color1.value = random1;
	color2.value = random2;
	newGradient();
}

color1.addEventListener('input', newGradient);
color2.addEventListener('input', newGradient);
randomButton.addEventListener('click', randomColors);
