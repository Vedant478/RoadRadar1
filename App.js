/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,

} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Navigation from './src/Navigation';
import Welcome from './src/screens/Welcome/Welcome';
import Riding from './src/screens/Riding/Riding';
import Carpool from './src/screens/Carpool/Carpool';
import Explore1 from './src/screens/Explore-1/Explore1';
import Icons from './src/screens/Icons/Icons';
import Destination from './src/screens/Destination/Destination';
import Carpool2 from './src/screens/Carpool2/Carpool2';
import Choose from './src/screens/Choose/Choose';
import Ridingfeel from './src/screens/RidingFeel/Ridingfeel';
import SelectVehicle from './src/screens/SelectVehicle/SelectVehicle';
import RideSelect from './src/screens/RideSelect/RideSelect';
import CarpoolList from './src/screens/CarpoolList/CarpoolList';


import Calender2 from './src/screens/Calender/Calender2';
import Map2 from './src/screens/Map2/Map';
import Time2 from './src/screens/Time/Time2.js';
import BottomSheetComponent from './src/components/Bottomshet/Bottomsheet';
const App = () => {
  

  
  return (
   
    //  <Navigation />
    // <Calender2/>
    // <Time2/>
      // <Explore1/>
        // <Map2/>
    // <Carpool/>
   <BottomSheetComponent/>
  )
  // return (
  //   <SafeAreaView style={backgroundStyle}>
  //     <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
  //     <ScrollView
  //       contentInsetAdjustmentBehavior="automatic"
  //       style={backgroundStyle}>
  //       {/*<SignUpScreen/>*/}
  //       {/*<DrivingLicence/>*/}
  //       {/*<AddVehicle1 />*/}
  //       {/*<AddVehicle2/>*/}
  //       {/*<VehicleList/>*/}
  //       {/*<Parking/>*/}
  //       {/*<AddParking/>*/}
  //       <Navigation />
  //       {/*<Welcome/>*/}
  //       {/*<Riding/>*/}
  //       {/*<Carpool/>*/}
  //       {/*<Explore1/>*/}
  //       {/*<Icons/>*/}
  //       {/*<Destination/>*/}
  //       {/*<Carpool2/>*/}
  //       {/*<Choose/>*/}
  //       {/*<Ridingfeel/>*/}
  //       {/*<SelectVehicle/>*/}
  //       {/*<RideSelect/>*/}
  //       {/*<CarpoolList/>*/}
  //     </ScrollView>
  //   </SafeAreaView>
  // );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
