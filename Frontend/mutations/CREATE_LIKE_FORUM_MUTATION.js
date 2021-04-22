
const CREATE_LIKE_FORUM_MUTATION = `
  mutation createLikeForum($postForumId:Int!, $createdBy:Int!){
     createLikeForum(input: {postForumId: $postForumId, createdBy: $createdBy}){likeforum{id}}

}`


export default CREATE_LIKE_FORUM_MUTATION;
