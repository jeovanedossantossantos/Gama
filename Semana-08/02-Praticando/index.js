const http = require('http');
const url = require('url')
const queryString = require('query-string');
const fs = require("fs")

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    //Pegar a pergunta
    //Verificara a pergunta
    //Retorna uma resposta 


    var resposta
    console.log(req.url)
    const urlParse = url.parse(req.url, true)
    let texto = ""
    const parsed = queryString.parse(url.parse(req.url, true).search);

    if (urlParse.pathname == '/criarUser') {

        fs.writeFile('users/' + parsed.id + '.txt', JSON.stringify(parsed), function(err) {
            resposta = 'Usuario criado com sucesso'
            console.log('Saved!');
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end(resposta);
        });

    } else if (urlParse.pathname == '/selecionaUser') {
        fs.readFile('users/' + parsed.id + '.txt', function(err, data) {
            resposta = data
                // console.log(resposta)
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(resposta);
        });


    } else if (urlParse.pathname == '/remover') {
        fs.unlink('users/' + parsed.id + '.txt', function(err, data) {
            resposta = 'Usario removido'
                // console.log(resposta)
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end(resposta);
        });


    }


    // if (parsed.pergunta == 'melhor-filme') {
    //     texto = "Star wars"

    // } else {
    //     texto = "Não sei :("
    // }

    // console.log(parsed);
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    // res.end(resposta);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});