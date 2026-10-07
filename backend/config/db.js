import mongoose from "mongoose";

const ConnectDB= async()=>{
  try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongodb Connceted");
  }catch(err){
       console.log("Mongodb Connection Failed");
       console.log(err.message);
  }
}
export default ConnectDB;