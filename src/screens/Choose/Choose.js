import React from 'react';
import { View , Text } from 'react-native';
import { CheckBox , Icon , Button} from 'react-native-elements';

const Choose = () => {
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
                <Text style={{fontSize: 30, fontWeight: '400' ,color: 'black'}}>Getting things ready</Text>
                <Text style={{fontSize: 15}}>When do you want to drive? </Text>
                
            </View>
            <View>
                <Button
                title="Drive Now"
                loading={false}
                loadingProps={{ size: 'small', color: 'white' }}
                buttonStyle={{
                    backgroundColor: '#1e95d0',
                    borderRadius: 8,
                }}
                titleStyle={{  fontSize: 20 , marginRight: 80 }}
                containerStyle={{
                    marginLeft: 50,
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
            <View>
            <Button
                title="Schedule"
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

export default Choose