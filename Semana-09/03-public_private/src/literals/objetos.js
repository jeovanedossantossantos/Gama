function Convete(params) {

    return Intl.NumberFormat('pt-BR', { style: "currency", currency: 'BRL' }).format(params)

}

const Produto = {
    id: 1,
    name: "Motorola",
    price: 800,
    discount: 5,
    description: {
        features: "Alguma coisa"
    },

    getDiscount: function() {
        return (this.price * this.discount) / 100

    },
    getFinalPrice: function() {
        return Convete(this.price - this.getDiscount())

    }


}

module.exports = Produto