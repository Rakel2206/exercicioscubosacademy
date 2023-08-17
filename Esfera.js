// Função para calcular o volume de uma esfera
function calcularVolumeEsfera(raio) {
  const pi = Math.PI
  const volume = (4 / 3) * pi * Math.pow(raio, 3)
  return volume
}

const raioDaEsfera = 5

const volumeDaEsfera = calcularVolumeEsfera(raioDaEsfera)

console.log(`Volume da esfera: ${volumeDaEsfera.toFixed(2)}`)
