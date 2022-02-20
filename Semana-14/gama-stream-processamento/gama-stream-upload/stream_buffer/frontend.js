const request = require('request')
const fs = require('fs')
var formData = {
    my_field: 'file',
    my_file: fs.createReadStream('./video/1.mp4')
}

request.post({
    url: 'http://localhost:3000/api/v1/uploads',
    formData: formData
},(err,statusCode, response) => {
    if(err){
        return console.error(err)
    }
    console.log("Sucesso")
})