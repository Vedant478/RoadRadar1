import React from 'react';
import { View , Text , TouchableOpacity ,Alert , Image , Button} from 'react-native';
import { CheckBox , Icon } from 'react-native-elements';
import {useEffect , useState} from 'react';

const AddVehicle1 = () => {
    const [Private,setPrivate] = useState(false);
    const [commercial,setcommercial] = useState(false);


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
                <Text style={{fontSize: 35, fontWeight: 'bold' ,color: 'black'}}>Add vehicle</Text>
                <TouchableOpacity
                style={{
                    marginTop: 15,

                }}
                onPress={() => Alert.alert('Next page')}>
                    
                    <Text>Skip ></Text>
                </TouchableOpacity>
            </View>
            <View style={{
                padding: 15,
                marginLeft: 5,
                
            }}>
                <Text style={{fontSize: 26 ,fontWeight : 'bold', color: 'black'}}>Vehicle type</Text>
            <View style={{
                flexDirection:'row',
            }}>
                <CheckBox
                containerStyle={{
                    borderWidth: 0,
                    marginTop: 15,
                    width: 85,
                }}
                center
                title="Private"
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={Private}
                onPress={() => setPrivate(!Private)}
                />
                <CheckBox
                containerStyle={{
                    borderWidth:0,
                    marginTop: 15,
                    width: 120,
                    marginRight: 10
                }}
                center
                title="Commercial"
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={commercial}
                onPress={() => setcommercial(!commercial)}
                />
                
            </View>   

            </View>
            <View>
                <View style={{
                    marginLeft: 30,
                    marginRight: 5,
                    flexDirection: 'row'
                }}>
                    <View style={{
                    borderWidth:1,
                    borderColor: 'grey',
                    borderRadius: 10,
                    marginLeft: 5,
                    }}>
                    <Image source={require("../../../assets/images/Rectangle30.png")}
                    style={{
                        width: 90,
                        height: 50,
                        marginLeft: 20,
                        marginTop : 30, 
                        marginRight: 20,
                        
                    }}/>
                    <Text style={{ fontSize : 18,  marginTop:10,marginLeft: 10, marginBottom: 10, fontWeight: '600'}}>Two Wheeler</Text>
                    </View>
                    <View style={{
                    borderWidth:1,
                    borderColor: 'grey',
                    marginLeft: 50,
                    borderRadius: 10,
                    

                    }}>
                    <Image source={require("../../../assets/images/Rectangle33.png")}
                    style={{
                        width: 90,
                        height: 85,
                        marginLeft: 20,
                        marginTop: 8,
                         
                        marginRight: 20
                    }}/>
                    <Text style={{ fontSize :18 , marginTop:10, marginLeft: 10, marginRight: 10, marginBottom:10, fontWeight: '600'}}>Three Wheeler</Text>
                    </View>    
                    
                </View>
                <View style={{
                    marginTop: 20,
                    marginLeft: 30,
                    marginRight: 10,
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
                    <Text style={{ fontSize : 18,  marginTop:10,marginLeft: 10, marginBottom: 10, fontWeight: '600'}}>Four Wheeler</Text>
                    </View>
                    <View style={{
                    borderWidth:1,
                    borderColor: 'grey',
                    marginLeft: 50,
                    borderRadius: 10,
                    

                    }}>
                    <Image source={require("../../../assets/images/Rectangle37.png")}
                    style={{
                        width: 90,
                        height: 45,
                        marginLeft: 20,
                        marginTop : 30, 
                        marginRight: 20
                    }}/>
                    <Text style={{ fontSize : 18,  marginTop:10, marginLeft: 35, marginBottom:5, fontWeight: '600'}}>Other</Text>
                    </View>    
                    
                </View>
                <View style={{
                    marginTop: 20,
                    marginLeft: 30,
                    marginRight: 10,
                    flexDirection: 'row'
                }}>
                    <View style={{
                    borderWidth:1,
                    borderColor: 'grey',
                    borderRadius: 10,
                    marginLeft: 5,
                    }}>
                    <Image source={require("../../../assets/images/Rectangle39.png")}
                    style={{
                        width: 90,
                        height: 70,
                        marginLeft: 20,
                        marginTop : 20, 
                        marginRight: 20,
                        
                    }}/>
                    <Text style={{ fontSize : 18,  marginTop:10,marginLeft: 45, marginBottom: 10, fontWeight: '600'}}>SUV</Text>
                    </View>
                        
                    
                </View>
                
            </View>
            <View style={{
                height: 200,
                marginLeft: 10,
                marginRight : 10,
                marginTop : 10,
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

export default AddVehicle1