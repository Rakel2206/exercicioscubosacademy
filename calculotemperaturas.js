// Função para converter de Fahrenheit para Celsius
function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9
}

// Função para converter de Celsius para Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32
}

// Exemplo de uso
const temperaturaFahrenheit = 75
const temperaturaCelsius = 25

const equivalenteCelsius = fahrenheitToCelsius(temperaturaFahrenheit)
const equivalenteFahrenheit = celsiusToFahrenheit(temperaturaCelsius)

console.log(
  `${temperaturaFahrenheit}°F é equivalente a ${equivalenteCelsius.toFixed(
    2
  )}°C`
)
console.log(
  `${temperaturaCelsius}°C é equivalente a ${equivalenteFahrenheit.toFixed(
    2
  )}°F`
)
