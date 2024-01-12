// // import _mongoose, { connect } from "mongoose";
// //
// // declare global {
// //   var mongoose: {
// //     promise: ReturnType<typeof connect> | null;
// //     conn: typeof _mongoose | null;
// //   };
// // }
// //
// // const MONGO_URI = process.env.MONGO_URI;
// //
// // if (!MONGO_URI) {
// //   throw new Error(
// //     "Please define the MONGODB_URI environment variable inside .env.local"
// //   );
// // }
// //
// // /**
// //  * Global is used here to maintain a cached connection across hot reloads
// //  * in development. This prevents connections from growing exponentially
// //  * during API Route usage.
// //  */
// // let cached = global.mongoose;
// //
// // if (!cached) {
// //   cached = global.mongoose = { conn: null, promise: null };
// // }
// //
// // async function dbConnect() {
// //   if (cached.conn) {
// //     return cached.conn;
// //   }
// //   if (!cached.promise) {
// //     const opts = {
// //       bufferCommands: false,
// //     };
// //     cached.promise = connect(MONGO_URI!, opts).then((mongoose) => {
// //       return mongoose;
// //     });
// //   }
// //   try {
// //     cached.conn = await cached.promise;
// //   } catch (e) {
// //     cached.promise = null;
// //     throw e;
// //   }
// //
// //   return cached.conn;
// // }
// //
// // export default dbConnect;
//
import mongoose from "mongoose";
const dbMongoConnect = async () => {
  // if (!process.env.MONGO_URI) {
  //   console.log("intru aici in functie");
  //   throw new Error("Mongo uri invalid environment");
  // }
  // const options: any = {
  //   useUnifiedTopology: true,
  //
  //   useNewUrlParser: true,
  // };
  const MONGO_URI =
    "mongodb+srv://bitwize-user:Devbitwize@stoma.wctgomt.mongodb.net/Stoma?retryWrites=true&w=majority";
  if (!mongoose.connection.readyState) {
    await mongoose.connect(MONGO_URI);
  }
};

dbMongoConnect().catch((err) => console.log(err));

export default dbMongoConnect;

// // const connectMongo = async () => mongoose.connect(MONGO_URI!);
// //
// // export default connectMongo;
