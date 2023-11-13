const express = require("express");
const { cadastroUsuario } = require("./controllers/cadastrousuario");
const { verificarCampo } = require("./midware/verificarcampos");
const { loginUsuario } = require("./controllers/login");
const { postsDoUsuario } = require("./controllers/postsDoUsuario");


const routes = express();

routes.post("/cadastro", verificarCampo, cadastroUsuario);

routes.post("/login", loginUsuario);

//TO DO: colocar o token para ser obrigatorio a partir daqui

routes.get("/posts", postsDoUsuario);

module.exports =  routes;
