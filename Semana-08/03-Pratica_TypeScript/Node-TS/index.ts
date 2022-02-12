import { createServer, IncomingMessage, ServerResponse }  from 'http';
import {parse} from "query-string"
import * as url from 'url'
import {writeFile, readFile, unlink} from 'fs'

const port = 3000 
const server = createServer((require: IncomingMessage, response: ServerResponse)=>{

    var resposta
    const urlparse = url.parse(require.url ? require.url : '', true);
    const params = parse(urlparse.search ? urlparse.search : '')
    if (urlparse.pathname == '/criarUser') {

        writeFile('users/' + params.id + '.txt', JSON.stringify(params), function(err: any) {
            if (err) throw err;
            resposta = 'Usuario criado com sucesso'
            console.log('Saved!');
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/plain');
            response.end(resposta);
        });

    }else if (urlparse.pathname == '/selecionaUser') {
        readFile('users/' + params.id + '.txt', function(err, data) {
            resposta = data
                // console.log(resposta)
            response.statusCode = 200;
            response.setHeader('Content-Type', 'application/json');
            response.end(resposta);
        });


    } else if (urlparse.pathname == '/remover') {
        unlink('users/' + params.id + '.txt', (err: any) =>{
            if (err) throw err;
            resposta = 'Usario removido'
                // console.log(resposta)
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/plain');
            response.end(resposta);
        });
// npx tsc watch

    }

    
});


server.listen(port, ()=>{
    console.log('Servidor rodando')
})