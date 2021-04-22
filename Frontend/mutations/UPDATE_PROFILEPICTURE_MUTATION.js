
const UPDATE_PROFILEPICTURE_MUTATION = `
mutation updateProfilepicture($id:Int!, $profilepicture:String!){
   updateProfilepicture(id: $id, profilepicture: $profilepicture){user{id}}

}`


export default UPDATE_PROFILEPICTURE_MUTATION;
