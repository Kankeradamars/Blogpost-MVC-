import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config({path:"../../.env"});
export const generateAuthToken =(payload)=>
    {const token=jwt.sign({payload},process.env.SECRETEKEY,{expiresIn:"1d"})
    return token;
}
export const dataFronToken =(token)=>
    {
        const data=jwt.verify(token,process.env.SECRETEKEY);
    
    return data
}




    