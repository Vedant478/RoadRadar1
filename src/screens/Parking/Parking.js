import React from 'react';
import { View , Text  , TouchableOpacity , Alert, Image , Button , ScrollView} from 'react-native';
import { CheckBox , Icon , Switch } from 'react-native-elements';
import {useEffect , useState} from 'react';
import { useNavigation } from '@react-navigation/native';

const Parking = () => {
    const [checked, setChecked] = useState(false);
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const navigation = useNavigation();
    const onPressed = () => {
        navigation.navigate('AddParking')
        
        
    };
    return(
        <ScrollView>
        <View style={{
             backgroundColor: 'white'
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: 'white',
                padding: 10,
                marginLeft: 10,
                marginRight: 10,
                marginTop: 10,
            }}>
                <Text style={{fontSize: 35, fontWeight: 'bold' ,color: 'black'}}>Add Parking</Text>
                <TouchableOpacity
                style={{
                    marginTop: 15,

                }}
                onPress={onPressed}>
                    
                    <Text>Skip ></Text>
                </TouchableOpacity>
            </View>
            <View style={{
                marginLeft: 20, 
                marginTop: 20, 
                flexDirection: 'row'
            }}>
                <Text style={{ fontSize: 20 , fontWeight: '500', color: 'black'}}>I own a parking spot</Text>
                <View style={{
                    marginLeft: 50,
                    
                }}>
                    <Switch
                    value={checked}
                    onValueChange={(value) => setChecked(value)}
                    />
                </View>  


            </View>
            <View style={{
                marginTop: 20,
                marginLeft: 40
            }}>
                <Text style={{ fontSize: 20 , fontWeight: '500', color: 'black'}}>Choose type</Text>
            </View>
            <View style={{
                marginTop: 20
            }}>
            <View style={{
                    marginLeft: 30,
                    marginRight: 5,
                    flexDirection: 'row'
                }}>
                    <View style={{
                    borderWidth:3,
                    borderColor: '#1e95d0',
                    borderRadius: 10,
                    marginLeft: 5,
                    }}>
                    <Image source={require("../../../assets/images/Rectangle35.png")}
                    style={{
                        width: 90,
                        height: 70,
                        marginLeft: 20,
                        marginTop : 20, 
                        marginRight: 20,
                        
                    }}/>
                    <Text style={{ fontSize : 18,  marginTop:10,marginLeft: 10, marginBottom: 10, fontWeight: '700' ,color: '#1e95d0'}}>Four Wheeler</Text>
                    </View>
                    <View style={{
                    borderWidth:1,
                    borderColor: 'grey',
                    marginLeft: 50,
                    borderRadius: 10,
                    

                    }}>
                    <Image source={require("../../../assets/images/Rectangle30.png")}
                    style={{
                        width: 90,
                        height: 50,
                        marginLeft: 20,
                        marginTop: 30,
                         
                        marginRight: 20
                    }}/>
                    <Text style={{ fontSize :18 , marginTop:20, marginLeft: 10, marginRight: 10, marginBottom:10, fontWeight: '600'}}>Two Wheeler</Text>
                    </View>    
                    
                </View>
            </View>
            <View style={{
                marginLeft: 20,
                marginTop: 10
            }}>
                <Text style={{fontSize: 26 ,fontWeight : '400', color: 'black'}}>Upload Image </Text>
            </View>
            <View style={{
                    borderColor: '#d3d3d3',
                    borderWidth: 2,
                    borderStyle: 'dashed',
                    marginLeft: 20,
                    height: 130,
                    marginTop: 20,
                    marginRight: 20,
                    
                }}><Icon
                containerStyle={{
                   marginTop: 35,

                }}
                name='file-image-o'
                type='font-awesome'
                color= '#d3d3d3'
                onPress={() => console.log('hello')} />
                        <TouchableOpacity>
                            <Text style={{textAlign: 'center', marginTop: 20 , color: '#d3d3d3'}}>Tap to Choose</Text>
                        </TouchableOpacity>

                </View>
                <View style={{
                flexDirection: 'row',
                marginLeft: 20
                
            }}>
                <View style={{
                    marginTop: 20,
                }}>
                    <Image source={require('../../../assets/images/Parking.png')}></Image>
                </View>
                <View style={{
                    marginTop: 30,
                    marginLeft: 30,
                }}>
                    <Text style={{ fontSize: 15, fontWeight: '400' , color: 'black'}}>parking-image.jpg</Text>
                    <Text>80kb</Text>
                    
                </View>
                    
                <View style={{
                    marginTop: 25,
                    marginLeft: 60,
                    marginRight: 30,
                    flexDirection: 'row',
                    
                }}>
                    
                <Icon
                containerStyle={{
                    marginTop: 15 ,
                }}
                 name='delete'
                type='MaterialCommunityIcons'
                color='red'
                />
                
                </View>
            </View> 
            <View style={{
                marginLeft: 20, 
                marginTop: 20, 
                flexDirection: 'row'
            }}>
                <Text style={{ fontSize: 20 , fontWeight: '500', color: 'black'}}>Share location</Text>
                <View style={{
                    marginLeft: 110,
                    
                }}>
                    <Switch
                    value={checked1}
                    onValueChange={(value) => setChecked1(value)}
                    />
                </View>  


            </View>
            <View style={{
                marginLeft: 20, 
                marginTop: 20, 
                flexDirection: 'row'
            }}>
                <Text style={{ fontSize: 20 , fontWeight: '500', color: 'black'}}>EV charging available</Text>
                <View style={{
                    marginLeft: 55,
                    
                }}>
                    <Switch
                    value={checked2}
                    onValueChange={(value) => setChecked2(value)}
                    />
                </View>  


            </View>
            <View style={{
                height: 200,
                marginLeft: 10,
                marginRight : 10,
                marginTop : 50,
                backgroundColor: 'white',
            }}>
            <Button
                title="Continue"
                
                onPress={onPressed}
                color='#1e95d0'
                
             />
            </View>
            
            
        </View>
        </ScrollView>
    )
}

export default Parking