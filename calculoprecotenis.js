// Definindo o preço inicial e a porcentagem de desconto
const precoInicial = 100 // preço em reais
const porcentagemDesconto = 20 // 20% de desconto

// Função para calcular o preço com desconto
function calcularPrecoComDesconto(precoInicial, porcentagemDesconto) {
  const desconto = (precoInicial * porcentagemDesconto) / 100
  const precoComDesconto = precoInicial - desconto
  return precoComDesconto
}

// Calculando o preço com desconto
const precoComDesconto = calcularPrecoComDesconto(
  precoInicial,
  porcentagemDesconto
)

console.log(`Preço com desconto: R$ ${precoComDesconto.toFixed(2)}`)
