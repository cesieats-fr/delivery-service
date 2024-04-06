import express, { Router, Request, Response } from 'express';
import controller from '../controllers';

const router: Router = express.Router();

router.post('/add', controller.addDelivery);

router.get('/updateDelivery/:idDelivery', controller.updateDelivery);

router.post('/link/:idDelivery&:idLivreur', controller.linkDelivery);

router.get('/getDeliveries/:idLivreur', controller.getDeliveries);

router.delete('/deleteDelivery/:idDelivery', controller.deleteDeliveries);

export default router;
