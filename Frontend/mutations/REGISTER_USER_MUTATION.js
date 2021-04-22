
const REGISTER_USER_MUTATION = `
mutation register($username:String!,$email:String!, $password1:String!, $password2:String!){
   register(username: $username, email: $email, password1: $password1, password2: $password2)
   {token, success, errors,refreshToken}

}`


export default REGISTER_USER_MUTATION;
