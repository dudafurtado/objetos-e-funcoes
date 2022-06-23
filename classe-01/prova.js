const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ],

    corrigirProva: function () {
        let questoesCorretas = 0

        for (let d of this.questoes) {
            if (d.resposta === d.correta) {
                questoesCorretas++
            }
        }

        let nota = questoesCorretas * 2

        console.log(`O aluno(a) ${this.aluno} acertou ${questoesCorretas} e obteve nota ${nota}`)
    }
};



prova.corrigirProva(prova)