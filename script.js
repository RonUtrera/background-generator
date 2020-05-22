var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

//This is to display initial color gradient 

setGradient();

///////////////////////// From Stack Overflow - I added variant 2 //////////////////////
//  Tried to figure out loop to apply "dry concept" to code below but have not yet. ///////////

function random() {
  const red = Math.floor(Math.random() * 255).toString(16).padStart(2, '0');
  const green = Math.floor(Math.random() * 255).toString(16).padStart(2, '0');
  const blue = Math.floor(Math.random() * 255).toString(16).padStart(2, '0');
  color1.value = `#${red}${green}${blue}`;
  const red2 = Math.floor(Math.random() * 255).toString(16).padStart(2, '0');
  const green2 = Math.floor(Math.random() * 255).toString(16).padStart(2, '0');
  const blue2 = Math.floor(Math.random() * 255).toString(16).padStart(2, '0');
  color2.value = `#${red2}${green2}${blue2}`;
}

///////////////////////////////////////////////

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", () => { random(); setGradient(); });


