
const CREATE_POST_FORUM_MUTATION = `
mutation createPostForum($createdBy:Int!, $body:String, $title:String!){
   createPostForum(input: {createdBy: $createdBy, body: $body, title: $title}){postforum{id}}
      
}`


export default CREATE_POST_FORUM_MUTATION;
