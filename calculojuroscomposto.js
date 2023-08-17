// Definindo os valores
const principal = 1000 // Valor inicial em reais
const taxaJurosAnual = 5 // Taxa de juros anual em porcentagem
const periodoAnos = 5 // Período em anos

// Função para calcular juros compostos
function calcularJurosCompostos(principal, taxaJurosAnual, periodoAnos) {
  const taxaJuros = taxaJurosAnual / 100
  const montante = principal * Math.pow(1 + taxaJuros, periodoAnos)
  return montante
}

// Calculando o montante após juros compostos
const montanteFinal = calcularJurosCompostos(
  principal,
  taxaJurosAnual,
  periodoAnos
)

console.log(`Montante após ${periodoAnos} anos: R$ ${montanteFinal.toFixed(2)}`)
