import { View,Text,ScrollView,Image, Button,TouchableOpacity } from "react-native";
import React from "react";
import styles from "./cart_style";
import { useRoute} from "@react-navigation/native";
import{Ionicons} from '@expo/vector-icons';// Importing Ionicons from Expo vector icons

const ProductDel = ({navigation}) => {
    const route = useRoute();

    const{item}=route.params;
    console.log(item);
}


const Cart=()=>{
    return(
        <View style={styles.container}>
            <View style={styles.cart}>
                <Text style={styles.title}>
                    Cart
                </Text>
                <ScrollView style={{ marginTop: 50 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center',marginBottom:9 }}>
                        <Image 
                            source={{ uri: "https://th.bing.com/th/id/R.b1344184133fe37680f9536f5e69e360?rik=7YukFBt8TGXb7g&riu=http%3a%2f%2fi.huffpost.com%2fgen%2f1198371%2fthumbs%2fo-SHORTS-570.jpg%3f1&ehk=gDZINWI6nzJiRQfcSb91%2bw3HnXrF%2f5IhB0bRFbJ6ITg%3d&risl=&pid=ImgRaw&r=0" }}
                            style={styles.image}
                        />
                        <View style={{ marginLeft: 10, gap: 5 }}>
                            <Text style={styles.productTitle}>Short</Text>
                            <Text style={styles.productTitle2}>Red Short</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={styles.productTitle}>Rs.1500    </Text>
                                <Ionicons name="remove-circle-outline" size={24} color="black" />
                                <Text style={styles.productTitle}>1   </Text>
                                <Ionicons name="add-circle-outline" size={24} color="black" />

                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image 
                            source={{ uri: "https://images.squarespace-cdn.com/content/v1/5c7e4843797f74590fa26ad8/1551886580105-TT57AINOL06SMMMFLLXG/ke17ZwdGBToddI8pDm48kDcfM4wjscSdsbp7HqcZX0IUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2kxJ_yMf_wxGZStbloE0XMQLlMRHxq5anmPOMNXBqPywKMshLAGzx4R3EDFOm1kBS/Shirt_Solo.png"}}
                            style={styles.image}
                        />
                        <View style={{ marginLeft: 10, gap: 5 }}>
                            <Text style={styles.productTitle}>Black Shrit</Text>
                            <Text style={styles.productTitle2}>Black Shrit</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={styles.productTitle}>Rs.1775    </Text>
                                <Ionicons name="remove-circle-outline" size={24} color="black" />
                                <Text style={styles.productTitle}>2   </Text>
                                <Ionicons name="add-circle-outline" size={24} color="black" />

                            </View>
                        </View>


                    </View>
                </ScrollView>
                <View style={styles.total}>
                    <Text style={styles.totaltext}>
                        Total
                    </Text>
                    <Text style={styles.totaltext}>
                        Rs .3275
                    </Text>
                </View>
                <TouchableOpacity >
                    <Text style={styles.Button}>Checkout</Text>
                </TouchableOpacity>

               




            </View>

        </View>
    )
}

export default Cart;

