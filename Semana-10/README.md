# BANCO DE DADOS 

<h1>Semana 10 - Hacker - Banco de Dados / MySQL<h1>

<ol>
    <li> - [x] Por que BD e curiosidades</li>
    <li> - [x] Modelo de Trabalho</li>
    <li> - [x] Sistema Gerenciador de BD</li>
    <li> - [x] Modelo ER</li>
    <li> - [x] Estudo de Caso Ecommerce - Modelo ER</li>
    <li> - [x] Modelo Relacional</li>
    <li> - [x] Transformando Modelos</li>
    <li> - [x] Estudo de Caso Ecommerce - Modelo Relacional</li>
    <li> - [x] Instalando o MySQL</li>
    <li> - [x] Criando base de dados e as tabelas com SQL
    <img src="./img/esquema.jpeg"/>
        <ol>
            <li>mysql -h localhost -u root -p</li>
            <li>Enter password: *******</li>
            <li>SHOW DATABASES; => mostra todos os bancos de dados</li>
        </ol>
# Mysql: criando um banco de dados e acessando
        <ol>
            <li>CREATE DATABASE ecomerce;</li>
            <li>USE ecomerce;</li>
            <li>SHOW TABLES; => mostras todas as tabelas</li>
            <li>
                <p>
                    CREATE TABLE usuarios(<br>
                        nome VARCHAR(50),<br>
                        email VARCHAR(100),<br>
                        idade INT<br>
                    );
                </p>
            </li>
            <li>DESCRIBE nome_da_tabela; => mostra as descrições da tabela</li> 
        </ol>
</li>
<li> - [x] Criando as tabelas agora no workbench</li>
<li> - [x] Alterando estruturas e removendo tabelas
        <h3>Adiciona a coluna rg apos a coluna senha</h3>
        <p>
        Alter table cliente add column
            rg varchar(10) not null after senha;
        </p>
        <h3>Apaga toda a base de dados</h3>
        <p>
        drop database nome_da_base;
        </p>
        <h3>Altera um coluna</h3>
        <p>alter table cliente modify column
	rg varchar(15);</p>
    <h3>Altera o nome da coluna</h3>
        <p> alter table cliente change column rg
	registro_geral varchar(10) not null;</p>
   

<h3>Mostra os  valores das tabelas</h3>
<p>select * from departameto;</p>
</li>
<li> - [x] Inserindo dados nas tabelas
 <h3>Inserindo valores nas tabelas</h3>
        <p> insert into departameto(numero, nome, descircao) values
	(1, 'Tecnologia', 'Produtos para computador');</p>
        ou
    <p>insert into departameto values
        (null, 'Eletronicos', 'Tudo o que não é computador mais liga na tomada')</p>
        ou
        <p>insert into departameto values
	(null, "Gamas", "Para jogadores Hard Level"),
    (null, "Acessorios", "Cabos e conectores"),
    (null, "Alimentação", "Pizza");</p>
</li>
<li> - [x] Fazendo alterações e compreendendo resultados
<h3>Atualizando dados</h3>
<p>update departameto set nome="Informatica e Tecnologia" where numero=1;</p>
<h3>Apagando dados</h3>
<p>delete from produto where codigo=1;
delete from departameto where numero=1;</p>
</li>
<li> - [x] Consultas Simples
    <h3>Colocando em ordem alfabetica</h3>
    <p>select * from cliente orderr by nome asc;</p>
    <h3>Buscando por criterio</h3>
    <p>select * from cliente where id=1;</p>
    <h3>Vendo quantos cadastros existem</h3>
    <p>select count() from cliente;</p>
    <h3>Fazendo uma pesquisa</h3>
    <p>select * from produto where nome like "%USB%";</p>
</li>
<li> - [x] Agrupamentos e totalizações
    <h3>Recuperando quantos pridutos há em cada departamento</h3>
    <p>select departamento_codigo, count(codigo) from produto group by departamento_codigo</p>
</li>
<li> - [x] Junções com 2 tabelas
    <h3>Junção simples comomo produto cartesiano</h3>
    <p>select * from produto inner join departamento
        on produto.departamento_codigo = departamento.codigo;</p>
</li>
<li> - [x] Junções com 3 ou mais tabelas
    <h3>Passo 1: a partir dos pedidos, faça a junção com os itens de pedido</h3>
    <h3>Passo 2: fazer a jumção com o pruduto</h3>
    <h3>Passo 3: fazer a junção com cliente</h3>
    <p>select * from
        pedido inner join item_pedido
            on pedido.numero = item_pedido.pedido_numero
        inner join produto on produto.codigo = item_pedido.produto_codigo
        inner join cliente on pedido.cliente_id = cliente.id;</p>
</li>
<li> - [x] Junções externas
    <h3>Usando</h3>
    <p>select * from departamento left outer join produto
        on departamento.codigo = produto.departamento_codigo;</p>
</li>
<li> - [x] Subconsultas
    <h3>Buscando todos os pedidos que possuem o produto mais caro neles</h3>
    <p>Como saber qual o produto mais caro?</p>
    <p>select * from produto order by preco desc limit 1;</p>
    <p>select * from produto having max(preco);</p>
    <p>select * from produto where preco=(select max(preco) from produto);</p><br></br>
    <h3>Pegando os pedidos que contem este produto</h3>
    <p>select * from pedido inner join item_pedido
        on item_pedido.pedido_numero = pedido.numero
        where item_pedido.produto_codigo = (select codigo from produto having max(preco));</p>
</li>
</ol>
