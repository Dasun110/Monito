import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";



const styles = StyleSheet.create({

    card:{
        width:170,
        height:350,
        marginEnd:22,
        borderRadius:12,
        backgroundColor:COLORS.redrr,
        padding:10,
     
        
    },
    imageContainer:{
        flex:1,
        width:160,
        borderRadius:10,
        overflow:"hidden",
        marginTop:6
        
    },
    image:{
        aspectRatio:1,
        resizeMode:'cover' 
    },
    
    details:{
        paddingTop: 2,
        paddingRight: 4,
        marginBottom:30,
        paddingLeft: 4
    },
    title:{
        fontFamily:"bold",
        fontSize:26,
        color:COLORS.NeutralColor_100
    },
    gen:{
        fontFamily:"regular",
        fontSize:18,
        color:COLORS.NeutralColor_60
    },
    age:{
        fontFamily:"regular",
        fontSize:18,
        color:COLORS.NeutralColor_60
    },
    price:{
        fontFamily:"medium",
        fontSize:28,
        color:COLORS.TextColor3
    },
    addBtn:{
        width:149,
        height:28,
        borderRadius:17,
        paddingTop: 4,
        paddingRight: 24, 
        // paddingBottom:40,
        paddingLeft: 24,
        alignItems:"center",
        backgroundColor:COLORS.Linear2,
    },
    btnText:{
        fontFamily:"regular",
        textAlign:"center"
    }
})

export default styles;