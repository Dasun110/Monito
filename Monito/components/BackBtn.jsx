import React from 'react';
import { TouchableOpacity,Text,StyleSheet, ActivityIndicator } from 'react-native';

import { COLORS } from "../constants";
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook if needed

const BackBtn = ({ title, onPress,isValid,loader }) => {
    const navigation = useNavigation(); // useNavigation hook can be used to get navigation object

    return (
        <TouchableOpacity style={styles.btnStyles(isValid===false? COLORS.NeutralColor_10:COLORS.secondary)} onPress={onPress}>
            {loader==false?<Text style={styles.btnTxt}>{title}</Text>:(<ActivityIndicator/>)}
        </TouchableOpacity>
    );
}

export default BackBtn;

const styles = StyleSheet.create({
    btnTxt:{
        fontFamily:"bold",
        color:COLORS.primary,
        fontSize:18
    },
    btnStyles:(backgroundColor)=>({
        height:50,
        width:335,
        marginVertical:20,
        backgroundColor:backgroundColor,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:12
    })


})


