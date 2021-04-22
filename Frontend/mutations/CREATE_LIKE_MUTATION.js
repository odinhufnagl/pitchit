
const CREATE_LIKE_MUTATION = `
  mutation createLike($postId:Int!, $createdBy:Int!){
     createLike(input: {postId: $postId, createdBy: $createdBy}){like{id}}
        

       


}`


export default CREATE_LIKE_MUTATION;
