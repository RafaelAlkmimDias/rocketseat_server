import express from 'express';

const routes = express.Router()

 // query param
 routes.get('/',(request,response) => {
    return response.json({message: "Hello Word"});
 });

 export default routes;