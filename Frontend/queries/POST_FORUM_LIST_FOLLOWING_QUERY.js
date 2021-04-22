
const POST_FORUM_LIST_FOLLOWING_QUERY = 

`query postForumListFollowing($curUserId:Int, $start:Int!, $end:Int!){

    postForumListFollowing(curUserId: $curUserId, start: $start, end: $end){

        
        id,
        body,
        createdBy{profilepicture, user{username, firstName, lastName, profile{profilepicture, bio}, id}, id},
        likePostForumId{id},
        commentPostForumId{content, id, createdBy{user{username}, profilepicture}},
        dateCreated
    }

}`

export default POST_FORUM_LIST_FOLLOWING_QUERY;
