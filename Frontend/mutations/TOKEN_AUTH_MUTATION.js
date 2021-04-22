
const TOKEN_AUTH_MUTATION = `
mutation tokenAuth($username:String!, $password:String!){
   tokenAuth(username: $username, password: $password)
   {token, success, errors, user{id}, refreshToken}

}`


export default TOKEN_AUTH_MUTATION;
