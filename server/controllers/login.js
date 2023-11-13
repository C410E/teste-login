const knex = require('../conexao');
const senhaHash = process.env.SENHA_HASH;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const loginUsuario = async (req, res) => {
    const {email, senha} = req.body;

    try {

        const usuario = await knex('usuarios').where({ email })
        .first()
        
        if (!usuario) {
            return res.status(401).json({mensagem: 'usuario não encontrado'});
        }

        const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

        if (!senhaCorreta) {
            return res.status(400).json({mensagem: "Email ou senha não conferem."})
        }

        const dadosToken = {
            id: usuario.id,
            email: usuario.email
        }

        const token = jwt.sign(dadosToken, senhaHash, { expiresIn: '8h'});

        const {senha: _, ...dadosUsuario} = usuario;

        return res.status(200).json({
            usuario: dadosUsuario,
            token
        })
       
    } catch (error) {
        console.log(error)
        return res.status(500).json({mensagem: 'erro ao logar usuario'});
    }
} 

module.exports = {
    loginUsuario
}