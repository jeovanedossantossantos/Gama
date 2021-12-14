// let teste = fetch("./teste.json")
//     .then(response => {
//         return response.json();
//     })

// console.log(teste.finally())


function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:
readTextFile("./teste.json", function(text) {
    var data = JSON.parse(text);
    console.log(data);
});