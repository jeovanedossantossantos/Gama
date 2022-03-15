const fs = require('fs');
const stream = require('stream');
// ler
var readStream = fs.createReadStream('dados_entrada.txt');
// Craindo stream
var writeStream = fs.createWriteStream('dados_saida.txt');

// Transformação 
var transformStream = new stream.Transform({
    objectMode: true,
    transform(chunk, encoding, callback) {

        this.push(chunk.toString().toUpperCase())

        callback();

    }
})

// Execultando
readStream.on('open', () => {
    readStream.pipe(transformStream).pipe(writeStream);
})