
const DELETE_LIKE_MUTATION = `
mutation deleteLike($postId:Int!, $createdBy:Int!){
   deleteLike(input: {postId: $postId, createdBy: $createdBy}){like{id}}
      
}`

export default DELETE_LIKE_MUTATION;
