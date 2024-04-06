import express, { Router, Request, Response } from 'express';
import controller from '../controllers';

const router: Router = express.Router();

router.post('/add', controller.addDelivery);

router.post('/updateDelivery', controller.updateDelivery);

router.post('/link', controller.linkDelivery);

router.get('/getDelivery/:id', controller.getDelivery);

router.get('/getDeliveries', controller.getAllDeliveries);

router.delete('/deleteDelivery', controller.deleteDelivery);

export default router;
