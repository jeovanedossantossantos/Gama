const http = require('http')

const estados = require("./estados.json")

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json")
    res.write(JSON.stringify(estados))

    res.end()
})

server.listen(8000, () => console.log("Servidor rodando na porta 4000"))