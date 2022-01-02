var layout = document.getElementById("root")

function primeiraFun() {

    setTimeout(() => {
        layout.innerHTML += `<h1>Pronto</h1>`
    }, 5000)

}

function segundaFun() {
    layout.innerHTML += `<h1>Outra coisa</h1>`
}

primeiraFun()
segundaFun()

function executar(messagem, callback) {
    layout.innerHTML += `<h1>${messagem}</h1>`
    callback()


}

executar("Messagem passada", function() {
    layout.innerHTML += `<h1>Messagem dois</h1>`
})