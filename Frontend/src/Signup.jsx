import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import './css/Signup.css';
const Signup=()=>{

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [message,setMessage]=useState('');
    const [error,setError]=useState('');
    const navigate=useNavigate();
    return(
        <div className="signup">
        <h2>Signup</h2>
        <input type="text" value={name} placeholder="Enter Your name" onChange={(e)=>{setName(e.target.value)}} />
        <input type="email"  value={email} placeholder="Enter Your Email" onChange={(e)=>{setEmail(e.target.value)}} />
        <input type="password" value={password}  placeholder="Enter your password " onChange={(e)=>{setPassword(e.target.value)}}  />
        <button onClick={()=>{
            fetch("http://localhost:5000/api/auth/signup",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    name:name,
                    email:email,
                    password:password
                })
            }).then((res)=>{
                  console.log("Status:", res.status);
                   console.log("OK:", res.ok);
                if(!res.ok){
                    throw new Error("SignUp failed");
                }
                    return res.json();
                }).then((data)=>{
                    console.log(data);
                    setMessage("User Registered successfully");
                    navigate("/login");
                    setError('');
                }).catch((error)=>{
                      console.log("Signup Error:", error);
                     setError("Failed to Create User");
                     setMessage('');
                });

                
        }}>Signup</button>
        {
            error?<p>{error}</p>:<p>{message}</p>
        }
        <h4>Already have an Account <Link to="/login">Login</Link> </h4>
        </div>
    )
}
export default Signup;