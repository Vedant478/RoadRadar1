import React from 'react';
import { View , Text , Alert , Image , Pressable , TouchableOpacity} from 'react-native';
import { CheckBox , Icon , Input , Switch , Button} from 'react-native-elements';
import {useEffect , useState} from 'react'; 

const CarpoolList = () => {
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);


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
                <Text style={{fontSize: 30, fontWeight: '400' ,color: 'black'}}>Carpools nearby</Text>
                <Text style={{fontSize: 15}}>Available on 23 , July , 2021 - 1:00 pm</Text>
                
            </View>
            <View style={{
                flexDirection: 'row',
                marginTop: 10,
                marginLeft: 10,
            }}>
                <Image source={require("../../../assets/images/SUV1.png")}
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
                    <Text style={{fontSize: 18,fontWeight: '500' , color: 'black'}}>Car - KIA</Text>
                    <Text>02 seats available</Text>
                </View>
                <CheckBox
                containerStyle={{
                    marginLeft:72,
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
                    <Text>04 seats available</Text>
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
                <Image source={require("../../../assets/images/Rectangle39.png")}
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
                    <Text style={{fontSize: 18,fontWeight: '500' , color: 'black'}}>Jeep - SUV</Text>
                    <Text>04 seats available</Text>
                </View>
                <CheckBox
                containerStyle={{
                    marginLeft:72,
                }}
                    center
                    
                    uncheckedIcon="circle-o"
                    checkedColor='#0F0'
                    checked={check3}
                    onPress={() => setCheck3(!check3)}/>

                
            </View>
            <View>
            <Button
                title="Finish"
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
            </View>
        </View>
    )


}

export default CarpoolList