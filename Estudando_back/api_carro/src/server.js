require("dotenv").config({
    path: "varaviaveis.env"
})

const express = require("express")
const cors = require('cors')

const bodyParser = require("body-parser")

const routes = require("./routes")

const server = express()

server.use(cors())
server.use(bodyParser.urlencoded({ extended: false }))

server.listen(process.env.PORT, () => {
    console.log(`servidor rodando ${process.env.PORT}`)
})