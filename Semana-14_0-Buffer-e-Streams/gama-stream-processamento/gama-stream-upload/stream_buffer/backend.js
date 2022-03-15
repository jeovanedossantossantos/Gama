const express = require('express')
const fs = require('fs')
const Busboy = require('busboy')


const app = express()
const port = 3000;


app.post('/api/v1/uploads', (req, res)=>{
    var busboy = Busboy({
        headers:req.headers
    });
    busboy.on('file',(fileddname,file,filename, encoding, mimetype )=>{
        file.on('data',(data)=>{
            console.log("Recebendo dados "+data.length + " bytes...")
        })
        file.on('end',()=>{
            console.log("O arquivo " + filename + ' foi carregado com sucesso')
        })
        var writeStream = fs.createWriteStream('./uploads/2.mp4');

        file.pipe(writeStream);
    });

    busboy.on('finish',()=>{

        res.writeHead(200,{
            'Connection':'close',

        });
        res.end('Sucesso')
    })
    return req.pipe(busboy);
})

app.listen(port, ()=>{
    console.log("Im running...")
})