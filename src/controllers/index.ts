import { Request, Response } from 'express';
import { IDelivery } from 'cesieats-service-types/src/delivery';
import { Delivery } from '../database';

// Ajoute une livraison
const addDelivery = async (req: Request, res: Response) => {
  try{
    const delivery: IDelivery = {
      idClient: req.body.idClient,
      idRestaurant: req.body.idRestaurant,
      idDeliver: req.body.idDeliver,
      state: 0,
      idOrder: req.body.idOrder,
    };
    const result = await Delivery.create(delivery);
    console.log('result: ' + result);
    res.status(200).json(result);
  } catch (error) {
    console.log('[DELIVERY-SERVICE] addDelivery error: ' + error);
    res.status(400).json({message: 'an unexpected error occurred'});
  }
};

// Change l'état d'une livraison
const updateDeliveryState = async (req: Request, res: Response) => {
  try {
    const update = { state: req.body.state };
    const result = await Delivery.findByIdAndUpdate(req.body.id, update);
    console.log('result after update: ' + result);
    res.status(200).json(result);
  }  catch (error) {
    console.log('[DELIVERY-SERVICE] updateDelivery error: ' + error);
    res.status(400).json({message: 'an unexpected error occurred'});
  }
};

// Associe une livraison à un livreur
const linkDelivery = async (req: Request, res: Response) => {
  try {
    const update = { idDeliver: req.body.idDeliver };
    const result = await Delivery.findByIdAndUpdate(req.body.id, update);
    console.log('result after update: ' + result);
    res.status(200).json(result);
  }  catch (error) {
    console.log('[DELIVERY-SERVICE] linkDelivery error: ' + error);
    res.status(400).json({message: 'an unexpected error occurred'});
  }
};

// Retourne une livraison
const getDelivery = async (req: Request, res: Response) => {
  try {
    const result = await Delivery.findById(req.params.id);
    console.log('result: ' + result);
    console.log('id: ' + req.params.id);
    res.status(200).json(result);
  } catch (error) {
    console.log('[DELIVERY-SERVICE] getDelivery error: ' + error);
    res.status(400).json({message: 'an unexpected error occurred'});
  }
};

// Retourne toutes les livraisons grâce à des filtres [idClient, idDeliver, state]
const getAllDeliveries = async (req: Request, res: Response) => {
  try {
    const filter = {
      idClient: (String)(req.query.client),
      idDeliver: (String)(req.query.deliver),
      idOrder: (String)(req.query.order),
      client: req.query.client,
    };
    const result = await Delivery.find(filter);
    console.log('result: ' + result);
    res.status(200).json(result);
  } catch (error) {
    console.log('[DELIVERY-SERVICE] getDeliveries error: ' + error);
    res.status(400).json({message: 'an unexpected error occurred'});
  }
};

// Supprime une livraison
const deleteDelivery = async (req: Request, res: Response) => {
  try {
    const result = await Delivery.findByIdAndDelete(req.body.id);
    console.log('result: ' + result);
    res.status(200).json(result);
  } catch (error) {
    console.log('[DELIVERY-SERVICE] deleteDelivery error: ' + error);
    res.status(400).json({message: 'an unexpected error occurred'});
  }
};

const controller = {
  addDelivery,
  updateDeliveryState,
  linkDelivery,
  getDelivery,
  getAllDeliveries,
  deleteDelivery,
};

export default controller;
