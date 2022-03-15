-- gostaria de buscar todos os pedidos que possuem o produto mais caro neles

-- como saber qual o produto mais caro?
select * from produto order by preco desc limit 1;
select * from produto having max(preco);
select * from produto where preco = (select max(preco) from produto);

-- mas na verdade eu quero os pedidos que contem este produto
select * from pedido inner join item_pedido
	on item_pedido.pedido_numero = pedido.numero
	where item_pedido.produto_codigo = 
     (select codigo from produto having max(preco));
     
-- caso eu queira o(s) cliente(s) que compraram este produto mais caro 
-- basta fazer na consulta externa uma junção com cliente e recuperar seu nome

select * from cliente inner join pedido on cliente.id = pedido.cliente_id
		inner join item_pedido on item_pedido.pedido_numero = pedido.numero
        where item_pedido.produto_codigo = 
        (select codigo from produto having max(preco));