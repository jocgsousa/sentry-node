// A configuração esta sendo acessada pelo variável de ambiente
// criada no arquivo .env como SENTRY_DSN
export default {
    dsn: process.env.SENTRY_DSN,
};