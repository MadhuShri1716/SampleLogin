import User from '../models/User.js';
import authRoutes from '../routes/authRoutes.js';
import jwt from 'jsonwebtoken';
const loginUser=async (req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await User.findOne({email:email});
        if(!user){
            return res.status(404).json({
                message:"User Not found"
            });
        }
        if(password!==user.password){
             return res.status(401).json({
                message:"Invalid Password"
             })
        }else{
            console.log("user logged in Successfully");
            const token=jwt.sign(
                {User_id:user.id},
                process.env.JWT_SECRET,
                {expiresIn:"1h"}
            );
             return res.status(200).json({
        message:"Login successful",
        user:user,
        token:token
    });
        }

    }catch(error){
        return res.status(500).json({
            message:"Login failed"
        })

    }
}
export default loginUser;