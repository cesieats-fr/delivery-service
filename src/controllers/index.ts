import { Request, Response } from 'express';
import { IDelivery } from 'cesieats-service-types/src/delivery';
import { Delivery } from '../database';

const addDelivery = async (req: Request, res: Response) => {
  try{
    const delivery: IDelivery = {
      idClient: req.body.idClient,
      idRestaurant: req.body.idRestaurant,
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
    console.log('[DELIVERY-SERVICE] updateDelivery error: '+ error);
    res.status(400).json({message: 'an unexpected error occurred'});
  }
};

const linkDelivery = async (req: Request, res: Response) => {
  try {
    const update = { idDeliver: req.body.idDeliver };
    const result = await Delivery.findByIdAndUpdate(req.body.id, update);
    console.log('result after update: ' + result);
    res.status(200).json(result);
  }  catch (error) {
    console.log('[DELIVERY-SERVICE] linkDelivery error: '+ error);
    res.status(400).json({message: 'an unexpected error occurred'});
  }
};

const getDelivery = async (req: Request, res: Response) => {
  try {
    const result = await Delivery.findById(req.query.id);
    console.log('result: ' + result);
    console.log('id: ' + req.query.id);
    res.status(200).json(result);
  } catch (error) {
    console.log('[DELIVERY-SERVICE] getDelivery error: '+ error);
    res.status(400).json({message: 'an unexpected error occurred'});
  }
};

const getDeliveries = async (req: Request, res: Response) => {
  try {
    const filter = {idDeliver: (String)(req.query.idDeliver)};
    const result = await Delivery.find(filter);
    console.log('result: ' + result);
    res.status(200).json(result);
  } catch (error) {
    console.log('[DELIVERY-SERVICE] getDeliveries error: '+ error);
    res.status(400).json({message: 'an unexpected error occurred'});
  }
};

const deleteDelivery = async (req: Request, res: Response) => {
  try {
    const result = await Delivery.findByIdAndDelete(req.body.id);
    console.log('result: ' + result);
    res.status(200).json(result);
  } catch (error) {
    console.log('[DELIVERY-SERVICE] deleteDelivery error: '+ error);
    res.status(400).json({message: 'an unexpected error occurred'});
  }
};

const controller = {
  addDelivery,
  updateDelivery,
  linkDelivery,
  getDelivery,
  getDeliveries,
  deleteDelivery
};

export default controller;
