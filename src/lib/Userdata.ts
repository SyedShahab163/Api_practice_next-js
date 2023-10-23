type Userdata  = {
    id : String,
    Name : String,
    age : Number ,
    // Detial : String | Number
}
  
 const UserDetial: Userdata[ ] = [{Name:"shahab",id:"1",age:78}]
 export  const getalluser = () => UserDetial;

export const postuser = (Userdata:Userdata) =>  UserDetial.push(Userdata) 
export const getUserByid = (id:String)=>{
    const userDate = UserDetial.find((item)=>item.id=== id );
    }
    export const userUpdateById = (id :string,name:string,age:number)=>{
        const  userDetial = UserDetial.find((item)=>item.id === id);
        if(userDetial){
            userDetial.id = id;
             userDetial.Name = name;
             userDetial.age = age;
    
        }else{
            throw new Error("User Detial is not  found")
        }
    }
    
    
