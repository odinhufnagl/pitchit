const UPDATE_LOCATION_MUTATION = `
mutation updateLocation($id:Int!, $locationLongitude:Float!, $locationLatitude:Float!){
   updateLocation(id: $id, locationLongitude: $locationLongitude, locationLatitude: $locationLatitude){user{id}}

}`


export default UPDATE_LOCATION_MUTATION;
