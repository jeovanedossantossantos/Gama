const mongoose = require("mongoose")

mongoose.connect("mongodb://locahost/noderest", { useMongoCliete: true })

mongoose.Promise = global.Promise;

module.exports = mongoose;