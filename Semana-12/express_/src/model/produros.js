const db = require("../database")
const { DataTypes } = require("sequelize")
const Fabricantes = require("./Fabricantes")

const Produtos = db.db.define("Protudos", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING

    },
    preco: {
        type: DataTypes.FLOAT,
    },
    quantidade: {
        type: DataTypes.INTEGER,
    },fabricante_id:{
        type: DataTypes.INTEGER,
        reference:{
            model: Fabricantes,
            key:"id"
        },
    },
    
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    },
    
}, {
    tableName: "protudos",
}
);
module.exports = Produtos