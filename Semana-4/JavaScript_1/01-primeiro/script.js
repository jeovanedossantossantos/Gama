
var body = document.body;//pega a teg


var h1 = document.createElement('h1');// Criar elemento


var texto = document.createTextNode("Primeiro Codíco");// Criar o nó de texto

// Anexar o nó de texto ao elemento h1
h1.appendChild(texto);

// Agora sim, inserir (anexar) o elemento filho (titulo) ao elemento pai (body)
body.appendChild(h1);


