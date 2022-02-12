let layout = document.getElementById("root")

let h1 = document.createElement("h1")
let titulo = document.createTextNode("Funções")
h1.appendChild(titulo)
layout.appendChild(h1)

function FuncaoUm() {
    layout.innerHTML += `<h1>Função um</h1>`
}

function FuncaoDois(tipo) {
    layout.innerHTML += `<h1>Função ${tipo}</h1>`
}

var funcaoTrees = function(tipo) {
    layout.innerHTML += `<h1>Função ${tipo}</h1>`
}

const funcaoQuatro = (tipo) => layout.innerHTML += `<h1>Função ${tipo}</h1>`

FuncaoUm()
FuncaoDois("Dois")
funcaoTrees("Três")
funcaoQuatro("Quatro")
alert("Teste de função Alert")

layout.innerHTML += `<h1> ${Math.round(Math.random(0, 1) * 100)}</h1>`