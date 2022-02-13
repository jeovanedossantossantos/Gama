
const {Usuarios} = require('../model')
const bcrypt = require('bcrypt')
const controllerUsuarios = {
    async registro(req, res){
        const {nome, email, senha} = req.body;
        console.log("Ok")

        const newSenha = bcrypt.hashSync(senha, 10);

        const newUsuario = await Usuarios.create({
            nome, email, senha:newSenha
        });

        return res.status(201).json(newUsuario);
    }
}

module.exports = controllerUsuarios;