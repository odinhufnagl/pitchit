
const CREATE_POST_MUTATION = `
mutation createPost($imageorvideo:String!, $createdBy:Int!, $body:String, $source:String!){
   createPost(input: {imageorvideo: $imageorvideo, createdBy: $createdBy, body: $body, source: $source}){post{id}}
      
}`


export default CREATE_POST_MUTATION;
