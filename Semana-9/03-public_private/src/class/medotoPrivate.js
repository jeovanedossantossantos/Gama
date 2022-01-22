class Person {
    #name;
    #age;
    constructor({ name, age }) {
        this.#name = name;
        this.#age = age;

    }

    speak(){
        return console.log(this.#name)
    }
    set nome(string){
        this.#name= string
    }
    get nome(){
        return this.#name
    }

    set age(numb){
        this.#age= numb
    }
    get age(){
        return this.#age
    }
}

class Employee extends Person{
    #code
    constructor({name, age, code}){
        super({name, age})
        this.#code =code

    }
    speak(){
        return console.log(`${this.#code} ${this.nome} ${this.age}`)
    }
}
module.exports = Employee