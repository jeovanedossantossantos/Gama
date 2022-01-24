-- passo 1  a partir dos pedidos, faço a junção com os itens de pedido
-- passo 2: fazer a junçao com produto
-- passo 3: fazer a junção com cliente
select * from 
     pedido inner join item_pedido 
		on pedido.numero = item_pedido.pedido_numero
	inner join produto on produto.codigo = item_pedido.produto_codigo
    inner join cliente on pedido.cliente_id = cliente.id;
    
-- a mesma consulta anterior, porém buscando todos os dados do pedido + nome
-- do cliente + o nome do produto comprado

select pedido.numero, pedido.data_pedido, pedido.valor_bruto,
       pedido.desconto, pedido.valor_final, cliente.nome,
       produto.nome from 
     pedido inner join item_pedido 
		on pedido.numero = item_pedido.pedido_numero
	inner join produto on produto.codigo = item_pedido.produto_codigo
    inner join cliente on pedido.cliente_id = cliente.id
    order by pedido.numero;

-- quero totais de pedidos por cliente (inclusive com o nome deles)
select cliente.nome, pedido.cliente_id, sum(pedido.valor_final)
    from pedido inner join cliente on pedido.cliente_id = cliente.id
    group by pedido.cliente_id;