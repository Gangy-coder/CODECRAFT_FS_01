import express from "express";
import { register,login,logout } from "../controllers/authController.js";

const authRouter = express.Router();

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/logout', logout);
authRouter.get("/me",(req,res)=>{
    console.log(req.user);
    res.json({success:true , user : req.user})

})

export default authRouter;