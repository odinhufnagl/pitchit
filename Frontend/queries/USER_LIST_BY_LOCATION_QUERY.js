
const USER_LIST_BY_LOCATION_QUERY = `

query userListByLocation($curUserId: Int, $start: Int, $end: Int, $curLongitude: Float, $curLatitude: Float){
    
     userListByLocation(curUserId: $curUserId, start: $start, end: $end, curLongitude: $curLongitude, curLatitude: $curLatitude){
     id,    
     username
     profile{profilepicture, bio}
     firstName
     lastName 
     }
  
  
 }

`
export default USER_LIST_BY_LOCATION_QUERY;