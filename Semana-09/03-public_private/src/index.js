const ObJs = require('./literals/objetos')
const Obj = require("./literals/objeto.json")
const Pessoa = require("./class/anatomia")
const p = require("./class/getAndSet")
const Person = require("./class/medotoPublic")
const Employee = require("./class/medotoPrivate")

let eu = new Employee({
    name: "Jeovane",
    age: 23,
    code: "JS"
})
eu.speak()
// console.log(eu.#name)
// console.log(p)
// console.log(Obj)
// console.log(ObJs.getFinalPrice())
// console.log(Pessoa.hello("Jeovane", "dev", 23))