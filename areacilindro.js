// Função para calcular a área total de um cilindro circular
function calcularAreaTotalCilindro(raio, altura) {
  const areaBase = Math.PI * Math.pow(raio, 2)
  const areaLateral = 2 * Math.PI * raio * altura
  const areaTotal = 2 * areaBase + areaLateral
  return areaTotal
}

const raioDoCilindro = 3 // em unidades de comprimento
const alturaDoCilindro = 6 // em unidades de comprimento

const areaTotalCilindro = calcularAreaTotalCilindro(
  raioDoCilindro,
  alturaDoCilindro
)

console.log(`Área total do cilindro: ${areaTotalCilindro.toFixed(2)}`)
