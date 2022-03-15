const MachineOptions = require("./machine")
const inquirer = require("inquirer")
const options = require("../../data");
class User extends MachineOptions {
    constructor({ opt, name, selecter }) {

        super({ opt });
        this._name = name
        this._selecter = selecter
        this._sort = this.sort()

    }

    set name(nome) {
        this._name = nome
    }
    get name() {
        return this._name
    }

    set selecter(selecter) {
        this._selecter = selecter
    }
    get selecter() {
        return this._selecter
    }

    logic() {
        if (this._selecter === this._sort) {
            return `${this._name}, você empatou!!! - 
            usario ${this._selecter} e maquina ${this._sort}`

        }
        else if ((this.selecter === 'Pedra' && this._sort === 'Tesoura') || (this.selecter === 'Tesoura' && this._sort === 'Papel') || (this.selecter === 'Papel' && this._sort === 'Pedra')) {
            return `${this.name} Você ganhou!!! - 
            usario ${this._selecter} e maquina ${this._sort}`
        }
        else {
            return `${this.name} Você Perdeu!!! - 
            usario ${this._selecter} e maquina ${this._sort}`
        }
    }

    game() {
        return inquirer
            .prompt([
                {
                    name: 'name',
                    message: "Qual o seu nome?",
                    default: "Jogador"
                }, {
                    type: 'list',
                    name: "jokenpo",
                    message: "Selecione uma desttas opções ",
                    choices: options
                }
            ]).then((answers) => {
                this._name=answers.name
                this._selecter = answers.jokenpo
                console.info(`O resultado é ${this.logic()}`)

            })
    }
}

module.exports = User