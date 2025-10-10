import mongoose from "mongoose";
const connectDB= async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connected!")
  } catch (error) {
    console.log("DB connection failed\n", error);
    process.exit();
  }
}

export default connectDB;