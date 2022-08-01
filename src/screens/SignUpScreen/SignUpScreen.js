
import React from "react";
import { View , Text, Image  ,Button , Alert} from "react-native";
import CustomInput from "../../components/CustomInput";


const SignUpScreen = () => {
    return(
        <View>
            <View>
                <Image source={require("../../../assets/images/Logo.jpeg")}
                style={{
                    width: '100%',
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
                
                
               <Image source={require("../../../assets/images/google-image-icon-21.jpg")}
               style={{
                height: 70,
                width: 70,
                padding: 10,
                marginLeft: 20,
                marginTop: 20,
            }}/>
             <Image source={require("../../../assets/images/facebook.jpg")}
               style={{
                height: 50,
                width: 50,
                padding: 10,
                marginLeft: 20,
                marginTop: 30,
            }}/>
             <Image source={require("../../../assets/images/apple-21.jpg")}
               style={{
                height: 80,
                width: 80,
                padding: 10,
                marginLeft: 20,
                marginTop: 15,
            }}/>
            </View>
            <CustomInput/>
            <View style= {{
                height: 200,
                marginLeft: 10,
                marginRight : 10,
                marginTop : 10,
                backgroundColor: 'white'
                
            }}>
            <Button
                
                title="Continue"
                onPress={() => Alert.alert('Simple Button pressed')}
                color='#1e95d0'
                
             />
            </View>
            
        </View>

    )
}

export default SignUpScreen;