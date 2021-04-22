import React from "react";
import { TouchableOpacity, Text, View} from "react-native";
import styles from "./styles";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useNavigation, NavigationActions, useRoute } from "@react-navigation/native";



const Header = () => {
    const navigation = useNavigation();


            return (
            <View style={styles.headerContainer}>

            <TouchableOpacity onPress={navigation.goBack} style={styles.headerButton}>

            <FeatherIcon name={"arrow-left"} size={28}></FeatherIcon>
            </TouchableOpacity>
            <Text style={styles.header}>Comments</Text>
            </View>
            );

}

export default Header;
