
const FOLLOWINGS_LIST_QUERY = 

`query followingsList($createdBy:Int, $user:Int){

    followingsList(createdBy:$createdBy, user:$user){
   
        user{id, profilepicture, user{
            id,    
     username
     profile{profilepicture, bio, locationLongitude, locationLatitude}
     firstName
     lastName 
        }}
        

       
    }

}`  

export default FOLLOWINGS_LIST_QUERY;
