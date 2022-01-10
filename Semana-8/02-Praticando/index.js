const http = require('http');
const url = require('url')
const queryString = require('query-string');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    //Pegar a pergunta
    //Verificara a pergunta
    //Retorna uma resposta 



    console.log(req.url)
    let texto = ""
    const parsed = queryString.parse(url.parse(req.url, true).search);
    if (parsed.pergunta == 'melhor-filme') {
        texto = "Star wars"

    } else {
        texto = "Não sei :("
    }

    console.log(parsed);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(texto);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});