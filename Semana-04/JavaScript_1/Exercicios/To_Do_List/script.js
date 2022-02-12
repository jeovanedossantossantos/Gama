

const lista = document.querySelector('[data-lists]')
const formulario = document.querySelector('[data-new-list-form]')
const entrada = document.querySelector('[data-new-list-input]')
// console.log(lista)

let lists =[]

formulario.addEventListener('submit', function(e){
    e.preventDefault()
    const lintName = entrada.value

    if( lintName === null || lintName === '') return 

    const list = createList(lintName)
    entrada.value = null
    lists.push(list)
    render()
    
})
function createList(name){
    return {id: Date.now().toString(), name: name}
}
function render(){
    clearElement(lista)
    lists.forEach(function(list){
        const item = document.createElement('li')
        item.classList.add('item')
        item.innerHTML = list.name
        lista.appendChild(item)
    })
}

function clearElement(e){
    while (e.firstChild){
        e.removeChild(e.firstChild)
    }
}


render()