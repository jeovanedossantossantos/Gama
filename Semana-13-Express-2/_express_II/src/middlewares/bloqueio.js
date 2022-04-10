module.exports = (req, res, next) =>{
    const {pass} = req.query;
    const {token} = req.headers
    console.log(token);

    if(!pass || pass !== "banana"){
        return res.status(400).json({"erro": "Não é banana"})
    }
    next();
}