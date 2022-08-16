import React from 'react';
import { View , Text , Image , Alert} from 'react-native';
import { CheckBox , Icon , Input , Switch , Button} from 'react-native-elements';
import {useEffect , useState} from 'react';

const Carpool = () => {
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
                <Image source={require("../../../assets/images/carpool.png")} 
                style={{
                width: 80,
                height: 80,
                marginTop: 15,
                marginLeft: 35,
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
                    marginTop: 50,
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
export default Carpool