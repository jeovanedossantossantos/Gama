-- como saber quantos produtos há em cada departamento
select * from produto;

-- recuperando quantos produtos há em cada um dos departamentos
select departamento_codigo, count(codigo) from produto 
	group by departamento_codigo;
    
-- recuperando a somatoria dos produtos por departamento
select departamento_codigo, sum(preco*estoque) from produto
	group by departamento_codigo;