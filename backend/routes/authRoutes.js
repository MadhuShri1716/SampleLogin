import express from "express";
import User from "../models/User.js";
import loginUser from "../controllers/authController.js";

const router=express.Router();
router.post("/signup",async(req,res)=>{
    try{
  const {name,email,password}=req.body;
  const user=await User.create({
    name,email,password
  });
   console.log("User created");
  res.status(201).json({message:"User created Successfully",user:user});
}catch(err){
    res.status(500).json({message:"Failed to Create User"});
}


});
router.post('/login',loginUser);
export default router;