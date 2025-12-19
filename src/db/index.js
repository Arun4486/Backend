import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const DB_connect = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`,
    );
    console.log(`MONGODB connected !! ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log(`ERROR`, error);
  }
};

export default DB_connect;
