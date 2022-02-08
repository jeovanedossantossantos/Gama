const express = require('express')
const controllerProdutos = require("../controller/controllerProdutos")
const routes = express.Router();
routes.get("/", (req, res)=>{
    res.send("Olá mundo")

});
// routes.get("/produto/:id", (req, res)=>{
//     console.log(req.params)
//     res.send("Olá mundo")

// });


routes.post("/cadastra", (req, res)=>{
    console.log(req.body)
    res.json(req.body)
})

routes.get("/produto/lista", controllerProdutos.listarProduto)
routes.post("/produto", controllerProdutos.cadastraProduto)

module.exports = routes;