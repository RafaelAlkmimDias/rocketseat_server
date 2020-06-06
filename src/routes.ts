import express from 'express';
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';


const routes = express.Router();

const pointsController = new PointsController();
const itemsController = new ItemsController();

 // query param
 routes.get('/',(request,response) => {
    return response.json({message: "Hello Word"});
 });

routes.get('/items', itemsController.index);

routes.post('/points', pointsController.create);
routes.get('/points/:id', pointsController.show);
routes.get('/points/', pointsController.index);

 export default routes;