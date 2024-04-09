import express, { Router } from 'express';
import controller from '../controllers';

const router: Router = express.Router();

// Ajoute une livraison
router.post('/addDelivery', controller.addDelivery);

// Change l'état d'une livraison
router.put('/updateDeliveryState', controller.updateDeliveryState);

// Associe une livraison à un livreur
router.put('/linkDelivery', controller.linkDelivery);

// Retourne une livraison
router.get('/getDelivery/:id', controller.getDelivery);

// Retourne toutes les livraisons grâce à des filtres [idClient, idDeliver, state]
router.get('/getDeliveries', controller.getDeliveries);

// Supprime une livraison
router.delete('/deleteDelivery', controller.deleteDelivery);

export default router;
