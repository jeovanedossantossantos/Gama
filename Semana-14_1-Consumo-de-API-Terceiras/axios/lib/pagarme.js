const axios = require('axios');
const dotenv = require('dotenv/config')
class Pagarme {
    static compra(params) {
        axios.post('https://api.pagar.me/1/transactions', 
        params,
        {
            headers:{
                "Content-Type": "application/json",
                firstName: 'Fred',
                lastName: 'Flintstone'
              }
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });


     

    }

    static capitura(paymentId) {
       


      

    }

    static consulta(paymentId) {
       


    }
}
module.exports = Pagarme