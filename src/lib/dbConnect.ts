import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
console.log("MONGODB_URI from processs:", process.env.MONGODB_URI);

const MONGODB_URI = process.env.MONGODB_URI;
console.log("MONGODB_URI:", MONGODB_URI);
if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

/**
 * Cached connection for MongoDB.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
