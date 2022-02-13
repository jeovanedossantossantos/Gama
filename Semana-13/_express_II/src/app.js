const express = require("express")
const routes = require('./routes')
const handleError = require("./middlewares/handleError")
const db = require("./database")


const app = express();


app.use(express.json())
app.use(routes)
app.use(handleError)

app.listen(3000, ()=>console.log("Rodando"))