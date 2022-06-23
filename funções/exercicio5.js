function apresentarPessoa(dadosDePessoa) {
    if (dadosDePessoa.idade < 25) {
        console.log(`Olá! Meu nome é ${dadosDePessoa.nome}, sou um jovem de ${dadosDePessoa.idade} anos, ${dadosDePessoa.altura} de altura e sou ${dadosDePessoa.profissao}.`)
    } else if (dadosDePessoa.idade > 66) {
        console.log(`Olá! Meu nome é ${dadosDePessoa.nome}, sou um idoso de ${dadosDePessoa.idade} anos, ${dadosDePessoa.altura} de altura e sou ${dadosDePessoa.profissao}.`)
    } else {
        console.log(`Olá! Meu nome é ${dadosDePessoa.nome}, sou um adulto de ${dadosDePessoa.idade} anos, ${dadosDePessoa.altura} de altura e sou ${dadosDePessoa.profissao}.`)
    }
}

let dadosDePessoa = {
    nome: "Rose",
    idade: 24,
    profissao: "cantora",
    altura: 1.68
}

apresentarPessoa(dadosDePessoa)