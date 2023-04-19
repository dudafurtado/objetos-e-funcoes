const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function (valor) {
        this.saldo += valor
        this.historicos += {
            tipo: "Depósito",
            valor: 10000,
        }
        console.log(` Deposito de RS${valor / 100} realizado para o cliente: ${this.nome}.`)
    },
    sacar: function (valor) {
        if (valor > this.saldo) {
            console.log(`Saldo insuficiente para o saque de: ${this.nome}.`)
        } else {
            this.saldo -= valor
            this.historicos += {
                tipo: "Saque",
                valor: 5000,
            }
            console.log(`Saque de RS${valor / 100}  realizado para o cliente: ${this.nome}.`)
        }
    },
    extrato: function () {
        console.log(`Extrato de ${this.nome} - Saldo: RS${this.saldo / 100}`)
        console.log(`Histórico: ${this.historicos}`)
        console.log(`Depósito de ${this.depositar["valor"]}`)
        console.log(`Saque de ${this.sacar["valor"]}`)
    }
}

console.log(contaBancaria.depositar(10000));
console.log(contaBancaria.sacar(50000));
console.log(contaBancaria.sacar(5000));
console.log(contaBancaria.extrato());