var escala = parseInt(
  prompt(
    "Escolha qual temperatura você precisa converter. Digite: \n 1 - celsius; \n 2 - kelvin; \n 3 - fahrenheit;"
  )
);

var temperatura = parseInt(prompt("Quantos graus?"));

if (escala == 1) {
  converterCelsius(temperatura);
} else if (escala == 2) {
  converterKelvin(temperatura);
} else if (escala == 3) {
  converterFahrenheit(temperatura);
}

function converterCelsius(celsius) {
  var kelvin = celsius + 273;
  var fahrenheit = (celsius * 1.8 + 32).toFixed(0);

  alert(celsius + "°C equivalem a " + kelvin + " K e a " + fahrenheit + "°F");
}

function converterKelvin(kelvin) {
  var fahrenheit = ((kelvin - 273.15) * 1.8 + 32.0).toFixed(0);
  var celsius = kelvin - 273;

  alert(kelvin + "K equivalem a " + fahrenheit + "°F e a " + celsius + "°C");
}

function converterFahrenheit(fahrenheit) {
  var celsius = ((fahrenheit - 32) / 1.8).toFixed(0);
  var kelvin = (((fahrenheit + 456.67) * 5) / 9).toFixed(0);

  alert(fahrenheit + "°F equivalem a " + kelvin + "K e a " + celsius + "°C");
}
