const express = require('express');
const routes = express.Router()
const cielo = require('../lib/cielo')

routes.post('/', function (req, res, next) {
    // console.log(cielo.compra(req.body))
    // res.status(200).json({"messagem":cielo.compra(req.body)})
    cielo.compra(req.body).then((ressult) => {
        // res.send(ressult)
        const paymentId = ressult.Payment.PaymentId
        cielo.capitura(paymentId ).then((ressult) => {

            if (ressult.Status === 2) {
               
                res.status(201).send(
                    {
                        "status": "sucesso",
                        "messagem": "Compra feita com sucesso",
                        "CompraId": paymentId
                    })
            }else{
                res.status(402).send(
                    {
                        "status": "Erro",
                        "messagem": "Compra feita com sucesso, mas houve um probelam na cobrança!"
                    })
            }

        }).catch((err) => {
            res.status(400).json({ "messagem": "Erro na capitura" })
        })


    }).catch((err) => {
        res.status(400).json({ "messagem": "Erro na compra" })
    });


})

routes.get('/:compras_id/status', function (req, res, next) {
    cielo.consulta(req.params.compras_id)
    .then((result)=>{
        let mes = {};
        console.log(result.Payment.Status)
        switch(result.Payment.Status){
            case 1:
                mes={
                    "Status":"Pagamento autorizado"
                }
                break;
            case 2:
                mes={
                    "Status":"Pagamento realizado"
                }
                break;
            case 12:
                mes={
                    "Status":"Pagamento pendente"
                }
                break;
            default:
                mes={
                    "Status":"Pagamento falho"
                }
               
            

        }
        res.send(mes);

    })
})



module.exports = routes;