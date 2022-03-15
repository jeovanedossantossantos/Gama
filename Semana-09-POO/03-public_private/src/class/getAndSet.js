class person {
    constructor(name, occu) {
        this._name = name;
        this._occu = occu;
    }

    speak() {
        return `${this._name} trabalho com ${this._occu}`
    }

    set nome(string) {
        this._name = string.toUpperCase()
    }
    get nome() {
        return this._name
    }
}

let jeovane = new person("Jeovane", "dev")
jeovane.nome = "jeovane"
module.exports = jeovane