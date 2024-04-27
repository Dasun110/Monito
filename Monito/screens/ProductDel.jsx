import React from "react";
import { FlatList, Text, View, ScrollView, Linking ,TouchableOpacity,Image } from "react-native";
import styles from "./productDel_sytle";// Importing styles from external file
import{Ionicons} from '@expo/vector-icons';// Importing Ionicons from Expo vector icons
import { COLORS } from "../constants";// Importing color constants
import Icon from 'react-native-vector-icons/FontAwesome6';// Importing FontAwesome6 icon

import { useRoute} from "@react-navigation/native";



// Define phone number for contact
const phoneNumber = '123456789'; // Replace with your phone number

// Function to handle contact button press
const handleContactUsPress = () => {
    Linking.openURL(`tel:${phoneNumber}`);// Open phone dialer with the provided phone number
};

// ProductDel functional component
const ProductDel = ({navigation}) => {
    const route = useRoute();

    const{item}=route.params;
    console.log(item);

  return (
     // Container for the entire component
    <View style={styles.container}> 
        <View style={styles.upperRow}>
            {/* Go back on press */}
            <TouchableOpacity onPress={()=>navigation.goBack()}>
            {/* Back button icon */}
                <Ionicons name ='chevron-back-circle' size={30}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{}}>{/* Placeholder for favorite functionality */}
                <Ionicons name ='heart' size={30} color={COLORS.PinkRed}/>{/* Heart icon */}
            </TouchableOpacity>
           
        </View>
        {/* Product image */}
        <Image 
        source={{uri:item.imageUrl}}
        style={styles.image}/>
         {/* Scrollable area for product details */}
        <ScrollView>
            <View style={styles.details}>{/* Container for product details */}
                <Text style={styles.title}>{item.title}</Text>{/* Product title */}
                <Text style={styles.price}>{item.price}</Text>{/* Product price */}
                <View style={styles.infoTitleRow}>{/* Container for information title */}
                    <Text style={styles.infoTitle}>{/* Information title */}
                        Information
                    </Text>
                    <TouchableOpacity onPress={()=>{}}>{/* Placeholder for share functionality */}
                        <Ionicons name ='share-social-outline' size={22}/>{/* Share icon */}
                    </TouchableOpacity> 
                </View>

                {/* Product details */}
                {/* Each detail is displayed with a label and value */}
                {/* For example: SKU, Gender, Age, etc. */}
                {/* Each detail is separated by a horizontal line */}

                {/* Placeholder for SKU */}
                <View style={styles.detailsDiscription}>
                    <View style={styles.column}>
                        <Text style={styles.label}>SKU</Text>
                      
                    </View>
                    <View style={styles.column}>
                    <Text style={styles.value}>:{item.sku}</Text>
                    </View>
                </View>
                <View style={{borderBottomColor:COLORS.NeutralColor_10,borderBottomWidth: 1, }}/>

                {/* Placeholder for Gender */}
                <View style={styles.detailsDiscription}>
                    <View style={styles.column}>
                        <Text style={styles.label}>Gender</Text>
                    </View>
                    <View style={styles.column}>
                    <Text style={styles.value}>:{item.gender}</Text>
                    </View>
                </View>
                <View style={{borderBottomColor:COLORS.NeutralColor_10,borderBottomWidth: 1, }}/>

                {/* Placeholder for Age */}
                <View style={styles.detailsDiscription}>
                    <View style={styles.column}>
                        <Text style={styles.label}>Age</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.value}>: {item.age}</Text>
                    </View>
                </View>
                <View style={{borderBottomColor:COLORS.NeutralColor_10,borderBottomWidth: 1, }}/>

                {/* Placeholder for Size */}
                <View style={styles.detailsDiscription}>
                    <View style={styles.column}>
                        <Text style={styles.label}>Size</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.value}>: {item.size}</Text>
                    </View>
                </View>

                <View style={{borderBottomColor:COLORS.NeutralColor_10,borderBottomWidth: 1, }}/>

                {/* Placeholder for Color */}
                <View style={styles.detailsDiscription}>
                    <View style={styles.column}>
                        <Text style={styles.label}>Color</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.value}>: {item.color}</Text>
                    </View>
                </View>

                <View style={{borderBottomColor:COLORS.NeutralColor_10,borderBottomWidth: 1, }}/>

                {/* Placeholder for Vaccinated */}
                <View style={styles.detailsDiscription}>
                    <View style={styles.column}>
                        <Text style={styles.label}>Vaccinated</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.value}>: {item.vaccinated}</Text>
                    </View>
                </View>

                <View style={{borderBottomColor:COLORS.NeutralColor_10,borderBottomWidth: 1, }}/>

                {/* Placeholder for Dewormed */}
                <View style={styles.detailsDiscription}>
                    <View style={styles.column}>
                        <Text style={styles.label}>Dewormed</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.value}>: {item.dewormed}</Text>
                    </View>
                </View>

                <View style={{borderBottomColor:COLORS.NeutralColor_10,borderBottomWidth: 1, }}/>
                
                {/* Placeholder for Cert */}
                <View style={styles.detailsDiscription}>
                    <View style={styles.column}>
                        <Text style={styles.label}>Cert</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.value}>: {item.Cert}</Text>
                    </View>
                </View>


                <View style={{borderBottomColor:COLORS.NeutralColor_10,borderBottomWidth: 1, }}/>

                 {/* Placeholder for Microchip */}
                <View style={styles.detailsDiscription}>
                    <View style={styles.column}>
                        <Text style={styles.label}>Microchip</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.value}>: {item.Microchip}</Text>
                    </View>
                </View>

                <View style={{borderBottomColor:COLORS.NeutralColor_10,borderBottomWidth: 1, }}/>

                {/* Placeholder for Location */}
                <View style={styles.detailsDiscription}>
                    <View style={styles.column}>
                        <Text style={styles.label}>Location</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.value}>: {item.location}</Text>
                    </View>
                </View>

                <View style={{borderBottomColor:COLORS.NeutralColor_10,borderBottomWidth: 1, }}/>

                {/* Placeholder for Published Date */}                
                <View style={styles.detailsDiscription}>
                    <View style={styles.column}>
                        <Text style={styles.label}>Published Date</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.value}>: {item.publishedDate}</Text>
                    </View>
                </View>

                <View style={{borderBottomColor:COLORS.NeutralColor_10,borderBottomWidth: 1, }}/>

                {/* Placeholder for Additional Information */}                
                <View style={styles.detailsDiscription}>
                    <View style={styles.column}>
                        <Text style={styles.label}>Additional Information</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.value}>: {item.additionalInformation}
                            </Text>
                    </View>
                </View>

                <View style={{borderBottomColor:COLORS.NeutralColor_10,borderBottomWidth: 1, }}/>
                
               {/* Health and identification guarantees */}
                <View style={styles.footer} >
                    <View style={styles.row1} >
                        <Icon size={24} color={COLORS.PinkRed} name="shield-dog" />
                        <Text style={[{color:COLORS.NeutralColor_80},{ textTransform: 'uppercase' },{ fontWeight: 'bold',},{fontSize: 12}]}>      100% health guarantee for pets</Text>

                    </View>
                    
                    <View style={styles.row1}>
                        <Icon size={24} color={COLORS.PinkRed} name="shield-dog" />
                        <Text style={[{color:COLORS.NeutralColor_80},{ textTransform: 'uppercase' },{ fontWeight: 'bold',},{fontSize: 12}]}>     100% guarantee of pet identification</Text>
                    </View>
                </View>

                
                
            </View>
            {/* Contact information section */}

        </ScrollView>
        <View style={styles.contactInfo}>
                <View style={styles.contactInfoRow}>
                    <TouchableOpacity onPress={handleContactUsPress}>
                        <View style={styles.contactus}>
                            <Text style={[styles.contactusText, { color: COLORS.NeutralColor_10 }]}>Contact us</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { /* handle chat press */ }}>
                        <View style={styles.chat}>
                            <Ionicons size={24} name="chatbox-ellipses-outline" style={{ padding: 5 }} />
                            <Text style={[styles.contactusText, { color: COLORS.primary }]}>Chat with Monito</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

       
    </View> 
  );
};



export default ProductDel;
