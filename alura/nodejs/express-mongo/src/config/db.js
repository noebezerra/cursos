import mongoose, { mongo } from 'mongoose';

async function db() {
  mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cluster0.znzo6.mongodb.net/${process.env.MONGODB_DBNAME}?retryWrites=true&w=majority&appName=Cluster0`
  );
  return mongoose.connection;
}

export default db;
