

const POST_LIST_QUERY = 

    `query postList{

        postList{

            id,
            body,
            imageorvideo,
            createdBy{profilepicture, user{username, firstName, lastName, profile{profilepicture, bio}, id}, id}
            source
            likePostId{id}
            commentPostId{content, id, createdBy{user{username}, profilepicture}}
            dateCreated
           
        }

    }`

export default POST_LIST_QUERY;
