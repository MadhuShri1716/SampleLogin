import express from "express";
import cors from "cors";
import ConnectDB from "./config/db.js";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
dotenv.config();

const app=express();
app.use(cors());
app.use(express.json());
ConnectDB();
app.use("/api/auth/",authRoutes);
app.get("/",(req,res)=>{
    res.send("Backend server is running");
})
app.listen(5000,()=>{
    console.log("server is running on port 5000");
})