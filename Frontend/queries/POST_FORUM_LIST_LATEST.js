

const POST_FORUM_LIST_LATEST_QUERY = 

`query postForumListLatest($start:Int!, $end:Int!){

    postForumListLatest(start: $start, end: $end){

        id,
        body,
        createdBy{profilepicture, user{username, firstName, lastName, profile{profilepicture, bio}, id}, id}
        likePostForumId{id}
        commentPostForumId{content, id, createdBy{user{username}, profilepicture}}
        title, 
        dateCreated
       
    }

}`

export default POST_FORUM_LIST_LATEST_QUERY;
