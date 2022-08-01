import React from 'react';
import { View , Text , Image , Button , Alert} from 'react-native';
import { CheckBox , Icon , Input } from 'react-native-elements';
import {useEffect , useState} from 'react';


const AddParking = () => {
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);

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
                   <Text style={{fontSize: 35, fontWeight: 'bold' ,color: 'black'}}>Add Parking</Text>
   
                   
                   
               </View>
               <View style={{
                   flexDirection: 'row',
                   marginLeft: 20
                   
               }}>
                   <View style={{
                       marginTop: 30,
                   }}>
                       <Image source={require('../../../assets/images/Parking.png')}></Image>
                   </View>
                   <View style={{
                       marginTop: 40,
                       marginLeft: 30,
                   }}>
                       <Text style={{ fontSize: 15, fontWeight: '400' , color: 'black'}}>Four Wheeler</Text>
                       <Text>A-18 Cb road | EV</Text>
                   </View>
                       
                   <View style={{
                       marginTop: 30,
                       marginLeft: 70,
                       marginRight: 30,
                       flexDirection: 'row',
                       
                   }}>
                      
                   <Icon
                   containerStyle={{
                       marginTop: 15 ,
                   }}
                    name='delete'
                   type='MaterialCommunityIcons'
                   color='red'
                   />
                   
                   </View>
               </View> 
               
               <View style={{
                   marginTop: 30,
                   marginLeft: 20,
                   flexDirection: 'row'
               }}>
                   <Text style={{fontSize: 26 ,fontWeight : '400', color: 'black'}}>Add More</Text>
                   <Icon 
                       containerStyle={{
                           marginLeft: 10,
                           marginTop: 5
                       }}
                       name='plus'
                       type='font-awesome'
                       
                       />
               </View> 
               <View style={{
                   height: 200,
                   marginLeft: 10,
                   marginRight : 10,
                   marginTop : 400,
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

export default AddParking