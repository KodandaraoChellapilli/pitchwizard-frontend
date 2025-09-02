import mongoose from 'mongoose';

export async function connectToDatabase(): Promise<void> {
  const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/brooke_finance';
  mongoose.set('strictQuery', true);
  await mongoose.connect(mongoUri, { dbName: process.env.MONGO_DB || 'brooke_finance' });
}
