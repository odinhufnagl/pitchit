
const VERIFY_TOKEN_MUTATION = `
mutation verifyToken($token: String!){
   verifyToken(token: $token)
   {success, errors, payload}

}`


export default VERIFY_TOKEN_MUTATION;
