const knex = require("../conexao");
const jwt = require("jsonwebtoken");
const senhaHash = process.env.SENHA_HASH;

const verificaLogin = async (req, res, next) => {
    const { authorization} = req.headers;

    if (!authorization) {
        return res.status(401).json({mensagem: "não autorizado"})
    }

    try {
        const token = jwt.replace("Bearer ", "").trim();

        const { id } = jwt.verify(token, senhaHash);

        const usuarioExiste = await knex("usuarios").where({ id }).first();

        if (!usuarioExiste) {
            return res.status(400).json({mensagem: "Token invalido"});
        }

        const { senha, ...usuario } = usuarioExiste;

        req.usuario = usuario;

        next();
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = {
    verificaLogin
}