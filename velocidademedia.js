// Função para calcular a velocidade média
function calcularVelocidadeMedia(distancia, tempo) {
  if (tempo === 0) {
    return 'Tempo não pode ser zero.'
  }
  const velocidadeMedia = distancia / tempo
  return velocidadeMedia
}

// Definindo a distância em metros e o tempo em segundos
const distanciaPercorrida = 500 // metros
const tempoGasto = 60 // segundos

// Calculando a velocidade média
const velocidadeMedia = calcularVelocidadeMedia(distanciaPercorrida, tempoGasto)

console.log(`A velocidade média é: ${velocidadeMedia.toFixed(2)} m/s`)
