import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
       container: {
           width: 130,
           height: 150,
           alignItems: "center",
           marginTop: 20,
           marginBottom: 30,
           backgroundColor: "#f3f3f3",
           marginRight: 10,
           marginLeft: 10,
           borderRadius: 15,
          

        
       },
       image: {
        width: 50, 
        height: 50, 
        borderRadius: 30, 
        marginTop: 20, 
        alignSelf: "center"

       },
       textName: {
        marginTop: 17, alignSelf: "center", fontSize: 14, fontFamily: "Roboto", fontWeight: "bold", color: "#000000"
       },
       textUserName: {
        marginTop: 3, 
        alignSelf: "center", 
        color: "#ABB1B5", 
        fontFamily: "Roboto", 
        fontSize: 14
       }

      
 



})


export default styles;