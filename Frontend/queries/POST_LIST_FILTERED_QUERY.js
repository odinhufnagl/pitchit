
const POST_LIST_FILTERED_QUERY = 

`query postListFiltered($createdBy:Int, $curUserId:Int, $start:Int!, $end:Int!){

    postListFiltered(createdBy: $createdBy, curUserId: $curUserId, start: $start, end: $end){

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

export default POST_LIST_FILTERED_QUERY;
