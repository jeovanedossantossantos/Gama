const Produto = require('../model/Produros')
const controllerProdutos ={
    async listarProduto (req, res){
        const listar = await Produto.findAll();
        res.json(listar)
        // res.json([{nome: "Produto 1"}, {nome: "Produto 2"}])
    },
    async cadastraProduto(req, res){
        const {nome, preco, quantidade} = req.body;
        const novoProduto = await Produto.create({
            nome:  req.body.nome,
            preco:  req.body.preco, 
            quantidade:  req.body.quantidade
        }).then(function() {
            // res.send('Post feito com sucesso!')
        console.log("Sucesso")
        }).catch(function(erro) {
            console.log("Erro: " + erro)
        })


        console.log(req.body)
        res.json(novoProduto)
    }
}

module.exports = controllerProdutos