const fetch = require('node-fetch');
const dotenv = require('dotenv/config')
class Cielo {
    static compra(params) {
       console.log(process.env.URL)

        
       fetch(process.env.URL, {
            method: 'post',
            body: JSON.stringify(params),
            // header: 'Content-Type: application/json',
            // header: `MerchantId: ${process.env.MerchantId}`,
            // header: `MerchantKey: ${process.env.MerchantKey}`
            headers: { 
                'Content-Type': 'application/json',
                'MerchantKey':process.env.MerchantKey,
                'MerchantId:':process.env.MerchantId,
                
             }
        })
            .then(res => res.json())
            .then(json => console.log(json));

    }
}
module.exports = Cielo