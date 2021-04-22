const POST_FORUM_LIST_FILTERED_QUERY = 

`query postForumListFiltered($createdBy:Int, $curUserId:Int, $start:Int!, $end:Int!){

    postForumListFiltered(createdBy: $createdBy, curUserId: $curUserId, start: $start, end: $end){

        id,
        body,
        

        createdBy{profilepicture, user{username, firstName, lastName, profile{profilepicture, bio}, id}, id},
    
        likePostForumId{id},
        commentPostForumId{content, id, createdBy{user{username}, profilepicture}},
        dateCreated
    }

}`

export default POST_FORUM_LIST_FILTERED_QUERY;
