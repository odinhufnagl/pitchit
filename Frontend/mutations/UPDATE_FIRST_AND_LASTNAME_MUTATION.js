
const UPDATE_FIRST_AND_LASTNAME_MUTATION = `
mutation updateFirstAndLastname($id:Int!, $firstname:String!, $lastname:String!){
        updateFirstAndLastname(id: $id, firstname: $firstname, lastname: $lastname){user{id}}

}`


export default UPDATE_FIRST_AND_LASTNAME_MUTATION;
