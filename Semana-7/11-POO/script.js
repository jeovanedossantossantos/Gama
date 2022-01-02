class Pessoa {

    nome = ''
    idade = 0
    altura = 0.0

    constructor(nome, idade, altura) {

        this.nome = nome
        this.idade = idade
        this.altura = altura

    }
    mostra = (pessoa) => {
        var layout = document.getElementById("root")

        layout.innerHTML = `<h1>Pessoa: ${pessoa.nome} ${pessoa.idade} ${pessoa.altura}</h1>`
    }


}
class Professor extends Pessoa {

    materia = ''
    constructor(nome, idade, altura, materia) {
        super(nome, idade, altura)
        this.materia = materia


    }

    mostra = (pessoa) => {
        var layout = document.getElementById("root")

        layout.innerHTML += `<h1>Professor:  ${pessoa.nome} ${pessoa.idade} ${pessoa.altura} ${pessoa.materia}</h1>`
    }

}

var pessoaUm = new Pessoa("jeovane", 23, 1.78)
var professrUm = new Professor("jeovane", 23, 1.78, 'Matematica')

pessoaUm.mostra(pessoaUm)
professrUm.mostra(professrUm)