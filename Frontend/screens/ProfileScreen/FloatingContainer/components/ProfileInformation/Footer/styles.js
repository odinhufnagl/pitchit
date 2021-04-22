import {StyleSheet} from "react-native";

const styles = StyleSheet.create({

    
    
    container: {
      
        flexDirection: "row",
        height: 45,
        marginTop: 30,
        justifyContent: "center",
        backgroundColor: "#f9f9fb",
        marginBottom: 20,
        width: "100%",

        alignSelf: "center",
        alignItems: "center"
    },
    
    middleContainer: {
        padding: 5,
        flexDirection: "row",
        backgroundColor: "transparent",
        height: "100%",
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderLeftColor: "#CBCBCB",
        borderRightColor: "#CBCBCB",
        
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center"
      




    },
    leftContainer: {
        width: 100,
        flexDirection: "row",
        backgroundColor: "transparent",
        height: "100%",
        paddingRight: 5,
        
        alignItems: "center",
        justifyContent: "flex-end"
    
        
    
        


    },
    rightContainer: {
        width: 100,
        flexDirection: "row",
        backgroundColor: "transparent",
        height: "100%",
        paddingLeft: 5, 
        
        alignItems: "center",
        
    
        
    
        


    },
    bigText: {
        fontSize: 18,
        fontFamily: "Roboto",
       
        fontWeight: "bold",
        marginRight: 5,



    },
    smallText: {
        fontSize: 13,
        fontFamily: "Roboto",
        color: "#9E9E9E",
        fontWeight: "bold",
        opacity: 0.8,
    
        
    },
    followButton: {
        borderRadius: 20,
        borderWidth: 1,
        width: 75,
        height: 30,
        borderColor: "#264e68",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 15,
        marginTop: 15


    },

     





        }
);

export default styles;