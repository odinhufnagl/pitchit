
const POST_LIKES_LIST_QUERY = 

`query postLikesList($postId:Int, $createdBy: Int, $userLiked: Int){

    postLikesList(postId: $postId, createdBy: $createdBy, userLiked: $userLiked){

        postId{id}
    }

}`

export default POST_LIKES_LIST_QUERY;
