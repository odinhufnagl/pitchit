
const CREATE_TOKEN_WITH_REFRESH_TOKEN_MUTATION = `
mutation createTokenWithRefreshToken($refreshToken: String!){
   createTokenWithRefreshToken(refreshToken: $refreshToken)
   {success, errors, payload, token}

}`


export default CREATE_TOKEN_WITH_REFRESH_TOKEN_MUTATION;
