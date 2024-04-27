import { StyleSheet } from "react-native";
import { COLORS } from "../constants";



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.Linear,
        
        
    },
    container2: {
        borderRadius: 60,
        top: -70,
        left:-90,
        width: 250,
        height: 250,
        backgroundColor: COLORS.secondary,
        transform: [{ rotate: '-60deg' }] ,// Rotate the component by -19 degrees
    },
    container3:{
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        justifyContent: 'space-between',
        marginBottom: 10,
        
    },
    title:{
        fontFamily:"bold",
        fontSize:38,
        textAlign:"center",
        color:COLORS.primary
    },
    column:{
        flex: 1,
    },
    title2:{
        fontFamily:"ragular",
        fontSize:12,
        textAlign:"center",
        color:COLORS.primary
    },
    heading:{
        flex:1,
    
        marginBottom: 10,
    },
    wrapper: {
        marginTop:20,
        marginBottom: 20,
        // marginHorizontal: 20
    },
    label: {
        fontFamily: "regular", 
        fontSize: 16,
        marginBottom: 5,
        marginEnd: 5,
        color: "black"
    },
    inputWrapper:(borderColor)=>({
        borderColor:borderColor,
        backgroundColor:COLORS.NeutralColor_10,
        borderWidth:1,
        height:55,
        borderRadius:12,
        paddingHorizontal:15,
        alignItems:"center",
        flexDirection:"row"
    }),
    errorMasg:{
        color:COLORS.PinkRed,
        fontFamily:"regular",
        marginTop:5,
        marginLeft:5,
        fontSize:16
    },
    registration:{
        marginTop:20,
        textAlign:'center',
        color:COLORS.primary
    }
})

export default styles;