var elFormCelcius = document.querySelector(".form-celcius");
var elFormFarengit = document.querySelector(".form-farengit");

var elCelciusInput = document.querySelector(".celcius-input-js");
var elFarengitInput = document.querySelector(".farengit-input-js");

var elCelciusDisplay = document.querySelector(".celcius-display-js");
var elFarengitDisplay = document.querySelector(".farengit-display-js");

elFormCelcius.addEventListener("submit", function(evt) {
  evt.preventDefault();

  if (isNaN(parseFloat(elCelciusInput.value))) {
    return console.log("raqam kirit");
  } 
  var celcius = elCelciusInput.value;
  var farengit = (celcius * 9/5) + 32;
  elCelciusDisplay.textContent = celcius + " C";
  elFarengitDisplay.textContent = farengit.toFixed(1) + " F";
  
})

var farengitFunc = function(qvt){
  qvt.preventDefault();
  if (isNaN(parseFloat(elFarengitInput.value))) {
    return console.log("raqam kirit");
  } 
  var farengit = elFarengitInput.value;
  var celcius = (farengit - 32)  * 5/9;
  elCelciusDisplay.textContent = celcius.toFixed(1) + " C";
  elFarengitDisplay.textContent = farengit + " F";
  elFarengitInput.value = "";
}
elFormFarengit.addEventListener("submit", farengitFunc);