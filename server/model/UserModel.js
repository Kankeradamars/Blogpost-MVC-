//why this folder of usermodel.js and this class, bcs we need to keep this data(structure od data) for user to signup

class UserData{

    constructor(id, firstName, LastName,email,password,gender,role,address){
    this.id=id,
    this.firstName=firstName,
    this.LastName=LastName,
    this.email=email,
    this.password=password,
    this.gender=gender,
    this.role=role,
    this.address=address 

    }
   
    
    //constructor(id, email, password){
       // this.id=id,
        //this.email=email,
        //this.password=password

//}
}


export default UserData;





//export default UserData;