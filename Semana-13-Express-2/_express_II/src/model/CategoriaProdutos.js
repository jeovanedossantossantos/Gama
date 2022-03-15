const db = require("../database")
const { DataTypes } = require("sequelize")

const Produros = require("./Produros")
const Categorias = require("./Categorias")
const CategoriaProduto = db.db.define("CategoriaProduto", {
    protudos_id: {
        type: DataTypes.INTEGER,
        reference:{
            model: Produros,
            key:"id"
        },
    },
    categoria_id: {
        type: DataTypes.INTEGER,
        reference:{
            model: Categorias,
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
    tableName: "protudos_has_categoria",
}
);
module.exports = CategoriaProduto