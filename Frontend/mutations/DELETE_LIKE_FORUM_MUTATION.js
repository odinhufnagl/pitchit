
const DELETE_LIKE_FORUM_MUTATION = `
mutation deleteLikeForum($postForumId:Int!, $createdBy:Int!){
   deleteLikeForum(input: {postForumId: $postForumId, createdBy: $createdBy}){likeforum{id}}
      
}`

export default DELETE_LIKE_FORUM_MUTATION;
