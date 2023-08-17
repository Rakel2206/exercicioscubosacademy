// Função para calcular juros simples
function calcularJurosSimples(principal, taxa, tempo) {
  const juros = (principal * taxa * tempo) / 100
  return juros
}

const valorPrincipal = 1000 // em reais
const taxaDeJuros = 5 // taxa de juros em porcentagem
const tempoEmAnos = 2 // tempo em anos

const jurosSimples = calcularJurosSimples(
  valorPrincipal,
  taxaDeJuros,
  tempoEmAnos
)

console.log(`Juros simples: R$ ${jurosSimples.toFixed(2)}`)
