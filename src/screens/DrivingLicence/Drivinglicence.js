import { color } from '@rneui/base';
import React from 'react';
import { View , Text , Image, Button, Alert, TouchableOpacity} from 'react-native';
import {useEffect , useState} from 'react';
import { CheckBox , Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';




    
const Drivinglicence = () => {
    const [learner,setlearner] = useState(false);
    const [Public,setPublic] = useState(false);
    const [commercial,setcommercial] = useState(false);
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);
    const [check4, setCheck4] = useState(false);
    const [check5, setCheck5] = useState(false);
    const navigation = useNavigation();
    const onPressed = () => {
        navigation.navigate('AddVehicle1')
        
        
    };
    return(
        <View style={{
            backgroundColor: 'white',
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
                <Text style={{fontSize: 35, fontWeight: 'bold' ,color: 'black'}}>Driving Licence</Text>
                <TouchableOpacity
                style={{
                    marginTop: 15,

                }}
                onPress={onPressed}>
                    
                    <Text>Skip </Text>
                </TouchableOpacity>
            </View>
            <View style={{
                padding: 15,
                marginLeft: 5,
                
            }}>
                <Text style={{fontSize: 26 ,fontWeight : 'bold', color: 'black'}}>Licence's type</Text>
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
                title="learner"
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={learner}
                onPress={() => setlearner(!learner)}
                />
                <CheckBox
                containerStyle={{
                    borderWidth:0,
                    marginTop: 15,
                    width: 90,
                    marginRight: 10
                }}
                center
                title="public"
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={Public}
                onPress={() => setPublic(!Public)}
                />
                <CheckBox
                containerStyle={{
                borderWidth:0,
                marginTop: 15,
                width: 125,
                 }}
                center
                title="commercial"
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={commercial}
                onPress={() => setcommercial(!commercial)}
                />
            </View>   

            </View>
            <View style={{
                padding: 10,
                marginLeft: 5
            }}>
                <Text style={{fontSize: 26,fontWeight: 'bold', color: 'black' }}>Licence's category</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                marginTop: 10,
                marginLeft: 10,
            }}>
                <Image source={require("../../../assets/images/scooter1.png")}
                style={{
                    marginTop: 10,
                    marginLeft: 20,
                    width: 50,
                    height: 50,
                    backgroundColor: 'white'
                }}/>
                <View style={{
                    marginLeft: 20,
                    marginTop: 10,
                    
                }}>
                    <Text style={{fontSize: 17,fontWeight: 'bold' , color: 'black'}}>MC 50cc</Text>
                    <Text>Engine capacity 50cc or less</Text>
                </View>
                <CheckBox
                    containerStyle={{
                        marginLeft:50,
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
                marginLeft: 10,
            }}>
                <Image source={require("../../../assets/images/car1.png")}
                style={{
                    marginTop: 10,
                    marginLeft: 20,
                    width: 50,
                    height: 50,
                    backgroundColor: 'white'
                }}/>
                <View style={{
                    marginLeft: 20,
                    marginTop: 10,
                    
                }}>
                    <Text style={{fontSize: 17,fontWeight: 'bold' , color: 'black'}}>LMV-NT</Text>
                    <Text>Light motor vehicle</Text>
                </View>
                <CheckBox
                containerStyle={{
                    marginLeft:108,
                }}
                    center
                    
                    uncheckedIcon="circle-o"
                    checkedColor='#0F0'
                    checked={check2}
                    onPress={() => setCheck2(!check2)}/>

                
            </View>
            <View style={{
                flexDirection: 'row',
                marginLeft: 10,
                marginTop: 10,
            }}>
                <Image source={require("../../../assets/images/SUV1.png")}
                style={{
                    marginTop: 10,
                    marginLeft: 20,
                    width: 50,
                    height: 50,
                    backgroundColor: 'white'
                }}/>
                <View style={{
                    marginLeft: 20,
                    marginTop: 10,
                    
                }}>
                    <Text style={{fontSize: 17,fontWeight: 'bold' , color: 'black'}}>SUV</Text>
                    <Text>More people can travel </Text>
                </View>
                <CheckBox
                containerStyle={{
                    marginLeft:81,
                }}
                    center
                    
                    uncheckedIcon="circle-o"
                    checkedColor='#0F0'
                    checked={check3}
                    onPress={() => setCheck3(!check3)}/>

                
            </View>
            <View style={{
                flexDirection: 'row'
            }}>
                <Image source={require("../../../assets/images/Rectangle30.png")}
                style={{
                    marginTop: 10,
                    marginLeft: 20,
                    width: 70,
                    height: 60,
                    backgroundColor: 'white'
                }}/>
                <View style={{
                    marginLeft: 10,
                    marginTop: 20,
                    
                }}>
                    <Text style={{fontSize: 17,fontWeight: 'bold' , color: 'black'}}>MC EX50cc</Text>
                    <Text>Engine capacity above 50cc</Text>
                </View>
                <CheckBox
                containerStyle={{
                    marginLeft:54,
                    marginTop:20
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
                <Image source={require("../../../assets/images/bus3.png")}
                style={{
                    marginTop: 10,
                    marginLeft: 20,
                    width: 50,
                    height: 50,
                    backgroundColor: 'white'
                }}/>
                <View style={{
                    marginLeft: 20,
                    marginTop: 10,
                    
                }}>
                    <Text style={{fontSize: 17,fontWeight: 'bold' , color: 'black'}}>HPMY</Text>
                    <Text>Heavy vehicles with pan permit</Text>
                </View>
                <CheckBox
                containerStyle={{
                    marginLeft:33,
                }}
                    center
                    
                    uncheckedIcon="circle-o"
                    checkedColor='#0F0'
                    checked={check5}
                    onPress={() => setCheck5(!check5)}/>
                
                
            </View>
                
            <View style={{
                 height: 250,
                 marginLeft: 10,
                 marginRight : 10,
                 marginTop : 40,
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

export default Drivinglicence