insert into departameto(numero, nome, descircao) values
	(1, 'Tecnologia', 'Produtos para computador');
    
insert into departameto values
	(null, 'Eletronicos', 'Tudo o que não é computador mais liga na tomada');

insert into departameto values
	(null, "Gamas", "Para jogadores Hard Level"),
    (null, "Acessorios", "Cabos e conectores"),
    (null, "Alimentação", "Pizza");

alter table produto drop column produtoco;
insert into produto values
(null, 'Computador', 'Conputador cheio de led top de linha',
	2500.00, 3,'https://a-static.mlcdn.com.br/618x463/computador-com-monitor-led-intel-dual-core-2-58gb-4gb-500gb-easypc-smart/3greentechnology/22037/76e756957e878dce1b87f90db417014c.jpg',
    1);

update departameto set nome="Informatica e Tecnologia" where numero=1;

delete from produto where codigo=1;
delete from departameto where numero=1;

select * from departameto;