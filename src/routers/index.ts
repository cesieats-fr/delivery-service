import express, { Router, Request, Response } from 'express';
import controller from '../controllers';

const router: Router = express.Router();

// Ajoute une livraison
router.post('/addDelivery', controller.addDelivery);

// Change l'état d'une livraison
router.post('/updateDeliveryState', controller.updateDeliveryState);

// Associe une livraison à un livreur
router.post('/linkDelivery', controller.linkDelivery);

// Retourne une livraison
router.get('/getDelivery/:id', controller.getDelivery);

// Retourne toutes les livraisons grâce à des filtres [idClient, idDeliver, state]
router.get('/getDeliveries', controller.getAllDeliveries);

// Supprime une livraison
router.delete('/deleteDelivery', controller.deleteDelivery);

export default router;
