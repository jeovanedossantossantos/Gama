"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const query_string_1 = require("query-string");
const url = __importStar(require("url"));
const fs_1 = require("fs");
const port = 3000;
const server = (0, http_1.createServer)((require, response) => {
    var resposta;
    const urlparse = url.parse(require.url ? require.url : '', true);
    const params = (0, query_string_1.parse)(urlparse.search ? urlparse.search : '');
    if (urlparse.pathname == '/criarUser') {
        (0, fs_1.writeFile)('users/' + params.id + '.txt', JSON.stringify(params), function (err) {
            if (err)
                throw err;
            resposta = 'Usuario criado com sucesso';
            console.log('Saved!');
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/plain');
            response.end(resposta);
        });
    }
    else if (urlparse.pathname == '/selecionaUser') {
        (0, fs_1.readFile)('users/' + params.id + '.txt', function (err, data) {
            resposta = data;
            // console.log(resposta)
            response.statusCode = 200;
            response.setHeader('Content-Type', 'application/json');
            response.end(resposta);
        });
    }
    else if (urlparse.pathname == '/remover') {
        (0, fs_1.unlink)('users/' + params.id + '.txt', (err) => {
            if (err)
                throw err;
            resposta = 'Usario removido';
            // console.log(resposta)
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/plain');
            response.end(resposta);
        });
    }
});
server.listen(port, () => {
    console.log('Servidor rodando');
});
