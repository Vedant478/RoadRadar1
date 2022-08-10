import React from 'react';
import { View , Text , Alert , Image , Pressable , TouchableOpacity , } from 'react-native';
import { CheckBox , Icon , Input , Switch , Button} from 'react-native-elements';
import {useEffect , useState} from 'react'; 
const Explore1 = () => {
    const [isActive, setIsActive] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [isActive4, setIsActive4] = useState(false);

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

                <Text style={{fontSize: 30, fontWeight: '400' ,color: 'black', marginTop: 20}}>Hey John</Text>
                <Text style={{fontSize: 15}}>Welcome to explore section</Text>
                
            </View>
            <View style={{
                    marginTop: 20,
                    marginLeft: 30,
                    marginRight: 10,
                    flexDirection: 'row'
                }}>
                    <View style={{
                    
                    backgroundColor: '#ffa9ad',
                    borderRadius: 10,
                    marginLeft: 5,
                    }}>
                    <TouchableOpacity onPress={() => Alert.alert('food page')}>
                    <Image source={require("../../../assets/images/food.png")}
                    style={{
                        width: 90,
                        height: 90,
                        marginLeft: 20,
                        marginTop : 20, 
                        marginRight: 20,
                        
                    }}/>
                    <Text style={{ fontSize : 18,  marginTop:10, fontWeight: '600', marginLeft: 45}}>food</Text>
                    </TouchableOpacity>
                    </View>
                    <View style={{
                    backgroundColor: '#ffdb92',
                    
                    marginLeft: 50,
                    borderRadius: 10,
                    

                    }}>
                    <TouchableOpacity onPress={() => Alert.alert('place')}>   
                    <Image source={require("../../../assets/images/place.png")}
                    style={{
                        width: 90,
                        height: 90,
                        marginLeft: 20,
                        marginTop : 20, 
                        marginRight: 20
                    }}/>
                    <Text style={{ fontSize : 18,  marginTop:10, marginLeft: 35,  fontWeight: '600', marginBottom: 10}}>places</Text>
                    </TouchableOpacity> 
                    </View>    
                    
                </View>
                <View style={{
                    marginTop: 20,
                    marginLeft: 30,
                    marginRight: 10,
                    flexDirection: 'row'
                }}>
                    <View style={{
                    backgroundColor: '#8dc9ff',
                    borderRadius: 10,
                    marginLeft: 5,
                    }}>
                    <TouchableOpacity onPress={() => Alert.alert('chat')}> 
                    <Image source={require("../../../assets/images/chat.png")}
                    style={{
                        width: 90,
                        height: 70,
                        marginLeft: 20,
                        marginTop : 20, 
                        marginRight: 20,
                        
                    }}/>
                    <Text style={{ fontSize : 18,  marginTop:10,marginLeft: 45, fontWeight: '600'}}>Chat</Text>
                    </TouchableOpacity>
                    </View>
                    <View style={{
                    backgroundColor: '#d8b8ff',
                    marginLeft: 50,
                    borderRadius: 10,
                    

                    }}>
                    <TouchableOpacity onPress={() => Alert.alert('helpline')}>     
                    <Image source={require("../../../assets/images/help-line.png")}
                    style={{
                        width: 90,
                        height: 80,
                        marginLeft: 20,
                        marginTop : 20, 
                        marginRight: 20
                    }}/>
                    <Text style={{ fontSize : 18,  marginTop:10, marginLeft: 45, fontWeight: '600', marginBottom: 10}}>Help</Text>
                    </TouchableOpacity>
                    </View>    
                    
                </View>
                <View style={{
                    marginTop: 20,
                    marginLeft: 30,
                    marginRight: 10,
                    flexDirection: 'row'
                }}>
                    <View style={{
                    backgroundColor:'#95ffec',
                    borderRadius: 10,
                    marginLeft: 5,
                    }}>
                    <TouchableOpacity onPress={() => Alert.alert('report')}> 
                    <Image source={require("../../../assets/images/report.png")}
                    style={{
                        width: 90,
                        height: 90,
                        marginLeft: 20,
                        marginTop : 10, 
                        marginRight: 20,
                        
                    }}/>
                    <Text style={{ fontSize : 18,  marginTop:10,marginLeft: 40, fontWeight: '600' , marginBottom: 10}}>Report</Text>
                    </TouchableOpacity>
                    </View>
                    
                       
                    
                </View>
                <View style={{
                        flexDirection:'row',
                        backgroundColor: 'white',
                        borderRadius: 4, 
                        marginTop: 20, 
                        height : 90,
                        width: 400,
                        elevation: 8,
                        borderWidth : 1,
                        borderTopColor: 'grey',
                        justifyContent: 'space-evenly',
                       
                       

                    }}>
                    <Icon
                    containerStyle={{height :60, marginTop: 10 ,  }}
                    size= {40}
                    name='home'
                    type='antdesign'
                    color={isActive ? 'blue' : '#778899'}
                    onPress={handleClick} 
                    />
                    <Icon
                    containerStyle={{height :60, marginTop: 10 }}
                    size= {40}
                    name='calendar-plus-o'
                    type='font-awesome'
                    color={isActive2 ? 'blue' : '#778899'}
                    onPress={handleClick2}
                    />
                    <Icon
                    containerStyle={{height :60, marginTop: 10 }}
                    size= {40}
                    name='diff-added'
                    type='octicon'
                    color={isActive3 ? 'blue' : '#778899'}
                    onPress={handleClick3}
                    />
                    <Icon
                    containerStyle={{height :60, marginTop: 10 , }}
                    size= {40}
                    name='user'
                    type='antdesign'
                    color={isActive4 ? 'blue' : '#778899'}
                    onPress={handleClick4}
                    />
                    

                    </View>
        </View>
    )
}

export default Explore1