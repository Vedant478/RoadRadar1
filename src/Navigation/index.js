import React from 'react';
import { View , Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from '../screens/SignUpScreen';
import DrivingLicence from '../screens/DrivingLicence/Drivinglicence';
import AddVehicle1 from '../screens/AddVehicle1/AddVehicle1';
import AddVehicle2 from '../screens/AddVehicle2/AddVehicle2';
import VehicleList from '../screens/VehicleList/VehicleList';
import Parking from '../screens/Parking/Parking';
import AddParking from '../screens/AddParking/AddParking';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    

    return(
        
        <NavigationContainer>
            <Stack.Navigator initialRouteName='AddVehicle2' screenOptions={{headerShown: false}} >
                <Stack.Screen name='Signup' component={SignUpScreen}/>
                <Stack.Screen name='Driving' component={DrivingLicence}/>
                <Stack.Screen name='AddVehicle1' component={AddVehicle1}/>
                <Stack.Screen name='AddVehicle2' component={AddVehicle2}/>
                <Stack.Screen name='VehicleList' component={VehicleList}/>
                <Stack.Screen name='Parking' component={Parking}/>
                <Stack.Screen name='AddParking' component={AddParking}/>
                
            </Stack.Navigator>
        </NavigationContainer>
       
)
}

export default Navigation