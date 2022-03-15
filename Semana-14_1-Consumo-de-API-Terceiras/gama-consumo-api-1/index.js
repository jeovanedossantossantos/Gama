const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan')
const indexRouter = require('./routes/index')
const userRouter = require('./routes/user')
const comprasRouter = require('./routes/compras')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/ecomerce-api/v1/compras', comprasRouter);


app.use(function(req, res, next) {
    next(createError(404));
})

app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err :{};
})

app.listen(3000, ()=>{
    console.log("Rodando na porta 3000")
})