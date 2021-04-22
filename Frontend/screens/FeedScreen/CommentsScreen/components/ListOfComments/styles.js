import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
       screen: {
           flex: 1,
           backgroundColor: "#000000",
           

       },
       
       textInput: {
        backgroundColor: "#ffffff", 
        width: 290, 
        borderRadius: 20, 
        height: 40, 
        paddingHorizontal: 10,
        fontSize: 16,
        fontFamily: "Roboto",
        fontWeight: "bold",
        borderWidth: 1,
        borderColor: "#d9d9d9"
    },

    headerContainer: {
        height: 80,
        backgroundColor: "#ffffff",
        borderBottomColor: "#e8e8e8",
        borderBottomWidth: 1,

        flexDirection: "row",
        alignItems: "center",
    
        paddingLeft: 12
     },
     headerButton: {
        marginTop: 15,
      

      },
      header: {
        fontSize: 25,
        fontFamily: "Roboto",
        marginTop: 12,
        marginLeft: 20,
        fontWeight: "bold"

      },


      




})


export default styles;