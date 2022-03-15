let conteudo = ""
let tipo = document.getElementById("root")


function comparar() {
    let nu = document.getElementById("numero")
    let nu2 = document.getElementById("numero2")
    if (nu.value !== '' && nu2.value !== '') {
        tipo.innerHTML += `<h1>${nu.value} é igual ${nu2.value} ${nu.value === nu2.value ? "Sim" : 'Não'}</h1>`
    } else {
        alert("Prencha os campos")
    }
}