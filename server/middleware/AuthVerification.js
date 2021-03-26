import{dataFromToken}  from '../Helpers/token.js';
import usercontroller from '../controller/AuthController';
 export const verifyAuth=(req,res,next)=>{
     const token=req.header("x-auth-token");


     if(!token){
        return res.status(404).json(
            {
               status:404,
               message:"no token found",
               
            })
    }
    try {
       
        const user=dataFromToken(token).payload;
     const users=usercontroller.users;
     const data= users.find(u=>u.email=== user.email);
     
     if (!data){
         return res.status(404).json({
         status:404,
         message: "you are not a user"
         })
        
        
}
     req.body.userid=data.id
     return next();   
    } catch(e){
        return res.status(404).json({
            status:404,
            message: "token is not valid"
            })
    }
     
     
 }