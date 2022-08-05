import React from 'react';
import { View , Text , Alert , Image , Pressable , TouchableOpacity} from 'react-native';
import {useEffect , useState} from 'react';
import { CheckBox , Icon , Input , Switch , Button} from 'react-native-elements';

const RideSelect = () => {
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
                <Text style={{fontSize: 30, fontWeight: '600' ,color: 'black'}}>Choose your Ride</Text>
                
            </View>
            <View style={{
                marginLeft: 20,
                marginTop: 20,
            }}>
                <Text style={{fontSize: 20,  color: 'black'}}>Public Transport</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                marginTop: 10,
                marginLeft: 10,
            }}>
                <Image source={require("../../../assets/images/bus3.png")}
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
                    <Text style={{fontSize: 18,fontWeight: '500' , color: 'black'}}>Bus</Text>
                    <Text>$50 - Approximately</Text>
                </View>
                <CheckBox
                containerStyle={{
                    marginLeft:60,
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
                <Image source={require("../../../assets/images/train.png")}
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
                    <Text style={{fontSize: 18,fontWeight: '500' , color: 'black'}}>Train</Text>
                    <Text>$214 - Approximately</Text>
                </View>
                <CheckBox
                containerStyle={{
                    marginLeft:53,
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
                <Image source={require("../../../assets/images/metro1.png")}
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
                    <Text style={{fontSize: 18,fontWeight: '500' , color: 'black'}}>Metro</Text>
                    <Text>$300 - Approximately</Text>
                </View>
                <CheckBox
                containerStyle={{
                    marginLeft:53,
                }}
                    center
                    
                    uncheckedIcon="circle-o"
                    checkedColor='#0F0'
                    checked={check3}
                    onPress={() => setCheck3(!check3)}/>

                
            </View>
            <View style={{
                marginLeft: 20,
                marginTop: 20,
            }}>
                <Text style={{fontSize: 20,  color: 'black'}}>Other options</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                marginTop: 10,
                marginLeft: 10,
            }}>
                <Image source={require("../../../assets/images/cab1.png")}
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
                    <Text style={{fontSize: 18,fontWeight: '500' , color: 'black'}}>Cab / Taxi</Text>
                    <Text>$400 - Approximately</Text>
                </View>
                <CheckBox
                containerStyle={{
                    marginLeft:53,
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
                <Image source={require("../../../assets/images/bicycle1.png")}
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
                    <Text style={{fontSize: 18,fontWeight: '500' , color: 'black'}}>Bicycle</Text>
                    <Text>$150 - Approximately</Text>
                </View>
                <CheckBox
                containerStyle={{
                    marginLeft:53,
                }}
                    center
                    
                    uncheckedIcon="circle-o"
                    checkedColor='#0F0'
                    checked={check5}
                    onPress={() => setCheck5(!check5)}/>

                
            </View>
            <View>
            <Button
                title="Book"
                loading={false}
                loadingProps={{ size: 'small', color: 'white' }}
                buttonStyle={{
                    backgroundColor: '#1e95d0',
                    borderRadius: 8,
                }}
                titleStyle={{  fontSize: 20 , marginRight: 100 }}
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
            </View>
        </View>
    )
}

export default RideSelect