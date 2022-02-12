class P {
    constructor(name, occupation, age) {
        this._name = name
        this._occupation = occupation
        this._age = age


    }

    hello(name, occupation, age) {
        if (occupation === 'dev') {
            return `Fala ${occupation} seu nome é ${name} e você tem ${age}anos`
        } else {
            return `Fala ${occupation} seu nome é ${name} e você tem ${age}anos`

        }
    }
}

const P1 = new P;
module.exports = P1;