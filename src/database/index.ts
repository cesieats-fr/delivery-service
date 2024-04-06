import { IDelivery } from 'cesieats-service-types/delivery';
import mongoose, { Schema, model } from 'mongoose';

const deliverySchema = new Schema<IDelivery>({
  state: { type: Number, required: true },
  idClient: { type: String, required: true },
  idDeliver: { type: String, required: true },
  idOrder: { type: String, required: true },
});

export const Delivery = model<IDelivery>('Delivery', deliverySchema);

export const connectMongoose = () => {
  mongoose
    .connect('mongodb://192.168.2.30:32000/', {
      dbName: 'cesieats-service',
      user: process.env.DB_USERNAME,
      pass: process.env.DB_PASSWORD,
    })
    .then(() => {
      console.log('Connected to the database');
    })
    .catch((err) => {
      console.log(err);
    });
};