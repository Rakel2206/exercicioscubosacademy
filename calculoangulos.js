// Função para calcular a soma dos ângulos internos de um polígono
function calcularSomaAngulosInternos(numLados) {
  if (numLados < 3) {
    return 'O polígono deve ter pelo menos 3 lados.'
  }
  const somaAngulos = (numLados - 2) * 180
  return somaAngulos
}

const numeroLados = 5

const somaAngulosInternos = calcularSomaAngulosInternos(numeroLados)

console.log(`Soma dos ângulos internos: ${somaAngulosInternos} graus`)
