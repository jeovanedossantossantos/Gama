-- recuperei todos os produtos
select * from produto;

-- buscar produtos por alguma palavra-chave
select * from produto where nome like "%USB%";

-- recuperando todos os pedidos
select * from pedido;

-- recuperando o total faturado geral (sem critério algum)
select sum(valor_final) from pedido;

-- quero saber quantos clientes eu tenho
select count(id) from cliente;

-- a mesma consulta acima, mudando o titulo da coluna
select count(id) as 'total de clientes' from cliente;

-- selecionando algumas coluas
select id, nome, cpf, senha from cliente;

-- selecionando todas as colunas
select * from cliente;

-- buscando através de um critério
select * from cliente where id = 1;

-- ordenando clientes pelo nome
select * from cliente order by nome asc;