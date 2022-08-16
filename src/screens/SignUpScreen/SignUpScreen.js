
import React from "react";
import { View , Text, Image  ,Button , Alert} from "react-native";
import CustomInput from "../../components/CustomInput";
import { useNavigation } from "@react-navigation/native";


const SignUpScreen = () => {
    const navigation = useNavigation();
    const onSignInPressed = () => {
        console.warn('Sign in')
        navigation.navigate('Driving')
    };

    return(
        <View>
            <View>
                <Image source={require("../../../assets/images/loginImg.jpeg")}
                style={{
                    width: 390,
                    height: 300,
                    
                }}/>
            </View>
            <View style={{
                padding : 10,
                backgroundColor: "white"
            }}>
                <Text style={{fontSize: 40, fontWeight: 'bold' , color: 'black',}}>Sign up</Text>
            </View>
            <View style={{
                backgroundColor: "white",
                color:"red",
                flexDirection: "row",
                justifyContent: 'space-evenly'
                
                

            
            }}>
                
            <View style={{
                borderWidth: 1,
                borderColor: '#1e95d0',
                borderRadius: 15,
                height: 80, 
                width : 100,
                
            }}>
               <Image source={require("../../../assets/images/google-image-icon-21.jpg")}
               style={{
                height: 50,
                width: 80,
                resizeMode: 'contain',
                marginLeft: 10,
                marginTop: 15
            }}/>
            </View>
            <View style={{
                borderWidth: 1,
                borderColor: '#1e95d0',
                borderRadius: 15,
                height: 80, 
                width : 100,
                
            }}>
                <Image source={require("../../../assets/images/fb.png")}
               style={{
                height: 40,
                width: 80,
                resizeMode: 'contain',
                marginLeft: 10,
                marginTop: 20
               }}/>
            </View>
            <View style={{
                borderWidth: 1,
                borderColor: '#1e95d0',
                borderRadius: 15,
                height: 80, 
                width : 100,
                
            }}>
             <Image source={require("../../../assets/images/ios.png")}
               style={{
                
                height: 40,
                width: 80,
                resizeMode: 'contain',
                marginLeft: 10,
                marginTop: 20
            }}/>
            </View>
            </View>
            <CustomInput/>
            <View style= {{
                height: 200,
                marginLeft: 10,
                marginRight : 10,
                marginTop : 5,
                backgroundColor: 'white'
                
            }}>
                
            <Button
                
                title="Continue"
                onPress={onSignInPressed}
                color='#1e95d0'
                
             />
            </View>
            
        </View>

    )
}

export default SignUpScreen;