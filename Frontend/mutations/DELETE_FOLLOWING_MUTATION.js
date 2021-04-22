
const DELETE_FOLLOWING_MUTATION = `
mutation deleteFollowing($createdBy:Int!, $user:Int!){
   deleteFollowing(input: {createdBy: $createdBy, user: $user}){following{id}}

}`


export default DELETE_FOLLOWING_MUTATION;
