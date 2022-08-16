import React from 'react';
import { View , Text , TouchableOpacity ,Alert , Image , Button} from 'react-native';
import { CheckBox , Icon } from 'react-native-elements';
import {useEffect , useState} from 'react';
import { useNavigation } from '@react-navigation/native';
const AddVehicle1 = () => {
    const [Private,setPrivate] = useState(false);
    const [commercial,setcommercial] = useState(false);
    const navigation = useNavigation();
    const onPressed = () => {
        navigation.navigate('AddVehicle2')
        
    };
    const [isActive, setIsActive] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [isActive4, setIsActive4] = useState(false);
    const [isActive5, setIsActive5] = useState(false);
const handleClick = () => {
   
    setIsActive(current => !current);
};
const handleClick2 = () => {
   
    setIsActive2(current => !current);
};
const handleClick3 = () => {
   
    setIsActive3(current => !current);
};
const handleClick4 = () => {
   
    setIsActive4(current => !current);
};
const handleClick5 = () => {
   
    setIsActive5(current => !current);
};

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
                onPress={onPressed}>
                    
                    <Text style={{ marginRight: 10}}>
                    <Icon
                    name='angle-right'
                    type='font-awesome'
                    containerStyle={{marginTop: 10, marginLeft: 5}}
                     />
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{
                padding: 15,
                marginLeft: 5,
                
            }}>
                <Text style={{fontSize: 26 ,fontWeight : '400', color: 'black'}}>Vehicle type</Text>
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
                }}><TouchableOpacity onPress={handleClick}>
                    <View style={{
                    borderWidth:3,
                    borderColor: isActive ? '#1e95d0' : 'grey',
                    borderRadius: 10,
                    marginLeft: 5,
                    
                    }}>
                    <Image source={require("../../../assets/images/Rectangle30.png")}
                    style={{
                        width: 90,
                        height: 60,
                        marginLeft: 20,
                        marginTop : 30, 
                        marginRight: 20,
                        
                    }}/>
                    <Text style={{ fontSize : 18,  marginTop:10,marginLeft: 10, marginBottom: 10, fontWeight: '600' , color: isActive ? '#1e95d0' : 'grey'}}>Two Wheeler</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleClick2}>
                    <View style={{
                    borderWidth:3,
                    borderColor: isActive2 ? '#1e95d0' : 'grey',
                    marginLeft: 50,
                    borderRadius: 10,
                    

                    }}>
                    <Image source={require("../../../assets/images/Rectangle33.png")}
                    style={{
                        width: 90,
                        height: 80,
                        marginLeft: 27,
                        marginTop: 8,
                        resizeMode:'contain',
                        marginRight: 20
                    }}/>
                    <Text style={{ fontSize :18 , marginTop:10, marginLeft: 10, marginRight: 10, marginBottom:10, fontWeight: '600' ,color: isActive2 ? '#1e95d0' : 'grey'}}>Three Wheeler</Text>
                    </View>    
                    </TouchableOpacity>
                </View>
                
                <View style={{
                    marginTop: 20,
                    marginLeft: 30,
                    marginRight: 10,
                    flexDirection: 'row'
                }}> 
                    <TouchableOpacity onPress={handleClick3}>
                    <View style={{
                    borderWidth:3,
                    borderColor: isActive3 ? '#1e95d0' : 'grey',
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
                    <Text style={{ fontSize : 18,  marginTop:10,marginLeft: 10, marginBottom: 10, fontWeight: '600' , color: isActive3 ? '#1e95d0' : 'grey'}}>Four Wheeler</Text>
                    
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleClick4}>
                    <View style={{
                    borderWidth:3,
                    borderColor: isActive4 ? '#1e95d0' : 'grey',
                    marginLeft: 50,
                    borderRadius: 10,
                    
                    }}>
                    <Image source={require("../../../assets/images/Rectangle37.png")}
                    style={{
                        width: 97,
                        height: 65,
                        marginLeft: 20,
                        marginTop : 30, 
                        marginRight: 20
                    }}/>
                    <Text style={{ fontSize : 18,  marginTop:10, marginLeft: 45, marginBottom:5, fontWeight: '600' ,color: isActive4 ? '#1e95d0' : 'grey'}}>Other</Text>
                    </View>    
                    </TouchableOpacity>
                </View>
                <View style={{
                    marginTop: 20,
                    marginLeft: 30,
                    marginRight: 10,
                    flexDirection: 'row'
                }}>
                    <TouchableOpacity onPress={handleClick5}>
                    <View style={{
                    borderWidth:3,
                    borderColor: isActive5 ? '#1e95d0' : 'grey',
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
                    <Text style={{ fontSize : 18,  marginTop:10,marginLeft: 45, marginBottom: 10, fontWeight: '600' , color: isActive5 ? '#1e95d0' : 'grey'}}>SUV</Text>
                    </View>
                    </TouchableOpacity>   
                    
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
                
                onPress={onPressed}
                color='#1e95d0'
                
             />
            </View>
            
        </View>
    )
}

export default AddVehicle1