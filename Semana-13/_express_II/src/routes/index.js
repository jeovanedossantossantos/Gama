const express = require('express')
const controllerProdutos = require("../controller/controllerProdutos")
const controllerUsuarios = require("../controller/controullerUsuarios")
const UsusriosCreateValidations = require("../validations/usuarios/create")
const authLoginValidations = require("../validations/auth/login")
const authController = require("../controller/authController")
const routes = express.Router();
const requestLog = require('../middlewares/requestsLog')
const bloqueio = require('../middlewares/bloqueio')
const auth = require('../middlewares/auth')
routes.get("/", (req, res)=>{
    res.send("Olá mundo")

});

routes.get("/produtos",requestLog,bloqueio, controllerProdutos.listarProduto)
routes.post("/produtos", auth, controllerProdutos.cadastraProduto)
routes.delete("/produtos/:id", controllerProdutos.deletaProduto )
routes.put("/produtos/:id", controllerProdutos.atualizarProduto )

routes.post("/usuarios",UsusriosCreateValidations ,controllerUsuarios.registro )
routes.post("/login", authLoginValidations ,authController.login)
module.exports = routes;