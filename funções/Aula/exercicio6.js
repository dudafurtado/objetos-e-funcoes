function idadeDePessoa(idade) {
    if (idade < 25) {
        return "jovem"
    } else if (idade > 66) {
        return "idoso"
    } else {
        return "adulto"
    }
}

function apresentarPessoa(dadosDePessoa) {
    let faixaEtaria = idadeDePessoa(dadosDePessoa.idade)

    console.log(`Olá! Meu nome é ${dadosDePessoa.nome}, sou um ${faixaEtaria} de ${dadosDePessoa.idade} anos, ${dadosDePessoa.altura} de altura e sou ${dadosDePessoa.profissao}.`)

}

let dadosDePessoa = {
    nome: "Rose",
    idade: 24,
    profissao: "cantora",
    altura: 1.68
}

apresentarPessoa(dadosDePessoa)