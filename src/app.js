// Importar a configuração de acesso de variáveis ambiente do node antes disso
// Instale a lib 'dotenv' com 'npm install dotenv' ou 'yarn add dotenv'
import 'dotenv/config';
// Importamos o frimework para lidar com rotas e etc.
import express from 'express';
// Importamos todas as funções do Sentry
import * as Sentry from '@sentry/node';
// Importamos as rotas que vamos usar na aplicação
import routes from './routes';
// Importamos a configuração de acesso da api de serviços do Sentry que pode ser
// accesada nas configurações de Projects => Escolha o projeto a ser trabalhado
// => Clique na engrenagem de configuração => Depois clique na scroll view esquerda
// clique na opção 'Cliente Keys (DSN)' e depois crie um arquivo exportando esta configuração
// como a importada a baixo!
import sentryConfig from './config/sentry';


// Criamos uma classe App que será iniciada o contructor de toda o server-side 
// da aplicação
class App{
    constructor(){
        // criamos uma variável atribuindo a ela todo o poder do express
        this.server = express();
        // Atribuido ao Sentry a configuração de inicialização do sentry
        Sentry.init(sentryConfig);
        // Chamamos os middlewares funções da aplicação
        // --------------------------------------------- // 
        this.middlewares();
        this.routes();
        // --------------------------------------------- // 
    }

    middlewares(){
        // Atribuido ao servidor usar as configurações de requisições do sentry
        this.server.use(Sentry.Handlers.requestHandler());
        // Arqui atribuímos ao node que é para set utilzado a linguagem de estrutura de dados JSON
        this.server.use(express.json());
    }

    routes(){
        // Disponibilizamos ao servidor utilizar todas as rotas
        this.server.use(routes);
        // Arqui o sentry estará atento a todas as requisições e irá capturar todos
        // os erros e enviar para o dashboard do sentry caso ocorra algum erro
        this.server.use(Sentry.Handlers.errorHandler());
    }
}

export default new App().server;