import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config()
const mongodbConnectionString = process.env.MONGODBCONNECTIONSTRING
const collectionDB=async()=>{
    try {
       console.log("connection String", mongodbConnectionString); 
       const connection = await mongoose.connect(mongodbConnectionString);
       console.log('DB connection');
       return connection;
    } catch (error) {
      console.log("error",error);  
    }

}
export default collectionDB