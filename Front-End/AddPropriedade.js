class Pessoa{
  constructor(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

p = new Pessoa('Lucas', 'Lattari');

const newPessoa = {
  ...p,
  profissao: 'professor'
};

console.log(newPessoa);