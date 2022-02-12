
const {Usuarios} = require('../model')
const ControllerUsuarios = {
    async registro(req, res){
        const {nome, email, senha} = req.body;

        const newSenha = bcrypt.hashSync(senha, 10);

        const newUsuario = await Usuarios.create({
            nome, email, senha:newSenha
        });
        return res.status(201).join(newUsuario)
    }
}

module.exports = ControllerUsuarios;