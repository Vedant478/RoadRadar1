import React  , {useEffect , useState} from 'react';
import { View , Text  , TextInput} from 'react-native';
import { CheckBox , Input  , } from 'react-native-elements';


const CustomInput = () => {
const [male,setMale] = useState(false);
const [female,setFemale] = useState(false);
const [other,setOther] = useState(false);

return(
    <View style={{
        backgroundColor: "white",
        padding: 10
        
        


    }}><View style={{
        marginBottom: 20
    }}> 
        <Input
            placeholder='Full name'
            leftIcon={{ type: 'font-awesome', name: 'pencil' , color: 'grey'}}
            containerStyle={{marginTop: 10 , color: 'grey', height: 40}}
            
            />
        </View>
        <View>
        <Input
            placeholder='Age'
            leftIcon={{ type: 'font-awesome', name: 'smile-o' , color: 'grey'}}
            containerStyle={{marginTop: 10 , color: 'grey', height: 40}}
            keyboardType= 'numeric'
            />
        </View>            
        <View style={{
            flexDirection: 'row',
            marginRight: 10,
            backgroundColor: 'white',
            marginTop: 15
            
             
        }}>
            <CheckBox
            title="Male"
            center
            checked={male}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            onPress={() => setMale(!male)}
            />
            <CheckBox
            title="Female"
            center
            checked={female}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            onPress={() => setFemale(!female)}

            />
            <CheckBox
            title="Other"
            center
            checked={other}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            onPress={() => setOther(!other)}
            />
        </View>

       
        

    </View>
    
)
}
export default CustomInput