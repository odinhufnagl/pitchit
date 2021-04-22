import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
       container: {
        width: "100%",
        alignItems: "center",
        marginTop: 20,
        height: 55,
        backgroundColor: "transparent",
     
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 50,
        paddingRight: 50,
        paddingBottom: 45
     
        

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