import { Request, Response } from 'express';
import { IDelivery } from 'cesieats-service-types/src/delivery';
import { Delivery } from '../database';

const addDelivery = async (req: Request, res: Response) => {
  try{
    const delivery: IDelivery = {
      idClient: req.body.idClient,
      idDeliver: req.body.idDeliver,
      state: req.body.state,
      idOrder: req.body.idOrder,
    };
    const result = await Delivery.create(delivery);
    console.log('result: ' + result);
    res.status(200).json(result);
  } catch (error) {
    console.log('[DELIVERY-SERVICE] addDelivery error: '+ error);
    res.status(400).json({message: 'an unexpected error occurred'});
  }
};

const updateDelivery = async (req: Request, res: Response) => {
  try {
    const update = { state: req.body.state };
    const result = await Delivery.findByIdAndUpdate(req.body.id, update);
    console.log('result after update: ' + result);
    res.status(200).json(result);
  }  catch (error) {
    console.log('[ORDER-SERVICE] updateOrderState error: '+ error);
    res.status(400).json({message: 'an unexpected error occurred'});
  }
};

const linkDelivery = (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello, world!' });
};

const getDeliveries = (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello, world!' });
};

const deleteDeliveries = (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello, world!' });
};

const controller = {
  addDelivery,
  updateDelivery,
  linkDelivery,
  getDeliveries,
  deleteDeliveries
};

export default controller;
