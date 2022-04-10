# Hacker - Gerenciamento de erros

<ul>
<li>[x] Introdução Gerenciamento de erros</li>
<li>[x] Gerenciamento de erros: O que é, por que e quando
<p><img width="500px" src="./img/1.png"/></p>
<p><img width="500px" src="./img/2.png"/></p>
</li>
<li>[x] Hierarquia de exceções
<p><img width="500px" src="./img/3.png"/></p>
<p><img width="500px" src="./img/4.png"/></p>
</li>
<li>[x] Categorias de erros
<p><img width="500px" src="./img/5.png"/></p>
<p><img width="500px" src="./img/6.png"/></p>
<p>AssertionErro: Nunca deveria acontecer, mas acontece. É um erro que aconteceu no nucleo da aplicação.</p>
<p>RangeErro: Posição solicitadanão existe no conjunto de dados: <br/>Exemplo.:</p>

        require('net).connect(-1);

<p>ReferenceErro: Tentativa de acerssar variável que não existe.</p>
<p>SyntaxErro: Código escrito errado.</p>
<p>TypeErro: Tipo de argumento enviado é inválido.</p>

        require('url').parse(()=>{});

<p>SystemErro: Acontece em tempo de execução, quando ocorrw algum erro na comunicação entre aplicação e sistema operacional.<br/> Exemplo: tentar ler um arquivo não existente.</p>
</li>
<li>[x] Propagação e interceptação</li>
<p><img width="500px" src="./img/7.png"/></p>
<li>[ ] Demonstração de tratamento de erros - Parte 1</li>
<p><img width="500px" src="./img/8.png"/></p>
<h4>Gerando api com os padrões do express</h4>

                npx express-generator
                yarn add -g express-generator
                express

<li>[x] Demonstração de tratamento de erros - Parte 2</li>
<li>[x] Log de erros</li>
<p><img width="500px" src="./img/9.png"/></p>
<p><img width="500px" src="./img/10.png"/></p>
<li>[ ] Demonstração de log</li>
<p>
</p>

                yarn add winston

</ul>