let v = document.getElementsByClassName("um")
v[0].innerHTML = "Usando o get e setAttribute"

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
    ///////////////////////////////

let eleP = document.getElementById("primeiro3")
let paiP = eleP.parentNode
let h1 = document.createElement("h1")
let textoH1 = document.createTextNode("Troca feita")

h1.appendChild(textoH1)
paiP.replaceChild(h1, eleP)
    //////////////////////
let nossoLink = document.querySelector("a")
console.log("🚀 ~ file: index.js ~ line 38 ~ nossoLink", nossoLink)
console.log(nossoLink.href)

nossoLink.setAttribute("href", "")
    ///////////////////////
let h2 = document.getElementById("primeiro1")
console.log(h2.offsetWidth)
console.log(h2.offsetHeight)

console.log(h2.clientWidth)
console.log(h2.clientHeight)



console.log(h2.getBoundingClientRect())
    ///////////////////////////////