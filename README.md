# SENTRY <img src="./src/assets/images/sentry-3.svg" width="50px"/>


<p style="text-align: justify-all">Quando um programador iniciante vai lançar uma aplicação, é comum que este programe-a de forma que, a cada exceção lançada, seja enviado um e-mail para ele. No inicio, esse tipo de método funciona bem, pois a aplicação raramente começa ser um sucesso logo nos primeiros dias. Entretanto, conforme a aplicação vai adquirindo novos usuários, esse método começa a se provar não-escalável, e a caixa de entrada do e-mail começa a ficar cada vez mais cheia devido a bugs que, mesmo que pequenos, podem ser causados muitas, dezenas, centenas, talvez milhares de vezes, devido ao uso da aplicação por cada usuário.</p>

<p>Eu mesmo já cometi esse erro, por exemplo. Em um projeto antigo, fiz essa configuração em um projeto devido ao fato de na época ter achado ser uma boa opção. Oras, até mesmo o framework que usei na aplicação (que é bem popular) fornecia e indicava esta opção. Depois de algum sucesso, entretanto, a caixa de e-mail começou a ficar cada vez maior, e eu acabei me perdendo no que diz respeito a que bug era mais importante para ser resolvido.</p>

<p>Não que bugs não sejam importantes para serem resolvidos. Entretanto, é possível classificá-los em algumas categorias básicas: (ao menos em aplicações web, que é a minha especialidade)</p>

[x] No estilo - Normalmente causado por problemas de carregamento em arquivos CSS;
[x] No Javascript - Costumam acontecer por problemas em dependências ou incompatibilidades entre navegadores;
[x] No backend - Podem acontecer tanto por problemas de servidor, condições previamente não consideradas e problemas em relação aos softwares do qual o aplicativo depende;
Bugs de estilo normalmente são mais facilmente detectaveis tanto em desenvolvimento quanto logo após o release, afinal, se o CSS não carrega normalmente todo o site fica desconfigurado, e portanto você pode facilmente notar que há algo errado.

<p>Entretanto, em relação a bugs no javascript e no backend, uma falha pode as vezes não ficar tão explicita assim, tanto durante desenvolvimento quanto logo após o release. Bugs assim podem ser causados tanto porque o teste não foi realizado em diferentes navegadores quanto por falhas como queda do banco de dados, quedas de serviços de terceiros e lugares que podem ter sido afetados quando programando um sistema com suporte a eventos/hooks.</p>

<p>Logotipo do SentryPara resolver este problema de monitoramento de bugs é que existe o Sentry. O Sentry é uma aplicação web, desenvolvida em Python, que permite coletar tracebacks, agregar informações sobre bugs e organizar de maneira plena os diferentes bugs que podem acontecer em sua aplicação.</p>

<p>Funciona assim: Você instala um handler na sua aplicação (sendo que você pode usar uma das implementações oficiais fornecidas pelo Sentry), e, quando sua aplicação libera uma exceção, o traceback é coletado e enviado para o Sentry.</p>

<p>No Sentry, o traceback é analisado e comparado com outros já ocorridos anteriormente. A partir daí, ele é capaz de determinar de maneira inteligente se a exceção já ocorreu anteriormente e, caso já tenha ocorrido, simplesmente conta esta nova exceção como +1 hit na exceção.</p>

<p>Isso não significa, entretanto, que o Sentry apenas salve a primeira exceção. Como a mesma exceção pode ocorrer em diferentes ambientes, o Sentry automaticamente salva uma amostra das exceções ocorridas para te ajudar na resolução de onde e em que situação ocorre o problema.</p>

<p>Além disso, é possível configurar o Sentry para liberar notificações em diferentes situações. Você pode, por exemplo, configurá-lo para ignorar exceções novas e só enviá-las por e-mail (uma única vez por bug capturado, vale lembrar) quando elas tiverem um crescimento de mais de 100% na última hora, o que pode indicar que o bug pode ser realmente grave e portanto merece atenção especial da equipe.</p>

<p>Caso você ainda programe sua aplicação para enviar relatórios de exceção por e-mail, ou mesmo não monitora a saúde de sua aplicação, experimente o Sentry. Como aplicativo opensource, o Sentry é fácil de instalar e costuma trazer bons benefícios em relação a monitoramento no curto, médio e longo prazo. Além disso, se você não tiver paciência para configurações, é possível usá-lo como SAAS - sem configuração nos seus servidores -, também, sendo esta última opção paga mas com todo um monitoramento exclusivo para o uptime do próprio Sentry, também.</p>

<strong>Site oficial:</strong> <a target='_blank' href="https://getsentry.com/">https://getsentry.com/</a><br>
<strong>Repositório no Github:</strong> <a target='_blank' href="https://github.com/getsentry/sentry/">https://github.com/getsentry/sentry
