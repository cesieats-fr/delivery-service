import express, { Router } from 'express';
import controller from '../controllers';
import { middleware } from '../middlewares';

const router: Router = express.Router();

router.use(middleware);

// Ajoute une livraison
router.post('/addDelivery', controller.addDelivery);

// Change l'état d'une livraison
router.put('/updateDeliveryState', controller.updateDeliveryState);

// Associe une livraison à un livreur
router.put('/linkDeliver', controller.linkDeliver);

// Retourne une livraison
router.get('/getDelivery/:id', controller.getDelivery);

// Retourne toutes les livraisons
router.get('/getDeliveries', controller.getDeliveries);

// Supprime une livraison
router.delete('/deleteDelivery', controller.deleteDelivery);

export default router;
