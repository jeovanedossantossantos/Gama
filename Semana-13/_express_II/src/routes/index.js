const express = require('express')
const controllerProdutos = require("../controller/controllerProdutos")
const routes = express.Router();
const requestLog = require('../middlewares/requestsLog')
const bloqueio = require('../middlewares/bloqueio')
routes.get("/", (req, res)=>{
    res.send("Olá mundo")

});
// routes.get("/produto/:id", (req, res)=>{
//     console.log(req.params)
//     res.send("Olá mundo")

// });


// routes.post("/cadastra", (req, res)=>{
//     console.log(req.body)
//     res.json(req.body)
// })

routes.get("/produtos",requestLog,bloqueio, controllerProdutos.listarProduto)
routes.post("/produtos", controllerProdutos.cadastraProduto)
routes.delete("/produtos/:id", controllerProdutos.deletaProduto )
routes.put("/produtos/:id", controllerProdutos.atualizarProduto )


module.exports = routes;