const http = require('http')

const coins = require("./moedas.json")

const fs = require("fs")



const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html")
    const pageHTML = fs.readFileSync("pagina.html")
    res.write(pageHTML)

    res.end()
})

server.listen(4000, () => console.log("Servidor rodando na porta 4000"))