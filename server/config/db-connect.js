import { connect } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;

async function dbConnect() {
  try {
    await connect(MONGODB_URI, {
      dbName: 'newAuthorsDB',
    });
    console.log('DB connection successful.');
  } catch (error) {
    console.log('DB connection unsuccessful.');
    throw error;
  }
}

export default dbConnect;
