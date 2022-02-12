const Fabricantes = require("./Fabricantes")
const Produto = require('./Produros')
const Categorias = require("./Categorias")
const CategoriaProduto = require("./CategoriaProdutos")
Produto.belongsTo(Fabricantes,{ 
    foreignKey: 'fabricante_id',
});

Fabricantes.hasMany(Produto,{
    foreignKey: 'fabricante_id',
})

Produto.belongsToMany(Categorias,{
    foreignKey: 'protudos_id',
    through:CategoriaProduto
})

Categorias.belongsToMany(Produto,{
    foreignKey: 'categoria_id',
    through:CategoriaProduto
})

module.exports ={
    Fabricantes,
    Produto,
    Categorias
}