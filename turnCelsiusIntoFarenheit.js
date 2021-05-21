
function turnCelsiusIntoFarenheit(celsius) {
  let farenheit = Number(celsius) * 9 / 5 + 32
  let conversion = farenheit
  console.log('Celsius to farenheit : ' + conversion.toFixed(1))
  return conversion
}

function turnFarenheitIntoCelsius(farenheit) {
  let celsius = (farenheit - 32) * 5 / 9
  let conversion = celsius
  console.log('Farenheit to celsius: ' + conversion.toFixed(4))
  return conversion
}

turnCelsiusIntoFarenheit('64')
turnFarenheitIntoCelsius('64')
