import React from 'react';
import { View , Text , Image , TouchableOpacity} from 'react-native';
import { CheckBox , Icon , Button} from 'react-native-elements';

const Riding = () => {
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
                <Text style={{fontSize: 33, fontWeight: '400' ,color: 'black'}}>Welcome</Text>
                <Text style={{fontSize: 20}}>Let choose your role </Text>
                
            </View>
            <View style={{
                marginTop: 40,
                flexDirection: 'row',
                justifyContent: 'space-evenly'
            }}>
                <Icon
                containerStyle={{marginTop: 100,}} 
                name='chevron-left'
                type='font-awesome'
                color='#1e95d0'
                onPress={() => console.log('hello')} />
                <Image source={require('../../../assets/images/ridingonboard.png')}
                style={{
                    width:300,
                    height:230
                }}
                    />
                <Icon
                containerStyle={{marginTop:100,}} 
                name='chevron-right'
                type='font-awesome'
                color='#1e95d0'
                onPress={() => console.log('hello')} />
            </View>
            <View style={{
                marginTop: 20,
                alignItems: 'center',
            }}>
                <Text style={{ fontSize: 25, fontWeight: '500', color: 'black'}}>I feel like <Text style={{color: '#1e95d0'}}>Riding </Text></Text>
            </View>
            <View>
                <Button
                title="Ride"
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
                    marginVertical: 10,
                    marginTop: 50,
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
            <View>
            <Button
                title="Explore"
                loading={false}
                loadingProps={{ size: 'small', color: 'white' }}
                buttonStyle={{
                    backgroundColor: 'white',
                    borderWidth: 2,
                    borderColor: '#1e95d0',
                    borderRadius: 8,
                }}
                titleStyle={{  fontSize: 25 , marginRight: 100 , color: '#1e95d0'}}
                containerStyle={{
                    marginHorizontal: 50,
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

export default Riding
