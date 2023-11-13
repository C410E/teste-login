const knex = require('../conexao');
const bcrypt = require('bcrypt');

const cadastroUsuario = async (req, res) => {
    const {nome, email, senha} = req.body

    try {
        const senhaCriptografada = await bcrypt.hash(senha, 10)
        const cadastrar = await knex('usuarios')
        .insert({
        nome,
        email, 
        senha: senhaCriptografada
    });

       if (!cadastrar) {
        return res.status(400).json({mensagem: 'O usuario não foi cadastrado'});
       }
       return res.status(200).json({mensagem: 'cadatro realizado'})
    } catch (error) {
        console.log(error)
        return res.status(500).json({mensagem: 'erro ao cadastrar usuario'});
    }
}

module.exports = {
    cadastroUsuario
}