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
  console.log(`connexion: mongodb://${process.env.DB_URL}/`);
  console.log(`user: ${process.env.DB_USERNAME}`);
  console.log(`password: ${process.env.DB_PASSWORD}`);
  mongoose
    .connect(`mongodb://${process.env.DB_URL}/`, {
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