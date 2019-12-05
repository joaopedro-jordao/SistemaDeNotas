"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
const request = require("request-promise");
var base_url = "http://localhost:3000/";
var nome = 'nome: "pedro"';
var email = 'email: "phcl@cin.ufpe.br"';
var response = 'text: "Email enviado"';
cucumber_1.defineSupportCode(function ({ Given, When, Then }) {
    Given(/^que existe uma turma ess2018$/, () => __awaiter(this, void 0, void 0, function* () {
        yield request.get(base_url + "email/teste")
            .then(body => expect(body.includes('"ess2018"')).to.equal(true));
    }));
    Given(/^nessa turma foi cadastrado um novo um aluno pedro com email phcl@cin.ufpe.br$/, () => __awaiter(this, void 0, void 0, function* () {
        yield request.get(base_url + "email/teste")
            .then(body => expect(body.includes('"pedro"'))
            .to.equal(true));
        yield request.get(base_url + "email/teste")
            .then(body => expect(body.includes('"phcl@cin.ufpe.br"')).to.equal(true));
    }));
    Given(/^nessa turma existe um aluno pedro com email phcl@cin.ufpe.br$/, () => __awaiter(this, void 0, void 0, function* () {
        yield request.get(base_url + "email/teste")
            .then(body => expect(body.includes('"pedro"'))
            .to.equal(true));
        yield request.get(base_url + "email/teste")
            .then(body => expect(body.includes('"phcl@cin.ufpe.br"')).to.equal(true));
    }));
    Given(/^a média final do aluno pedro for inferior a 7$/, () => __awaiter(this, void 0, void 0, function* () {
        yield request.get(base_url + "email/teste")
            .then(body => expect(body.includes('6')).to.equal(true));
    }));
    Then(/^será enviado um e-mail a pedro em phcl@cin.ufpe.br com a mensagem de que ele foi cadastrado numa nova turma$/, () => __awaiter(this, void 0, void 0, function* () {
        yield request.get(base_url + "email/phcl@cin.ufpe.br/turma")
            .then(body => expect(body.includes('"Email enviado"')).to.equal(true));
    }));
    Then(/^será enviado um e-mail a pedro em phcl@cin.ufpe.br com a mensagem de que ele possui uma nova meta cadastrada$/, () => __awaiter(this, void 0, void 0, function* () {
        yield request.get(base_url + "email/phcl@cin.ufpe.br/meta")
            .then(body => expect(body.includes('"Email enviado"')).to.equal(true));
    }));
    Then(/^será enviado um e-mail a pedro em phcl@cin.ufpe.br com a mensagem de que ele possui uma nova média disponível$/, () => __awaiter(this, void 0, void 0, function* () {
        yield request.get(base_url + "email/phcl@cin.ufpe.br/media")
            .then(body => expect(body.includes('"Email enviado"')).to.equal(true));
    }));
    Then(/^será enviado um e-mail a pedro em phcl@cin.ufpe.br com a mensagem de que ele ficou na final$/, () => __awaiter(this, void 0, void 0, function* () {
        yield request.get(base_url + "email/phcl@cin.ufpe.br/final")
            .then(body => expect(body.includes('"Email enviado"')).to.equal(true));
    }));
    When(/^a nova turma for criada$/, () => __awaiter(this, void 0, void 0, function* () {
        return true;
    }));
    When(/^uma nova meta for cadastrada para o aluno pedro$/, () => __awaiter(this, void 0, void 0, function* () {
        return true;
    }));
    When(/^uma média for calculada para o aluno pedro$/, () => __awaiter(this, void 0, void 0, function* () {
        return true;
    }));
    When(/^a média final estiver disponível$/, () => __awaiter(this, void 0, void 0, function* () {
        return true;
    }));
});
