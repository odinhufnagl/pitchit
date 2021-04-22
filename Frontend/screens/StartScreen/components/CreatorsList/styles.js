import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
      
       header: {
           fontFamily: "Roboto",
           fontSize: 23,
           color: "#12232E",
           fontWeight: "bold",
           marginLeft: 30
           
       },
       headerContainer: {
           width: "100%",
           paddingTop: 40,
           justifyContent: "space-between",
           flexDirection: "row",
           alignItems: "center",
    
       },
       rightContainer: {

        flexDirection: "row",
        alignItems: "center",
        marginRight: 32
       },
       textViewAll: {
        fontFamily: "Roboto", 
        color: "#b2b2b2", 
        paddingRight: 5, 
        fontSize: 13
       }




})


export default styles;