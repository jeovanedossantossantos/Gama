const op = require("./data")
const User = require("./controller/class/user")
let jogar = new User({opt:op}).game()

console.log(jogar)