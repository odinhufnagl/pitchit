
const POST_LIST_FOLLOWING_QUERY = 

`query postListFollowing($curUserId:Int, $start:Int!, $end:Int!){

    postListFollowing(curUserId: $curUserId, start: $start, end: $end){

        id,
        body,
        imageorvideo,
        createdBy{profilepicture, user{username, firstName, lastName, profile{profilepicture, bio}, id}, id},
        source,
        likePostId{id},
        commentPostId{content, id, createdBy{user{username}, profilepicture}},
        dateCreated
    }

}`

export default POST_LIST_FOLLOWING_QUERY;
