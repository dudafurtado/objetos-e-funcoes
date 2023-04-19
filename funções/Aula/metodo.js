let dadosDePessoa = {
    nome: "Rose",
    idade: 24,
    profissao: "cantora",
    altura: 1.68,
    idadeDepessoa: function () {
        if (this.idade < 25) {
            return "jovem"
        } else if (this.idade > 66) {
            return "idoso"
        } else {
            return "adulto"
        }
    },
    apresentar: function () {
        let faixaEtaria = this.idadeDePessoa(this.idade)

        console.log(`Olá! Meu nome é ${this.nome}, sou um ${faixaEtaria} de ${this.idade} anos, ${this.altura} de altura e sou ${this.profissao}.`)
    }
}

dadosDePessoa.apresentar()