
const CREATE_COMMENT_FORUM_MUTATION = `
mutation createCommentForum($postForumId:Int!, $createdBy:Int!, $content:String!){
   createCommentForum(input: {postForumId: $postForumId, createdBy: $createdBy, content: $content}){commentforum{content, createdBy{user{username}}}}

}`


export default CREATE_COMMENT_FORUM_MUTATION;
