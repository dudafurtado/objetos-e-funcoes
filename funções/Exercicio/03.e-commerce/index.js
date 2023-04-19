const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ]
}

const imprimirResumoDoCarrinho = (carrinho) => {
    let itens = 0;
    let aPagar = 0;

    for (let produto of carrinho.produtos) {
        itens += produto.qtd;
        aPagar += produto.precoUnit;
    }

    console.log(`Cliente: ${carrinho.nomeDoCliente}`);
    console.log(`Total de itens: ${itens} itens`)
    console.log(`Total a pagar: R$ ${aPagar}`)
}