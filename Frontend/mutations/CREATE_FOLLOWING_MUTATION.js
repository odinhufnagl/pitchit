
const CREATE_FOLLOWING_MUTATION = `
mutation createFollowing($user:Int!, $createdBy:Int!){
   createFollowing(input: {createdBy: $createdBy, user: $user}){following{id}}

}`


export default CREATE_FOLLOWING_MUTATION;
