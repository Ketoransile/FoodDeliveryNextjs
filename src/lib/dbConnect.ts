// import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config();
// console.log("MONGODB_URI from processs:", process.env.MONGODB_URI);

// const MONGODB_URI = process.env.MONGODB_URI;
// console.log("MONGODB_URI:", MONGODB_URI);
// if (!MONGODB_URI) {
//   throw new Error("Please define the MONGODB_URI environment variable");
// }

// /**
//  * Cached connection for MongoDB.
//  */
// let cached = global.mongoose;

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

// async function dbConnect() {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
//       return mongoose;
//     });
//   }
//   cached.conn = await cached.promise;
//   return cached.conn;
// }

// export default dbConnect;
// import dotenv from "dotenv";

// import mongoose from "mongoose";

// const dbUrl: string = process.env.MONGODB_URI as string;

// const dbConnect = async () => {
//   try {
//     await mongoose.connect(dbUrl);
//     console.log("Connected to the db");
//   } catch (err) {
//     console.error("Failed to connect to the db", err);
//   }
// };

// export default dbConnect;
import mongoose from "mongoose";
export const runtime = "nodejs";

interface DatabaseConnections {
  FoodDb: mongoose.Connection;
}

let cached: {
  conn: DatabaseConnections | null;
  promise: Promise<DatabaseConnections> | null;
} = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const dbConnect = async () => {
  const Mongo_URI = process.env.MONGODB_URI;

  if (!Mongo_URI) {
    throw new Error("MongoDB URIs not found in environment variables");
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: true,
      minPoolSize: 2,
      maxPoolSize: 4,
      serverSelectionTimeoutMS: 30000,
      socketTimeoutMS: 60000,
      connectTimeoutMS: 10000,
      maxIdleTimeMS: 270000,
      retryWrites: true,
      retryReads: true,
    };

    cached.promise = (async () => {
      try {
        const FoodDb = await mongoose.createConnection(Mongo_URI, opts);

        FoodDb.on("error", (error) => {
          console.error("MVP DB connection error:", error);
          cached.conn = null;
          cached.promise = null;
        });

        return { FoodDb };
      } catch (error) {
        cached.promise = null;
        throw error;
      }
    })();
  }

  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (error) {
    cached.promise = null;
    throw error;
  }
};
export default dbConnect;
