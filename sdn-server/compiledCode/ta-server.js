"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const email_1 = require("./email");
var taserver = express();
taserver.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
//stub para teste de e-mail{
let turmas = {
    ess2018: [
        [
            {
                nome: "pedro",
                cpf: "089",
                metas: ["MA"],
                email: "phcl@cin.ufpe.br",
                media: 6
            }
        ]
    ]
};
taserver.get('/email/teste', function (req, res) {
    res.send(turmas);
});
taserver.get('/email/:user/turma', function (req, res) {
    email_1.send(req.params.user.toString(), "Nova turma disponível", "Você foi cadastrado numa nova turma no sistema Teaching Assistant!");
    res.send({ text: "Email enviado" });
});
taserver.get('/email/:user/meta', function (req, res) {
    email_1.send(req.params.user.toString(), "Nova meta disponível", "Você possui uma nova meta cadastrada!");
    res.send({ text: "Email enviado" });
});
taserver.get('/email/:user/final', function (req, res) {
    email_1.send(req.params.user.toString(), "Situação: Final", "Infelizmente você ficou na final, estude mais da próxima vez!");
    res.send({ text: "Email enviado" });
});
taserver.get('/email/:user/media', function (req, res) {
    email_1.send(req.params.user.toString(), "Nova meta disponível", "Você possui uma média disponível!");
    res.send({ text: "Email enviado" });
});
//# sourceMappingURL=ta-server.js.map