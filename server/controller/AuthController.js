import UserData from '../model/UserModel';
import{generateAuthToken} from '../Helpers/token';
import bcrypt from "bcrypt";
const users =[];
class usercontroller{
static signup =(req,res)=>{
    

const id = users.length + 1;
let {
    
    firstName,
     LastName,
     email,
     password,
     gender,
     role,
     address
}=req.body;
password= bcrypt.hashSync(password,10);

console.log(email);
const isEmailExist = users.find(user=>user.email===email);


const user = new UserData(id,firstName, LastName,email,password,gender,role,address);
users.push(user);
const data = users.find(user=>user.email===email);


if(!data){
    return res
    .status(417).json(
        {
           status:417,
           message:"signup failed",
           data
        })
}
else{
    let{password,...dataWithoutPassword}=data;
    return res.status(201).json(
        {
            status:201,
            message:"account created successfull",
            data,
            data:dataWithoutPassword
    
        }
    )
}



}
static signin =(req,res)=>{
    let { email,
        password
    }=req.body;
    const isUserExist=users.find (user=>(user.email===email));
    const isPasswordExist=bcrypt.compareSync(password,isUserExist.password);
    if(isUserExist&&isPasswordExist){
        const data=isUserExist;
        const token= generateAuthToken({
           id:data.id,
           email:data.email,
           role:data.role
        });
        let{password,...dataWithoutPassword}=data;
        
     return res.status(200).json({
        status:200,
        message:"login is  successfully",
        token:token,
        data:dataWithoutPassword
}     
     )
     
    }
    return res.status(404).json({
        status:404,
        message:"incorrect password"
    })

}
}


export default {usercontroller,users};



