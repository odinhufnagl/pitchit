


const USER_QUERY = `

query user($id:Int, $username:String){
    user(id: $id, username: $username){
     id,    
     username
     profile{profilepicture, bio, locationLongitude, locationLatitude}
     firstName
     lastName 
     
   }
  
 }

`
export default USER_QUERY;