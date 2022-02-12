const db = require("../database")
const { DataTypes } = require("sequelize")

const Fabricantes = db.db.define("Fabricantes", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING

    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    },
}, {
    tableName: "fabricante",
}
);
module.exports = Fabricantes