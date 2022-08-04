import React from 'react';
import { View , Text , Image , Alert} from 'react-native';
import { CheckBox , Icon , Input , Switch , Button} from 'react-native-elements';
import {useEffect , useState} from 'react';
import { color } from 'react-native-reanimated';

const Carpool2 = () => {

    const [checked, setChecked] = useState(false);
return(
    <View style={{
        backgroundColor: 'white'
    }}>
        <View style={{
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            padding: 10,
            marginLeft: 10,
            marginRight: 10,
            marginTop: 10,
        }}>
            <Text style={{fontSize: 30, fontWeight: '400' ,color: 'black'}}>Add Carpool</Text>
            <Text style={{fontSize: 15}}>Select if you want Carpool </Text>
            
        </View>
        <View style={{
            flexDirection: 'row'
        }}>
            <Image source={require("../../../assets/images/Rectangle35.png")} 
            style={{
            width: 60,
            height: 60,
            marginTop: 30,
            marginLeft: 40,
            }}/>
            <View style={{
                marginTop: 35,
                marginLeft: 40,
            }}>
                <Text style={{fontSize: 20, fontWeight: '400' ,color: 'black'}}>Carpool</Text>
                <Text>4 seats available</Text>
            </View>
            <View style={{
                marginTop: 35,
                marginLeft: 60,
            }}>
            <Switch
            value={checked}
            onValueChange={(value) => setChecked(value)}
            />
            </View>
            
        </View>
        <View style={{
            marginTop: 20,
            marginLeft: 60,
        }}>
            <Text style={{fontSize: 15}}>Select the number of seats<Text style={{fontSize :15 ,color :'#ff7a87'}}> ( 1 selected )</Text></Text>
        </View>
        <View style={{
            marginTop: 20,
            marginLeft: 5,
            flexDirection: 'row',
            justifyContent: 'space-evenly'

        }}>
        <Image source={require("../../../assets/images/seat.png")}
        style={{
            height: 60,
            width: 60,
            
        }} />
        <Image source={require("../../../assets/images/seat.png")}
        style={{
            height: 60,
            width: 60,
            
        }} />
        <Image source={require("../../../assets/images/seat.png")}
        style={{
            height: 60,
            width: 60,
            
        }} />
        <Image source={require("../../../assets/images/seat.png")}
        style={{
            height: 60,
            width: 60,
            
        }} />
        </View>
        <View>
        <Button
            title="Start"
            loading={false}
            loadingProps={{ size: 'small', color: 'white' }}
            buttonStyle={{
                backgroundColor: '#1e95d0',
                borderRadius: 8,
            }}
            titleStyle={{  fontSize: 25 , marginRight: 100 }}
            containerStyle={{
                marginHorizontal: 50,
                height: 100,
                width: 300,
                marginVertical: 10,
                marginTop: 30,
            }}
            onPress={() => Alert.alert('Simple Button pressed')}
            icon={{
                name: 'long-arrow-right',
                type: 'font-awesome',
                size: 30,
                color: 'white',
              }}
            iconRight 
            iconContainerStyle={{ marginLeft: 40, }} 
            
        />
        </View>

        
        
    </View>
    
    )
}

export default Carpool2