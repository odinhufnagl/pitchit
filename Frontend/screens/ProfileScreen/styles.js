import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
       screen: {
           flex: 1,
           backgroundColor: "transparent",
         

       },
       headerContainer_own: {
        height: 90,
        width: "100%",
        justifyContent: "space-between",
        position: "absolute",
        flexDirection: "row",
        paddingLeft: 20,
        paddingRight: 20,
     },
     headerContainer_not_own: {
      height: 80,
      position: "absolute",
      zIndex: 10,

      flexDirection: "row",
      alignItems: "center",
  
      paddingLeft: 12
   },
     header: {
        fontSize: 25,
        fontFamily: "Roboto",
        alignSelf: "center",
        fontWeight: "bold",
        color: "#ffffff"

      },
      imageBackground: {
       
      
        position: "absolute", 
       left: 0,
       right: 0,
       bottom: 0,
       top: 0,
        opacity: 0.40,
        height: 220,
        width: "100%",
      
  
      }

      




})


export default styles;