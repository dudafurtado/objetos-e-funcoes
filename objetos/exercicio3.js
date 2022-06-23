const produto1 = {
    nome: "vodka",
    preco: 40000,
    quantidade: 2
}

const produto2 = {
    nome: "suco",
    preco: 2000,
    quantidade: 1
}

const produto3 = {
    nome: "refri",
    preco: 5000,
    quantidade: 4
}

const cliente = {
    nome: "Carla",
    idade: 19,
    produtosConsumidos: [produto1, produto2, produto3]
}

console.log(cliente.nome)
console.log(cliente.idade)

cliente.idade = 22
console.log(cliente.idade)

let primeiroConsumido = cliente.produtosConsumidos[0]
console.log(`${primeiroConsumido["nome"]}`)

let quantosProdutos = cliente["produtosConsumidos"].length - 1
let precoUltimo = cliente.produtosConsumidos[quantosProdutos]
console.log(`${precoUltimo["preco"]}`)