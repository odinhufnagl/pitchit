import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
       container: {
        width: "80%",
        display: "flex",
        alignSelf: "center",
        alignItems: "center",
        paddingTop: 10,
        backgroundColor: "#f9f9fb",
     
        height: 35,
     
        flexDirection: "row",
        justifyContent: "space-between",
      
   
     
        

       },
       textMarked: {
        fontSize: 17,
        fontFamily: "Roboto",
        fontWeight: "bold",
        color: "#5ab9ea"




    },
    textNotMarked: {


        fontSize: 17,
        fontFamily: "Roboto",
        color: "#9e9e9e"

    }

       
       
     

})


export default styles;