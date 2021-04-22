
const CREATE_COMMENT_MUTATION = `
mutation createComment($postId:Int!, $createdBy:Int!, $content:String!){
   createComment(input: {postId: $postId, createdBy: $createdBy, content: $content}){comment{content, createdBy{user{username}}}}

}`


export default CREATE_COMMENT_MUTATION;
