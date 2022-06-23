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

let valorAPagar = 0



console.log(`Oi ${cliente.nome}, você deve pagar R$${valorAPagar} pelos seus produtos comprados.`)