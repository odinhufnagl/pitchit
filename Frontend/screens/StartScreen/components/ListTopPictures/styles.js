import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
       containerUnderList: {
           width: "100%",

           height: 4,
           alignItems: "center",
           flexDirection: "row",
           justifyContent: "space-between",
           paddingLeft: 35,
           paddingRight: 35,
    
      
       },
       smallViewNotMarked: {
           height: 4, 
           width: 40, 
           borderRadius: 5, 
           backgroundColor: "#eee9e9"

       },
       smallViewMarked: {
        height: 4, 
        width: 40, 
        borderRadius: 5, 
        backgroundColor: "#000000"



       }
       

    })

export default styles;