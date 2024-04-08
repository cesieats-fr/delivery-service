import { IDelivery } from 'cesieats-service-types/delivery';
import mongoose, { Schema, model } from 'mongoose';

const deliverySchema = new Schema<IDelivery>({
  state: { type: Number, required: true },
  idClient: { type: String, required: true },
  idDeliver: { type: String, required: true },
  idOrder: { type: String, required: true },
});

export const Delivery = model<IDelivery>('Delivery', deliverySchema);

export async function connectMongoose() {
  await mongoose.connect(`mongodb://${process.env.DB_URL}/`, {
    dbName: 'cesieats-service',
    user: process.env.DB_USERNAME,
    pass: process.env.DB_PASSWORD,
  });
  console.log('Connected to MongoDB ');
}
