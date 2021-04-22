import {StyleSheet} from "react-native";

const styles = StyleSheet.create({

    
    container: {

        flexDirection: "row",
        height: 70,
        width: "100%",
      
        alignItems: "center",
        paddingLeft: 15
        
    
    },
    bigText: {
        fontSize: 16,
        fontFamily: "Roboto",
        marginLeft: 5,
        marginRight: 5,
        fontWeight: "bold"



    },
    smallText: {
        fontSize: 12,
        fontFamily: "Roboto",
        color: "#9E9E9E",
        fontWeight: "bold",
        paddingRight: 20,
        opacity: 0.8
    }
    
});

export default styles;