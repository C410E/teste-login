
const verificarCampo = (req, res, next) => {
    const { nome, email, senha } = req.body

    try {
        if (!nome) {
            return res.status(400).json({mensagem: 'O campo nome não pode estar vazio.'});
        }
        if (!email) {
            return res.status(400).json({mensagem: 'O campo email não pode estar vazio.'});
        }
        if (!senha) {
            return res.status(400).json({mensagem: 'O campo senha não pode estar vazio.'});
        }
        next();
    } catch (error) {
        return res.status(500).json({mensagem: 'erro ao verificar campos'})
    }
}

module.exports = {
    verificarCampo
}