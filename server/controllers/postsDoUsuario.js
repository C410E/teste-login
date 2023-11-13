const knex = require("../conexao");

const postsDoUsuario = async (req, res) => {
    try {

        const posts = await knex("feed")

        return res.status(200).json(posts)

    } catch (error) {

    }
}

module.exports = {
    postsDoUsuario
}