import dotenv from "dotenv";
dotenv.config();
// require("dotenv").config();

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import DB_connect from "./db/index.js";

DB_connect();

// ;(async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/${process.env.DB_NAME}`);
//     console.log("DB Connected successfullly");
//   } catch (error) {
//     console.error("ERROR", error);
//   }
// })();

// console.log(JSON.stringify(process.env.MONGODB_URL))
