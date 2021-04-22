import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
       container: {
           width: Dimensions.get("window").width,

           height: 300,
           alignItems: "center",
           justifyContent: "center"
           

       },
       floatingContainer: {
        height: "80%",
        width: 300,
        elevation: 10,
        shadowColor: '#b2b2b2',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.25,
        shadowRadius: 17,
        borderRadius: 20,
        alignItems: "center",
        backgroundColor: "#ffffff"

       },
       image: {
           height: "100%",
           width: "100%",
           
           
           

       },
       allContainer: {
           width: "100%",
           height: 100,
     
           position: "absolute",
           bottom: 5



       },
       contentContainer: {
           width: "100%",
           height: 25,

           paddingLeft: 10



       },
       likesAndCommentsContainer: {
        width: "100%",
        height: 30,
       
        paddingLeft: 7,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 10

       }
       
       ,
       profileContainer: {
           flexDirection: "row",
           width: "100%",
           height: 40,
      
           alignItems: "center",
           paddingLeft: 10
           




       },

      




})


export default styles;