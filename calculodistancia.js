// Função para calcular a distância entre dois pontos
function calcularDistancia(x1, y1, x2, y2) {
  const distanciaX = x2 - x1
  const distanciaY = y2 - y1
  const distancia = Math.sqrt(distanciaX ** 2 + distanciaY ** 2)
  return distancia
}

// Coordenadas dos pontos
const x1 = 1
const y1 = 2
const x2 = 4
const y2 = 6

// Calculando a distância entre os pontos
const distancia = calcularDistancia(x1, y1, x2, y2)

console.log(`A distância entre os pontos é: ${distancia.toFixed(2)}`)
