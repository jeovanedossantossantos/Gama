const pessoa = {
    name: "Jeovane dos Santos",
    idade: 23,
    altura: 1.75,
    falar: () => function() {}
}
var mudar = document.getElementById("mudar")
var layout = document.getElementById("root")

layout.innerHTML = pessoa.name + " " + pessoa.idade + " " + pessoa.altura

function Mudar() {

    pessoa.name = mudar.value
    layout.innerHTML = pessoa.name + " " + pessoa.idade + " " + pessoa.altura

}

pessoa.falar = function(texto) {
    layout.innerHTML += `<h1>` + texto + `</h1>`
}
pessoa.falar("Olá")