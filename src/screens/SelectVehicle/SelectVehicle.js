import React from 'react';
import { View , Text , Alert , Image , Pressable , TouchableOpacity} from 'react-native';
import { CheckBox , Icon , Input , Switch , Button} from 'react-native-elements';
import {useEffect , useState} from 'react';

const SelectVehicle = () => {
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);
    const [check4, setCheck4] = useState(false);
    const [check5, setCheck5] = useState(false);

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
            <Icon
            name='chevron-left'
            type='entypo'
            color='black'
            containerStyle={{alignItems: 'flex-start'}}
            onPress={() => Alert.alert('back')}    
            
            />

            <Text style={{fontSize: 30, fontWeight: '400' ,color: 'black', marginTop: 20}}>Pick your Vehicle</Text>
            <Text style={{fontSize: 15}}>Vehicle owned - 4</Text>
            
        </View>
        <View style={{
                flexDirection: 'row',
                marginTop: 10,
                marginLeft: 10,
            }}>
                <Image source={require("../../../assets/images/car1.png")}
                style={{
                    marginTop: 10,
                    marginLeft: 25,
                    width: 60,
                    height: 60,
                    backgroundColor: 'white'
                }}/>
                <View style={{
                    marginLeft: 40,
                    marginTop: 10,
                    
                }}>
                    <Text style={{fontSize: 18,fontWeight: '500' , color: 'black'}}>Car - Tata Nexon</Text>
                    <Text>Four Wheeler</Text>
                </View>
                <CheckBox
                containerStyle={{
                    marginLeft:50,
                }}
                    center
                    
                    uncheckedIcon="circle-o"
                    checkedColor='#0F0'
                    checked={check2}
                    onPress={() => setCheck2(!check2)}/>

                
            </View>
            <View style={{
                flexDirection: 'row',
                marginTop: 10,
                marginLeft: 10,
            }}>
                <Image source={require("../../../assets/images/taxi.png")}
                style={{
                    marginTop: 10,
                    marginLeft: 25,
                    width: 60,
                    height: 60,
                    backgroundColor: 'white'
                }}/>
                <View style={{
                    marginLeft: 40,
                    marginTop: 10,
                    
                }}>
                    <Text style={{fontSize: 18,fontWeight: '500' , color: 'black'}}>Taxi - Maruti Swift</Text>
                    <Text>Four Wheeler</Text>
                </View>
                <CheckBox
                containerStyle={{
                    marginLeft:35,
                }}
                    center
                    
                    uncheckedIcon="circle-o"
                    checkedColor='#0F0'
                    checked={check1}
                    onPress={() => setCheck1(!check1)}/>

                
            </View>
            <View style={{
                flexDirection: 'row',
                marginTop: 10,
                marginLeft: 10
            }}>
                <Image source={require("../../../assets/images/Rectangle30.png")}
                style={{
                    marginTop: 10,
                    marginLeft: 25,
                    width: 70,
                    height: 60,
                    backgroundColor: 'white'
                }}/>
                <View style={{
                    marginLeft: 30,
                    marginTop: 10,
                    
                }}>
                    <Text style={{fontSize: 17,fontWeight: '500' , color: 'black'}}>Bike - Yamaha</Text>
                    <Text>Two Wheeler</Text>
                </View>
                <CheckBox
                containerStyle={{
                    marginLeft:73,
                    marginTop:0
                }}
                    center
                    
                    uncheckedIcon="circle-o"
                    checkedColor='#0F0'
                    checked={check4}
                    onPress={() => setCheck4(!check4)}/>

                
            </View>
            <View style={{
                flexDirection: 'row',
                marginTop: 10,
                marginLeft: 10,
            }}>
                <Image source={require("../../../assets/images/scooter1.png")}
                style={{
                    marginTop: 10,
                    marginLeft: 25,
                    width: 60,
                    height: 60,
                    backgroundColor: 'white'
                }}/>
                <View style={{
                    marginLeft: 40,
                    marginTop: 10,
                    
                }}>
                    <Text style={{fontSize: 17,fontWeight: '500' , color: 'black'}}>Scooty - Activa</Text>
                    <Text>Two Wheeler</Text>
                </View>
                <CheckBox
                    containerStyle={{
                        marginLeft:66,
                    }}
                    center
                    uncheckedIcon="circle-o"
                    checkedColor='#0F0'
                    checked={check3}
                    onPress={() => setCheck3(!check3)}/>

                
            </View>
            <View>
                <Button
                title="Choose"
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
                    
                    marginTop: 30,
                }}
                onPress={() => console.log('aye')}
                icon={{
                    name: 'long-arrow-right',
                    type: 'font-awesome',
                    size: 30,
                    color: 'white',
                  }}
                iconRight 
                iconContainerStyle={{ marginLeft: 40, }} 
                
            />
            <Button
                title="Book Vehicle"
                loading={false}
                loadingProps={{ size: 'small', color: 'white' }}
                buttonStyle={{
                    backgroundColor: 'white',
                    borderWidth: 2,
                    borderColor: '#1e95d0',
                    borderRadius: 8,
                }}
                titleStyle={{  fontSize: 20 , marginRight: 80 , color: '#1e95d0'}}
                containerStyle={{
                    marginLeft: 50,
                    height: 100,
                    width: 300,
                    
                    
                    
                }}
                onPress={() => console.log('aye')}
                icon={{
                    name: 'long-arrow-right',
                    type: 'font-awesome',
                    size: 30,
                    color: '#1e95d0',
                  }}
                iconRight 
                iconContainerStyle={{ marginLeft: 40, }} 
                
            />
            </View>
            
    </View>
    )
}

export default SelectVehicle