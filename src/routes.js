import { Router } from 'express';

const routes = new Router();


routes.get('/', (request, response)=>{
    return response.json({messege:'Olá mundo!'})
});

export default routes;