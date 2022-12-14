import React from 'react';
import { View , Text  , TouchableOpacity ,Alert , Image , Button} from 'react-native';
import { CheckBox , Icon , Input } from 'react-native-elements';
import {useEffect , useState} from 'react';
import { useNavigation } from '@react-navigation/native';


const AddVehicle2 = () => {
    const navigation = useNavigation();
    const onPressed = () => {
        navigation.navigate('VehicleList')
    };
    // const [isVisible, setIsVisible] = useState(false);
    // const list = [
    // { title: 'List Item 1' },
    // { title: 'List Item 2' },
    // {
    // title: 'Cancel',
    // containerStyle: { backgroundColor: 'red' },
    // titleStyle: { color: 'white' },
    // onPress: () => setIsVisible(false),
    // },
    // ];
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
                    
                    <Text> Back </Text>
                </TouchableOpacity>
                
            </View>
            <View style={{
                padding: 15,
                marginLeft: 5,
                
            }}>
                <Text style={{fontSize: 26 ,fontWeight : '400', color: 'black'}}>About the vehicle</Text>
                <Input
                placeholder='Vehicle number'
                leftIcon={{ type: 'font-awesome', name: 'file-text-o' , color: 'grey'}}
                containerStyle={{marginTop: 10 , color: 'grey', height: 40}}
                keyboardType= 'numeric'
                />
                <Input
                placeholder='Vehicle Color'
                leftIcon={{ type: 'MaterialIcons', name: 'invert-colors', color: 'grey' }}
                keyboardType= 'default'
                containerStyle={{marginTop: 20 , color: 'grey', height: 40}}
                />
            </View>
            <View style={{
                marginLeft: 20,
                marginTop: 20,

            }}>
                <View>
                    <Text style={{fontSize: 26 ,fontWeight : '400', color: 'black'}}>Upload image </Text>
                </View>
                <View style={{
                    borderColor: 'grey',
                    borderWidth: 2,
                    borderStyle: 'dashed',
                    marginRight: 20,
                    height: 200,
                    marginTop: 20
                    
                }}>
                        <TouchableOpacity >
                        <Image source={require("../../../assets/images/upload.png")}
                        style={{
                        marginLeft: 125,
                        marginTop: 45,
                        resizeMode: 'contain'
                        }}/>
                            <Text style={{textAlign: 'center', marginTop: 20}}>Tap to Choose</Text>
                        </TouchableOpacity>
                        {/* <BottomSheet modalProps={{}} isVisible={isVisible}>
                        {list.map((l, i) => (
                        <ListItem
                        key={i}
                        containerStyle={l.containerStyle}
                        onPress={l.onPress}
                        >
                        <ListItem.Content>
                        <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
                        </ListItem.Content>
                        </ListItem>
                ))}
                        </BottomSheet> */}

                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                marginLeft: 20
                
            }}>
                <View style={{
                    marginTop: 30,
                    
                }}>
                    <Image source={require('../../../assets/images/Car.jpeg')}
                    style={{
                        height: 50,
                        width: 70
                    }}></Image>
                </View>
                <View style={{
                    marginTop: 30,
                    marginLeft: 30,
                }}>
                    <Text style={{ fontSize: 15, fontWeight: '400' , color: 'black'}}>car-image.jpg</Text>
                    <Text>64kb</Text>
                </View>    
                <View style={{
                    marginTop: 45,
                    marginLeft: 90
                }}>
                <Icon
                
                 name='delete'
                type='MaterialCommunityIcons'
                color='red'
                />
                    
                </View>
            </View>
            <View style={{
                height: 200,
                marginLeft: 10,
                marginRight : 10,
                marginTop : 30,
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

export default AddVehicle2