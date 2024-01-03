// exercicio es6

function analisaNota() {
    const media = 6;
    const alunos = [
        {nome: "joão", nota: 10},
        {nome: "paulo", nota: 2},
        {nome: "josé", nota: 5},
        {nome: "maria", nota: 6},
        {nome: "larissa", nota: 8},
        {nome: "emanuela", nota: 4}
    ];

    for (let i = 0; i < alunos.length; i++) {
        if (alunos[i].nota < media) {
            console.log(`${alunos[i].nome} foi reprovado`)
        }
        else {
            console.log(`${alunos[i].nome} foi aprovado`)
        }
    };
};

console.log(analisaNota());