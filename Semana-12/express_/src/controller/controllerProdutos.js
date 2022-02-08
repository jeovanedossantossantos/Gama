const controllerProdutos ={
    listarProduto:(req, res)=>{
        res.json([{nome: "Produto 1"}, {nome: "Produto 2"}])
    },
    cadastraProduto:(req, res) =>{
        console.log(req.body)
        res.json("Produto cadastrado")
    }
}

module.exports = controllerProdutos