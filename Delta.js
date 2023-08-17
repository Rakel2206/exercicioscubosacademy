// Função para calcular o delta
function calcularDelta(a, b, c) {
  const delta = b ** 2 - 4 * a * c
  return delta
}

const coeficienteA = 1
const coeficienteB = -3
const coeficienteC = 2

const delta = calcularDelta(coeficienteA, coeficienteB, coeficienteC)

console.log(`Delta: ${delta}`)
