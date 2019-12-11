"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const email_1 = require("./email");
const cadastrodeturmas_1 = require("./cadastrodeturmas");
var server = express();
var turmasB = new cadastrodeturmas_1.CadastroDeTurmas();
server.use(bodyParser.json());
server.get('/turmas', function (req, res) {
    var turma = JSON.stringify(turmasB.getTurmas());
    res.send(turma);
});
server.post('/turma', function (req, res) {
    var turma = req.body;
    turma = turmasB.criar(turma);
    if (turma) {
        res.send({ "success": "A turma foi criada com sucesso" });
    }
    else {
        res.send({ "failure": "A turma não pode ser cadastrada" });
    }
});
server.listen(3000, function () {
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
server.get('/email/teste', function (req, res) {
    res.send(turmas);
});
server.get('/email/:user/turma', function (req, res) {
    email_1.send(req.params.user.toString(), "Nova turma disponível", "Você foi cadastrado numa nova turma no sistema Teaching Assistant!");
    res.send({ text: "Email enviado" });
});
server.get('/email/:user/meta', function (req, res) {
    email_1.send(req.params.user.toString(), "Nova meta disponível", "Você possui uma nova meta cadastrada!");
    res.send({ text: "Email enviado" });
});
server.get('/email/:user/final', function (req, res) {
    email_1.send(req.params.user.toString(), "Situação: Final", "Infelizmente você ficou na final, estude mais da próxima vez!");
    res.send({ text: "Email enviado" });
});
server.get('/email/:user/media', function (req, res) {
    email_1.send(req.params.user.toString(), "Nova meta disponível", "Você possui uma média disponível!");
    res.send({ text: "Email enviado" });
});
//# sourceMappingURL=sdn-server.js.map