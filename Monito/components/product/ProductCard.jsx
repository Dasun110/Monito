import React from "react";
import { TouchableOpacity ,Text, View,Image } from "react-native";
import styles from "./ProductCard_style";
import { useNavigation } from "@react-navigation/native";


const ProductCard = ({item}) =>{
   
    const navigation=useNavigation();

    return(
          
        <TouchableOpacity onPress={()=>navigation.navigate("ProductDel",{item})}>
            <View style={styles.card}>
                <View style={styles.imageContainer}>
                    <Image
                    source={{uri:item.imageUrl,}}
                    style={styles.image}
                    />
                </View>
                <View style={styles.details}>
                    <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
                    <Text style={styles.gen}>{item.gender}</Text>
                    <Text style={styles.age}>{item.age}</Text>
                    <Text style={styles.price}>{item.price}</Text>

                </View> 
                <TouchableOpacity style={styles.addBtn}>
                    <Text style={styles.btnText}>ADD TO CART</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
           
 
    )
    
}

export default ProductCard ;