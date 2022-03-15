const fetch = require('node-fetch');
const dotenv = require('dotenv/config')
class Cielo {
    static compra(params) {
        //    console.log(process.env.URL)


        return fetch(process.env.URL, {
            method: 'post',
            body: JSON.stringify(params),
            headers: {
                "Content-Type": "application/json",
                'MerchantId': process.env.MerchantId,
                'MerchantKey': process.env.MerchantKey,



            }
        })
            .then(res => res.json());

    }

    static capitura(paymentId) {
        //    console.log(process.env.URL)


        return fetch(process.env.URL + `${paymentId}/capture`, {
            method: 'put',
            headers: {
                "Content-Type": "application/json",
                'MerchantId': process.env.MerchantId,
                'MerchantKey': process.env.MerchantKey,



            }
        })
            .then(res => res.json());

    }

    static consulta(paymentId) {
        //    console.log(process.env.URL)


        return fetch(process.env.URL_CONSULTA + `${paymentId}`, {
            method: 'get',
            headers: {
                "Content-Type": "application/json",
                'MerchantId': process.env.MerchantId,
                'MerchantKey': process.env.MerchantKey,



            }
        })
            .then(res => res.json());

    }
}
module.exports = Cielo