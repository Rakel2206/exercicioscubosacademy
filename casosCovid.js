// Variáveis para armazenar os casos
let casosConfirmados = 0
let casosRecuperados = 0
let casosMortos = 0

// Função para adicionar novos casos confirmados
function adicionarCasosConfirmados(quantidade) {
  casosConfirmados += quantidade
}

// Função para adicionar novos casos recuperados
function adicionarCasosRecuperados(quantidade) {
  casosRecuperados += quantidade
}

// Função para adicionar novos casos mortos
function adicionarCasosMortos(quantidade) {
  casosMortos += quantidade
}

// Função para exibir as estatísticas
function exibirEstatisticas() {
  console.log(`Casos Confirmados: ${casosConfirmados}`)
  console.log(`Casos Recuperados: ${casosRecuperados}`)
  console.log(`Casos Mortos: ${casosMortos}`)
}

// Exemplo de uso
adicionarCasosConfirmados(100)
adicionarCasosRecuperados(20)
adicionarCasosMortos(5)

exibirEstatisticas()
