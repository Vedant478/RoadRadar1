import React, { useState } from 'react'
import DatePicker from 'react-native-date-picker'
import { View , Text, Alert , Image, TextInput } from 'react-native';
import { CheckBox , Icon , Input , Switch , Button} from 'react-native-elements';

const Time2 = () => {
  const [date, setDate] = useState(new Date())
  const [check1, setCheck1] = useState(false);

  return (
    <View>
      <View style={{
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: 'white',
                padding: 10,
                marginLeft: 10,
                marginRight: 10,
                marginTop: 10,
            }}>
                <Text style={{fontSize: 30, fontWeight: '400' ,color: 'black'}}>Schedule for later </Text>
                <Text style={{fontSize: 15}}>Choose Time</Text>
                
            </View>
      <View style={{
        marginLeft:75,
      }}>
        <DatePicker date={date} onDateChange={setDate} 
        androidVariant = 'nativeAndroid'
        mode="time"
        />
      </View>
      <View style={{
                flexDirection: 'row',
                marginLeft: 30
                
            }}>
            <CheckBox
                containerStyle={{
                    borderWidth: 0,
                    marginTop: 15,
                    width: 20,
                }}
                center
                
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={check1}
                onPress={() => setCheck1(!check1)}
                />
            <View style={{
                flexDirection: 'row',
                marginTop: 25
            }}>
                <Text style={{fontSize:15 , fontWeight: '700', color: 'black'}}>Tomorrow</Text>
                <Text style={{fontSize:15}}>- 9th August , 2022</Text>
            </View>    
            </View>
            <View style={{
                flexDirection: 'row',
                marginLeft: 10,
                
            }}>
                <View style={{
                    marginTop: 17,
                    marginLeft: 20,
                }}>
                    <Image source={require('../../../assets/images/startloc.png')} 
                    style={{
                        marginLeft: 11
                    }}/>
                    <Image source={require('../../../assets/images/connector.png')} 
                    style={{
                    marginLeft: 17,
                    }}/>
                    <Image source={require('../../../assets/images/endloc.png')}/>
                </View>
                <View>
                <TextInput
                    placeholder='Enter Address'
                    style={{ width: 300, }}
                />
                <TextInput
                    placeholder='Enter Destination'
                    style={{ width: 300, }}
                />
                
                

                </View>
            </View>
            <View>
            <Button
                title="Continue"
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
export default Time2