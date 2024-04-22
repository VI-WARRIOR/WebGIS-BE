import mongoose from "mongoose";

export const ConnectDB = async () => {
  try {
    const uriDB = process.env.MONGO_URI;
    if (!uriDB) {
      throw new Error("URI MongoDb must be required to connect to MongoDB");
    }
    await mongoose.connect(uriDB);
    console.log("Connected to MongoDB");
  } catch (error) {}
};
