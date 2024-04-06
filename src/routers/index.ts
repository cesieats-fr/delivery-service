import express, { Router, Request, Response } from 'express';
import controller from '../controllers';

const router: Router = express.Router();

router.post('/add/:idClient&:idRestaurant', controller.addDelivery);

router.post('/updateDelivery/:id', controller.updateDelivery);

router.post('/link/:idDelivery&:idDeliver', controller.linkDelivery);

router.get('/getDelivery/:id', controller.getDelivery);

router.get('/getDeliveries/:idDeliver', controller.getDeliveries);

router.delete('/deleteDelivery/:id', controller.deleteDelivery);

export default router;
