import React, { useState } from 'react';
import { ScrollView, View, SafeAreaView,TextInput ,Text,TouchableOpacity,Alert} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import styles from './Loging_style';
import { BackBtn } from '../components';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { COLORS } from '../constants';

const validationSchema= Yup.object().shape({
    password: Yup.string()
      .min(8, 'Password must be at 8 character')
      .required('Required'),
    confirmpassword: Yup.string()
        .min(8, 'Password must be at 8 character')
        .required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    username: Yup.string().min(3,'Provide a valid username').required('Required'),

  });

const SingUp = ({ navigation }) => {
    const [loader, setLoader] = useState(false);
    const [obsecureText, setObsecureText] = useState(false);

    

    
    const InvalidForm=()=>{
        Alert.alert(
            "Invalid Form",
            "Please provide all required fields",
            [
                {
                    text:"Cancel",onPress:()=>{}
                },
                {
                    text:"Continue",onPress:()=>{}
                },
                {defaultIndex:1}

            ]
        )
    }

    return (
        <View  style={styles.container}>
            <View style={styles.container2}>
               
               </View>
            <ScrollView>
            <SafeAreaView style={[{ marginHorizontal: 20, height:'100%' }]}>
                <View style={styles.container3}>
                    <View style={styles.column}>
                        <Text style={styles.title} >Monito</Text>
                        <Text style={styles.title2} >Pat for Best</Text>
                    </View>
                </View>
                <View style={styles.heading}>
                        <Text style={[styles.title, { fontSize: 24 },{ textAlign:"flex-start"}]}>Log into Monito!</Text>
                        <Text style={[styles.title2, { fontSize: 14 },{ textAlign:"flex-start"}]}>Sign in here to continue!</Text>

                </View>
                <Formik
                initialValues={{email:"",password:"",confirmpassword:"",username:""}}
                validationSchema={validationSchema}
                onSubmit={(values)=>console.log(values)}>
                    {({ handleChange, handleBlur, handleSubmit, values,errors,isValid,setFieldTouched ,touched}) => (
                    <View>

                        <View style={styles.wrapper}>
                            <Text style={styles.label}>Username</Text>
                            <View style={styles.inputWrapper(touched.username? COLORS.primary:COLORS.Linear)}>
                            <Ionicons name='person-circle-outline' size={20} style={{marginRight: 10}} />
                                <TextInput placeholder='Enter username' onFocus={()=>{setFieldTouched('username')}} 
                                onBlur={()=>{setFieldTouched('username','')}} value={values.username} onChangeText={handleChange('username')} autoCapitalize='none' autoCorrect={false} style={{flex:1}}/>
                            </View>
                            {touched.username && errors.username &&(
                                <Text style={styles.errorMasg}>
                                    {errors.username}
                                </Text>
                            )}
                        </View>

                        <View style={styles.wrapper}>
                            <Text style={styles.label}>Email Address</Text>
                            <View style={styles.inputWrapper(touched.email? COLORS.primary:COLORS.Linear)}>
                            <Ionicons name='mail-outline' size={20} style={{marginRight: 10}} />
                                <TextInput placeholder='Enter email' onFocus={()=>{setFieldTouched('email')}} 
                                onBlur={()=>{setFieldTouched('email','')}} value={values.email} onChangeText={handleChange('email')} autoCapitalize='none' autoCorrect={false} style={{flex:1}}/>
                            </View>
                            {touched.email && errors.email &&(
                                <Text style={styles.errorMasg}>
                                    {errors.email}
                                </Text>
                            )}
                        </View>
                        <View style={styles.wrapper}>
                            <Text style={styles.label}>Password</Text>
                            <View style={styles.inputWrapper(touched.password? COLORS.primary:COLORS.Linear)}>
                            <Ionicons name='lock-closed-outline' size={20} style={{marginRight: 10}} />
                                <TextInput secureTextEntry={obsecureText} placeholder='password' onFocus={()=>{setFieldTouched('password')}} 
                                onBlur={()=>{setFieldTouched('password','')}} value={values.password} onChangeText={handleChange('password')} autoCapitalize='none' autoCorrect={false} style={{flex:1}}/>
                                <TouchableOpacity onPress={()=>{setObsecureText(!obsecureText)}}>
                                    <Ionicons name={obsecureText? 'eye-outline':'eye-off-outline'} size={20}/>

                                </TouchableOpacity>
                            </View>
                            {touched.password && errors.password &&(
                                <Text style={styles.errorMasg}>
                                    {errors.password}
                                </Text>
                            )}
                        </View>


                        <View style={styles.wrapper}>
                            <Text style={styles.label}>Confirm Password</Text>
                            <View style={styles.inputWrapper(touched.confirmpassword? COLORS.primary:COLORS.Linear)}>
                            <Ionicons name='lock-closed-outline' size={20} style={{marginRight: 10}} />
                                <TextInput secureTextEntry={obsecureText} placeholder='confirmpassword' onFocus={()=>{setFieldTouched('confirmpassword')}} 
                                onBlur={()=>{setFieldTouched('confirmpassword','')}} value={values.confirmpassword} onChangeText={handleChange('confirmpassword')} autoCapitalize='none' autoCorrect={false} style={{flex:1}}/>
                                <TouchableOpacity onPress={()=>{setObsecureText(!obsecureText)}}>
                                    <Ionicons name={obsecureText? 'eye-outline':'eye-off-outline'} size={20}/>

                                </TouchableOpacity>
                            </View>
                            {touched.confirmpassword && errors.confirmpassword &&(
                                <Text style={styles.errorMasg}>
                                    {errors.confirmpassword}
                                </Text>
                            )}
                        </View>
                            <BackBtn title={"Sign in"} onPress={isValid? handleSubmit:InvalidForm} isValid={isValid}/>
                            <Text style={styles.registration} onPress={()=>{navigation.navigate('')}}>Register</Text>
                        </View>
                        )}
                        

                
                </Formik>



            
            </SafeAreaView>
            </ScrollView>
        </View>
    
     
    );
}

export default SingUp;



