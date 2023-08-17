/*calculadora de IMC */
// Pega os elementos HTML
const pesoInput = document.getElementById('peso')
const alturaInput = document.getElementById('altura')
const calcularButton = document.getElementById('calcular')
const resultadoElement = document.getElementById('resultado')

// Função para calcular o IMC
function calcularIMC() {
  // Pega os valores dos campos de entrada
  const peso = parseFloat(pesoInput.value)
  const altura = parseFloat(alturaInput.value)

  // Realiza o cálculo do IMC
  const imc = peso / (altura * altura)

  // Exibe o resultado
  resultadoElement.textContent = `Seu IMC é: ${imc.toFixed(2)}`
}

// Adiciona um ouvinte de evento para o botão de cálculo
calcularButton.addEventListener('click', calcularIMC)
