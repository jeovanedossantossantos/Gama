let v = document.getElementsByClassName("um")
v[0].innerHTML = "Usando o AppendChild e ParentNode"

let novo = document.createElement("p")
novo.innerText = "Deu certo"
let texto = document.createTextNode(" AppendChild e ParentNode")
novo.appendChild(texto)
let elemto = document.querySelector('#primeiro1')

let elePai = document.querySelector('body')

elePai.insertBefore(novo, primeiro2)

let nLista = document.createElement('li')
let texto1 = document.createTextNode("Lista Ul")
nLista.appendChild(texto1)
document.getElementById("lista").appendChild(nLista)

let n = document.createElement("li")
let o = document.createTextNode("Arroz")
n.appendChild(o)

let l = document.getElementById("banana")
let pai = l.parentNode

pai.appendChild(n)



