import express = require('express');
import bodyParser = require("body-parser");

import { Turma } from '../common/turma';
import { send } from './email';
import { CadastroDeTurmas } from './cadastrodeturmas';


var server = express();

var turmasB: CadastroDeTurmas = new CadastroDeTurmas();

server.use(bodyParser.json());

server.get('/turmas', function(req, res){
  var turma: string = JSON.stringify(turmasB.getTurmas());
  res.send(turma);
})

server.post('/turma', function(req: express.Request, res: express.Response) {
  var turma: Turma = <Turma> req.body;
  turma = turmasB.criar(turma);
  if (turma) {
    res.send({"success":"A turma foi criada com sucesso"});
  } else {
    res.send({"failure":"A turma não pode ser cadastrada"});
  }
})

server.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})

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
}

server.get('/email/teste', function(req, res){
  res.send(turmas);
});



server.get('/email/:user/turma', function(req, res){
  send(req.params.user.toString(),"Nova turma disponível" ,"Você foi cadastrado numa nova turma no sistema Teaching Assistant!");
  res.send({text: "Email enviado"});
});

server.get('/email/:user/meta', function(req, res){
  send(req.params.user.toString(),"Nova meta disponível" ,"Você possui uma nova meta cadastrada!");
  res.send({text: "Email enviado"});
});

server.get('/email/:user/final', function(req, res){
  send(req.params.user.toString(),"Situação: Final" ,"Infelizmente você ficou na final, estude mais da próxima vez!");
  res.send({text: "Email enviado"});
});

server.get('/email/:user/media', function(req, res){
  send(req.params.user.toString(),"Nova meta disponível" ,"Você possui uma média disponível!");
  res.send({text: "Email enviado"});
});






