
const UPDATE_BIO_MUTATION = `
mutation updateBio($id:Int!, $bio:String!){
   updateBio(id: $id, bio: $bio){user{id}}

}`


export default UPDATE_BIO_MUTATION;
