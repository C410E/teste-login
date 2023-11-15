const express = require("express");
const { cadastroUsuario } = require("./controllers/cadastrousuario");
const { verificarCampo } = require("./midware/verificarcampos");
const { loginUsuario } = require("./controllers/login");
const { postsDoUsuario } = require("./controllers/postsDoUsuario");
const { verificaLogin } = require("./verificacao/verificaLogin")


const routes = express();

routes.post("/cadastro", verificarCampo, cadastroUsuario);

routes.post("/login", loginUsuario);


// routes.use(verificaLogin);

routes.get("/feed", postsDoUsuario);

module.exports =  routes;
