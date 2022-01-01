const mongoose = require("mongoose")

mongoose.connect("mongodb://user:Jeovane@localhost:27017/teste", { useMongoCliete: true })

mongoose.Promise = global.Promise;

module.exports = mongoose;