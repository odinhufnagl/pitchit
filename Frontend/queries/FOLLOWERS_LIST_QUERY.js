
const FOLLOWERS_LIST_QUERY = 

`query followingsList($createdBy:Int, $user:Int){

    followingsList(createdBy:$createdBy, user:$user){
        
        createdBy{id, profilepicture, user{
            id,    
     username
     profile{profilepicture, bio, locationLongitude, locationLatitude}
     firstName
     lastName 
        }}
        
        

       
    }

}`  

export default FOLLOWERS_LIST_QUERY;
