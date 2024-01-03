"use strict";

// exercicio es6

function analisaNota() {
  var media = 6;
  var alunos = [{
    nome: "joão",
    nota: 10
  }, {
    nome: "paulo",
    nota: 2
  }, {
    nome: "josé",
    nota: 5
  }, {
    nome: "maria",
    nota: 6
  }, {
    nome: "larissa",
    nota: 8
  }, {
    nome: "emanuela",
    nota: 4
  }];
  for (var i = 0; i < alunos.length; i++) {
    if (alunos[i].nota < media) {
      console.log("".concat(alunos[i].nome, " foi reprovado"));
    } else {
      console.log("".concat(alunos[i].nome, " foi aprovado"));
    }
  }
  ;
}
;
console.log(analisaNota());