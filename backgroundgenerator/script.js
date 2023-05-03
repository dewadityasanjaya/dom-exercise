var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");

css.textContent = "linear-gradient(to right, rgb(0, 255, 0,), rgb(255, 0, 0));";

function setGradient() {
	body.style.background =
		"linear-gradient(to right, "
		+ color1.value
		+ ", "
		+ color2.value
		+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function getRandomHex() {
	return Math.floor(Math.random() * 16777215).toString(16);
}

button.addEventListener("click", function () {
	color1.value = "#" + getRandomHex();
	color2.value = "#" + getRandomHex();
	setGradient();
});