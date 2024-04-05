import { Request, Response } from 'express';

const addDelivery = (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello, world!' });
};

const editDelivery = (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello, world!' });
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
  editDelivery,
  linkDelivery,
  getDeliveries,
  deleteDeliveries
};

export default controller;
