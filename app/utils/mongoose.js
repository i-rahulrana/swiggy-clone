import mongoose from "mongoose";

let isConnected = false;

const connectToDB = async () => {
  //mongoose.set("strictQuery", true);
  if (!process.env.MONGODB_URL) return console.error("MONGODB_URL not found.");
  if (isConnected) return;
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    isConnected = true;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("connection failed with MongoDB");
  }
};

export default connectToDB;
