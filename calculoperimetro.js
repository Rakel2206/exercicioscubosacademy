// Função para calcular a circunferência (perímetro) de um círculo
function calcularCircunferencia(raio) {
  const circunferencia = 2 * Math.PI * raio
  return circunferencia
}

// Função para calcular a área de um círculo
function calcularArea(raio) {
  const area = Math.PI * Math.pow(raio, 2)
  return area
}

// Exemplo de uso
const raioDoCirculo = 5

const circunferenciaDoCirculo = calcularCircunferencia(raioDoCirculo)
const areaDoCirculo = calcularArea(raioDoCirculo)

console.log(`Circunferência: ${circunferenciaDoCirculo.toFixed(2)}`)
console.log(`Área: ${areaDoCirculo.toFixed(2)}`)
