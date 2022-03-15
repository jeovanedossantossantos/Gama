const {Produto, Fabricantes, Categorias} = require('../model')

const controllerProdutos ={
    async listarProduto (req, res){
        const listar = await Produto.findAll({
            include:Categorias,
        });
        res.json(listar)
        // res.json([{nome: "Produto 1"}, {nome: "Produto 2"}])
    },
    async cadastraProduto(req, res){
        
        const {nome, preco, quantidade, fabricante_id, 
            categoria_id} = req.body;
        const novoProduto = await Produto.create({
            nome,
            preco, 
            quantidade,
            fabricante_id
        });
        const categoria = await Categorias.findByPk(categoria_id)
        await novoProduto.setCategorias(categoria)
        res.status(201).json(novoProduto)


        // console.log(novoProduto)
       
    },

    async deletaProduto(req, res) {
        try{
            const {id} = req.params
            await Produto.destroy({
                where: {id}
            });
            
            return res.status(204).json("Excluido com sucesso")
        }catch(err){
            return res.status(500).json("Ocorreu algum peoblema")
        }

       

    },

    async atualizarProduto(req, res){
        const {id} = req.params
        const {nome, preco, quantidade} = req.body;

        if(!id) return res.status(400).json("Id não enviado")
        const produtoAtualizado = await Produto.update({

            nome,
            preco, 
            quantidade

        },{
            where: {
                id,
            }
        })
        res.json("Produto atualizado")
    }
}   

module.exports = controllerProdutos