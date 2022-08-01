import React from 'react';
import { View , Text , TouchableOpacity , Image , Button , Alert } from 'react-native';
import { CheckBox , Icon , Input } from 'react-native-elements';
import {useEffect , useState} from 'react';

const VehicleList = () => {

    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
return(
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
                <Text style={{fontSize: 35, fontWeight: 'bold' ,color: 'black'}}>Vehicle list</Text>

                
                
            </View>
            <View style={{
                flexDirection: 'row',
                marginLeft: 20
                
            }}>
                <View style={{
                    marginTop: 30,
                }}>
                    <Image source={require('../../../assets/images/Car.jpeg')}></Image>
                </View>
                <View style={{
                    marginTop: 40,
                    marginLeft: 30,
                }}>
                    <Text style={{ fontSize: 15, fontWeight: '400' , color: 'black'}}>Four Wheeler</Text>
                    <Text>AP5043D | <Text style={{ color: '#1e95d0' , fontWeight: '600'}}> Blue</Text></Text>
                </View>
                    
                <View style={{
                    marginTop: 25,
                    marginLeft: 40,
                    marginRight: 30,
                    flexDirection: 'row',
                    
                }}>
                <CheckBox
                
                    center
                    uncheckedIcon="circle-o"
                    checkedColor='#0F0'
                    checked={check1}
                    onPress={() => setCheck1(!check1)}/>    
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
                flexDirection: 'row',
                marginLeft: 20
                
            }}>
                <View style={{
                    marginTop: 30,
                }}>
                    <Image source={require('../../../assets/images/bike.png')}></Image>
                </View>
                <View style={{
                    marginTop: 40,
                    marginLeft: 30,
                }}>
                    <Text style={{ fontSize: 15, fontWeight: '400' , color: 'black'}}>Two Wheeler</Text>
                    <Text>AP4849C | <Text style={{ color: '#1e95d0' , fontWeight: '600'}}> Blue</Text></Text>
                    
                </View>
                    
                <View style={{
                    marginTop: 25,
                    marginLeft: 40,
                    marginRight: 30,
                    flexDirection: 'row',
                    
                }}>
                <CheckBox
                
                    center
                    uncheckedIcon="circle-o"
                    checkedColor='#0F0'
                    checked={check2}
                    onPress={() => setCheck2(!check2)}/>    
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
                marginTop: 30,
                marginLeft: 20,
                flexDirection: 'row'
            }}>
                <Text style={{fontSize: 26 ,fontWeight : '400', color: 'black'}}>Add More</Text>
                <Icon 
                    containerStyle={{
                        marginLeft: 10,
                        marginTop: 5
                    }}
                    name='plus'
                    type='font-awesome'
                    
                    />
            </View> 
            <View style={{
                height: 200,
                marginLeft: 10,
                marginRight : 10,
                marginTop : 300,
                backgroundColor: 'white',
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

export default VehicleList