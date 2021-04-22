
const USER_LIST_QUERY = `

query userList($curUserId: Int, $start: Int, $end: Int, $searchWord: String){
    
     userList(curUserId: $curUserId, start: $start, end: $end, searchWord: $searchWord){
     id,    
     username
     profile{profilepicture, bio}
     firstName
     lastName 
     }
  
  
 }

`
export default USER_LIST_QUERY;