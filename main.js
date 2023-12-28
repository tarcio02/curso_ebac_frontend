function Pessoa (nome, idade, genero) {
    this.nome = nome;
    this.idade = idade;
    this.genero = genero;
}

function Endereco (bairro, nomeRua, numero) {
    Pessoa.call(this);
    this.bairro = bairro;
    this.nomeRua = nomeRua;
    this.numero = numero;
}

function Paciente (situacao) {
    Endereco.call(this);
    this.situacao = situacao;
}
const pessoa1 = new Pessoa("João", 25, "masculino");
const enderecoP1 = new Endereco("centro", "rua das oliveiras", 48);
const pacienteP1 = new Paciente("bronquite");

console.log(pacienteP1)