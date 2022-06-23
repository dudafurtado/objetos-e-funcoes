const conta = {
    nome: "Sana",
    idade: 23,
    pedidos: [
        {
            nome: "cebola frita",
            preco: 3500,
            quantidade: 2
        },
        {
            nome: "macarrao",
            preco: 4800,
            quantidade: 1
        },
        {
            nome: "suco de laranja",
            preco: 700,
            quantidade: 3
        }
    ]
}

let pedidos = conta["pedidos"]

let valorAPagar = 0

for (let d of conta.pedidos) {
    let calculoDaConta = d.preco * d.quantidade
    valorAPagar += calculoDaConta
}

console.log(`Olá ${conta.nome}, você deve pagar R$${valorAPagar / 100}`)