import { Request, Response } from 'express';
import { Delivery } from '../database';

// Ajoute une livraison
const addDelivery = async (req: Request, res: Response) => {
  try {
    const delivery = {
      idClient: req.body.idClient,
      idRestaurant: req.body.idRestaurant,
      idDeliver: req.body.idDeliver,
      state: 0,
      idOrder: req.body.idOrder,
      clientAddress: req.body.clientAddress,
      restaurantName: req.body.restaurantName,
      restaurantAddress: req.body.restaurantAddress,
      restaurantTelephone: req.body.restaurantTelephone,
    };
    const result = await Delivery.create(delivery);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: 'an unexpected error occurred', error });
  }
};

// Change l'état d'une livraison
const updateDeliveryState = async (req: Request, res: Response) => {
  try {
    const update = { state: req.body.state };
    const result = await Delivery.findByIdAndUpdate(req.body.id, update);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: 'an unexpected error occurred' });
  }
};

// Associe une livraison à un livreur
const linkDelivery = async (req: Request, res: Response) => {
  try {
    const update = { idDeliver: res.locals.account._id, state: 1 };
    const result = await Delivery.findByIdAndUpdate(req.body.id, update, { new: true });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: 'an unexpected error occurred' });
  }
};

// Retourne une livraison
const getDelivery = async (req: Request, res: Response) => {
  try {
    const result = await Delivery.findById(req.params.id);

    if (!result) return res.status(400).json({ message: 'missing parameters' });

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: 'an unexpected error occurred' });
  }
};

// Retourne toutes les livraisons grâce à des filtres [idClient, idDeliver, state]
const getDeliveries = async (req: Request, res: Response) => {
  try {
    console.log('getDeliveries');
    const result = await Delivery.find().exec();
    console.log(result);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: 'an unexpected error occurred' });
  }
};

// Supprime une livraison
const deleteDelivery = async (req: Request, res: Response) => {
  try {
    const result = await Delivery.findByIdAndDelete(req.body.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: 'an unexpected error occurred' });
  }
};

const controller = {
  addDelivery,
  updateDeliveryState,
  linkDelivery,
  getDelivery,
  getDeliveries,
  deleteDelivery,
};

export default controller;
