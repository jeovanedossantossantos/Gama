let v = document.getElementsByClassName("um")
v[0].innerHTML = "Usando o CreateElement e InsertBefore"

let novo = document.createElement("p")
novo.innerText = "Deu certo"

let elemto = document.querySelector('#primeiro1')

let elePai = document.querySelector('body')

elePai.insertBefore(novo, primeiro2)