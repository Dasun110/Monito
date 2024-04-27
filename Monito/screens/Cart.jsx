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
                            source={{ uri: "https://petsoid.com/wp-content/uploads/2019/11/shutterstock_359782805.jpg" }}
                            style={styles.image}
                        />
                        <View style={{ marginLeft: 10, gap: 5 }}>
                            <Text style={styles.productTitle}>Shiba Inu Sepia</Text>
                            <Text style={styles.productTitle2}>Shiba Inu, Large Dog</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={styles.productTitle}>$15.30    </Text>
                                <Ionicons name="remove-circle-outline" size={24} color="black" />
                                <Text style={styles.productTitle}>1   </Text>
                                <Ionicons name="add-circle-outline" size={24} color="black" />

                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image 
                            source={{ uri: "https://th.bing.com/th/id/OIP.R29dra_6jVj2y_2HMU8fqQHaFK?rs=1&pid=ImgDetMain"}}
                            style={styles.image}
                        />
                        <View style={{ marginLeft: 10, gap: 5 }}>
                            <Text style={styles.productTitle}>Alaskan Malamute</Text>
                            <Text style={styles.productTitle2}>Shiba Inu, Large Dog</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={styles.productTitle}>$12.30    </Text>
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
                        Rs .140000
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

