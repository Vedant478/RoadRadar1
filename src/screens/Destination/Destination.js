import React from 'react';
import { View , Text , Image , TextInput} from 'react-native';
import { CheckBox , Icon , Input , Switch , Button} from 'react-native-elements';
const Destination = () => {
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
                <Text style={{fontSize: 30, fontWeight: '400' ,color: 'black'}}>Enter your Destination</Text>
                <Text style={{fontSize: 15}}>Please tell us the drop location</Text>
                
            </View>
            <View style={{
                flexDirection: 'row',

                
            }}>
                <View style={{
                    marginTop: 17,
                    marginLeft: 20,
                }}>
                    <Image source={require('../../../assets/images/startloc.png')} 
                    style={{
                        marginLeft: 11
                    }}/>
                    <Image source={require('../../../assets/images/connector.png')} 
                    style={{
                    marginLeft: 17,
                    }}/>
                    <Image source={require('../../../assets/images/endloc.png')}/>
                </View>
                <View>
                <TextInput
                    placeholder='Enter Address'
                    style={{ width: 300, }}
                />
                <TextInput
                    placeholder='Enter Destination'
                    style={{ width: 300, }}
                />
                
                

                </View>
            </View>
        </View>
)
}

export default Destination