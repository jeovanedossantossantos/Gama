-- juncao simples como produto cartesiano
select * from produto inner join departamento;
	
-- junção fazendo a relação entre produto e departamento
select * from produto inner join departamento
	on produto.departamento_codigo = departamento.codigo;
    
-- recuperar todos os clientes e seus respectivos endereços
select * from cliente inner join endereco
	on endereco.cliente_id = cliente.id;
    