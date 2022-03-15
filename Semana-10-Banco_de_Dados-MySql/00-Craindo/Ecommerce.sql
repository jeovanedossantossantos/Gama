CREATE TABLE cliente(
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    senha VARCHAR(20) NOT NULL,
    cpf VARCHAR(15) NOT NULL UNIQUE
);

CREATE TABLE departameto(
    numero INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(30) NOT NULL,
    descircao TEXT
);

CREATE TABLE endereco(
    num_seq INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tipo VARCHAR(5) NOT NULL,
    logradouro VARCHAR(50) NOT NULL,
    numero INTEGER,
    compl VARCHAR(20),
    bairro VARCHAR(30),
    cidade VARCHAR(50),
    estado VARCHAR(2),
    cep VARCHAR(10),
    id_cliente INTEGER NOT NULL,
    CONSTRAINT endereco_cliente FOREIGN KEY (id_cliente) REFERENCES cliente(id)
);

CREATE TABLE pedido(
    numero INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    status_pedido VARCHAR(1) NOT NULL,
    data_pedido DATE,
    valor_bruto DOUBLE,
    deconto DOUBLE,
    valor_liq DOUBLE,
    id_cliente INTEGER NOT NULL,
    CONSTRAINT cliente_pedido FOREIGN KEY (id_cliente) REFERENCES cliente(id)
);

CREATE TABLE produto(
    codigo INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    descircao TEXT,
    preco DOUBLE,
    estoque INTEGER,
    link_foto VARCHAR(255),
    numero_depto INTEGER NOT NULL,
    CONSTRAINT produto_depto FOREIGN KEY (numero_depto) REFERENCES departameto(numero)
);

CREATE TABLE item_pedido(
    seq INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    quantidade INTEGER,
    preco_unit DOUBLE,
    preco_final DOUBLE,
    codigo_produto INTEGER NOT NULL,
    numero_pedido INTEGER NOT NULL,
    CONSTRAINT item_produto FOREIGN KEY (codigo_produto) REFERENCES produto(codigo),
    CONSTRAINT item_pedido FOREIGN KEY (numero_pedido) REFERENCES pedido(numero)
);
