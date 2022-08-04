import React from 'react';
import { View , Text , Image , Alert , TouchableOpacity}  from 'react-native';


const Icons = () => {
    return(
        <View style={{
            backgroundColor :'#1d91ca',
            height : 1000
        }}>
            <View style={{
                marginLeft: 20,
                marginTop: 20
            }}>
                <Text style={{fontSize: 25 , color: 'white'}}>Pop up icons</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly'
                
            }}>
            <View style={{
                marginLeft: 10,
                marginTop: 30
            }}>
                <View style={{
                    backgroundColor: 'white',
                    width: 50,
                    height: 50,
                    borderRadius :50/2,
                    resizeMode: 'contain'
                }}>
                    <TouchableOpacity onPress={() => Alert.alert('Fuel')}>
                    <Image source={require("../../../assets/images/fuel-station.png")} 
                    
                    style={{
                        marginTop: 8,
                        marginLeft: 8
                    }}/>
                    </TouchableOpacity>
                </View>
                <View style={{
                    marginTop: 10,
                    marginLeft: 10
                }}>    
                    <Text style={{fontSize: 15 , color: 'white'}}>Fuel</Text>
                </View>
            </View>
            <View style={{
                marginLeft: 30,
                marginTop: 30
            }}>
                <View style={{
                    backgroundColor: 'white',
                    width: 50,
                    height: 50,
                    borderRadius :50/2,
                    resizeMode: 'contain',
                    marginLeft: 10
                }}>
                    <TouchableOpacity onPress={() => Alert.alert('Ev')}>
                    <Image source={require("../../../assets/images/EV.png")} 
                    
                    style={{
                        marginTop: 8,
                        marginLeft: 10
                    }}/>
                    </TouchableOpacity>
                </View>
                <View style={{
                    marginTop: 10,
                    
                }}>    
                    <Text style={{fontSize: 15 , color: 'white'}}>EV Charging</Text>
                </View>
            </View>
            <View style={{
                marginLeft: 30,
                marginTop: 30
            }}>
                <View style={{
                    backgroundColor: 'white',
                    width: 50,
                    height: 50,
                    borderRadius :50/2,
                    resizeMode: 'contain'
                }}>
                    <TouchableOpacity onPress={() => Alert.alert('Traffic')}>
                    <Image source={require("../../../assets/images/traffic.png")} 
                    
                    style={{
                        marginTop: 5,
                        marginLeft: 5
                    }}/>
                    </TouchableOpacity>
                </View>
                <View style={{
                    marginTop: 10,
                    marginLeft: 5
                }}>    
                    <Text style={{fontSize: 15 , color: 'white'}}>Traffic</Text>
                </View>
            </View>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginTop: 10
                
            }}>
            <View style={{
                marginLeft: 0,
                marginTop: 30
            }}>
                <View style={{
                    backgroundColor: 'white',
                    width: 50,
                    height: 50,
                    borderRadius :50/2,
                    resizeMode: 'contain',
                    marginLeft: 10
                }}> 
                    <TouchableOpacity onPress={() => Alert.alert('Diversion')}>
                    <Image source={require("../../../assets/images/diversion.png")} 
                    
                    style={{
                        marginTop: 1,
                        marginLeft: 1
                    }}/>
                    </TouchableOpacity>
                </View>
                <View style={{
                    marginTop: 10,
                    marginLeft: 9
                }}>    
                    <Text style={{fontSize: 15 , color: 'white'}}>Diversion</Text>
                </View>
            </View>
            <View style={{
                marginLeft: 20,
                marginTop: 30
            }}>
                <View style={{
                    backgroundColor: 'white',
                    width: 50,
                    height: 50,
                    borderRadius :50/2,
                    resizeMode: 'contain',
                    marginLeft: 20
                }}>
                    <TouchableOpacity onPress={() => Alert.alert('Police')}>
                    <Image source={require("../../../assets/images/nakabandi.png")} 
                    onPress={() => Alert.alert('Simple Button pressed')}
                    style={{
                        marginTop: 8,
                        marginLeft: 10
                    }}/>
                    </TouchableOpacity>
                </View>
                <View style={{
                    marginTop: 10,
                    marginLeft: 25
                }}>    
                    <Text style={{fontSize: 15 , color: 'white'}}>Police</Text>
                </View>
            </View>
            <View style={{
                marginLeft: 30,
                marginTop: 30
            }}>
                <View style={{
                    backgroundColor: 'white',
                    width: 50,
                    height: 50,
                    borderRadius :50/2,
                    resizeMode: 'contain',
                    marginLeft: 20
                }}>
                    <TouchableOpacity onPress={() => Alert.alert('Accident')}>
                    <Image source={require("../../../assets/images/accident.png")} 
                    
                    style={{
                        marginTop: 5,
                        marginLeft: 5
                    }}/>
                    </TouchableOpacity>
                </View>
                <View style={{
                    marginTop: 10,
                    marginLeft: 15
                }}>    
                    <Text style={{fontSize: 15 , color: 'white'}}>Accident</Text>
                </View>
            </View>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginTop: 10
            }}>
            <View style={{
                marginLeft: 0,
                marginTop: 30
            }}>
                <View style={{
                    backgroundColor: 'white',
                    width: 50,
                    height: 50,
                    borderRadius :50/2,
                    resizeMode: 'contain',
                    marginLeft: 10
                }}>
                    <TouchableOpacity onPress={() => Alert.alert('Broken')}>
                    <Image source={require("../../../assets/images/broken-car.png")} 
                   
                    style={{
                        marginTop: 7,
                        marginLeft: 7
                    }}/>
                    </TouchableOpacity>
                </View>
                <View style={{
                    marginTop: 10,
                    marginLeft: 20
                }}>    
                    <Text style={{fontSize: 15 , color: 'white'}}>Car</Text>
                </View>
            </View>
            <View style={{
                marginLeft: 20,
                marginTop: 30
            }}>
                <View style={{
                    backgroundColor: 'white',
                    width: 50,
                    height: 50,
                    borderRadius :50/2,
                    resizeMode: 'contain',
                    marginLeft: 30
                }}>
                    <TouchableOpacity onPress={() => Alert.alert('waterlogging')}>
                    <Image source={require("../../../assets/images/water-logging.png")} 
                    
                    style={{
                        marginTop: 5,
                        marginLeft: 5
                    }}/>
                    </TouchableOpacity>
                </View>
                <View style={{
                    marginTop: 10,
                    marginLeft: 35
                }}>    
                    <Text style={{fontSize: 15 , color: 'white'}}>Water</Text>
                </View>
            </View>
            <View style={{
                marginLeft: 30,
                marginTop: 30
            }}>
                <View style={{
                    backgroundColor: 'white',
                    width: 50,
                    height: 50,
                    borderRadius :50/2,
                    resizeMode: 'contain',
                    marginLeft: 20
                }}>
                    <TouchableOpacity onPress={() => Alert.alert('oil')}>
                    <Image source={require("../../../assets/images/oil-spill.png")} 
                    
                    style={{
                        marginTop: 5,
                        marginLeft: 5
                    }}/>
                    </TouchableOpacity>
                </View>
                <View style={{
                    marginTop: 10,
                    marginLeft: 35
                }}>    
                    <Text style={{fontSize: 15 , color: 'white'}}>Oil</Text>
                </View>
            </View>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginTop: 10,
                
            }}>
            <View style={{
                marginLeft: 0,
                marginTop: 30
            }}>
                <View style={{
                    backgroundColor: 'white',
                    width: 50,
                    height: 50,
                    borderRadius :50/2,
                    resizeMode: 'contain',
                    marginLeft: 10
                }}>
                    <TouchableOpacity onPress={() => Alert.alert('Wet Road')}>
                    <Image source={require("../../../assets/images/wet-road.png")} 
                    
                    style={{
                        marginTop: 5,
                        marginLeft: 8
                    }}/>
                    </TouchableOpacity>
                </View>
                <View style={{
                    marginTop: 10,
                    marginLeft: 9
                }}>    
                    <Text style={{fontSize: 15 , color: 'white'}}>Wet road</Text>
                </View>
            </View>
            <View style={{
                marginLeft: 20,
                marginTop: 30
            }}>
                <View style={{
                    backgroundColor: 'white',
                    width: 50,
                    height: 50,
                    borderRadius :50/2,
                    resizeMode: 'contain',
                    marginLeft: 25
                }}>
                    <TouchableOpacity onPress={() => Alert.alert('Speed')}>
                    <Image source={require("../../../assets/images/speed-camera.png")} 
                    
                    style={{
                        marginTop: 8,
                        marginLeft: 10
                    }}/>
                    </TouchableOpacity>
                </View>
                <View style={{
                    marginTop: 10,
                    marginLeft: 30
                }}>    
                    <Text style={{fontSize: 15 , color: 'white'}}>Speed</Text>
                </View>
            </View>
            <View style={{
                marginLeft: 30,
                marginTop: 30
            }}>
                <View style={{
                    backgroundColor: 'white',
                    width: 50,
                    height: 50,
                    borderRadius :50/2,
                    resizeMode: 'contain',
                    marginLeft: 20
                }}>
                    <TouchableOpacity onPress={() => Alert.alert('Speed Limit')}>
                    <Image source={require("../../../assets/images/speedlimit.png")} 
                    
                    style={{
                        marginTop: 1,
                        marginLeft: 1
                    }}/>
                    </TouchableOpacity>
                </View>
                <View style={{
                    marginTop: 10,
                    marginLeft: 25
                }}>    
                    <Text style={{fontSize: 15 , color: 'white'}}>Speed</Text>
                </View>
            </View>
            
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginTop: 10
                
            }}>
            <View style={{
                marginLeft: 0,
                marginTop: 30
            }}>
                <View style={{
                    backgroundColor: 'white',
                    width: 50,
                    height: 50,
                    borderRadius :50/2,
                    resizeMode: 'contain',
                    marginLeft: 10
                }}>
                    <TouchableOpacity onPress={() => Alert.alert('Toll')}>
                    <Image source={require("../../../assets/images/toll-booth.png")} 
                    
                    style={{
                        marginTop: 5,
                        marginLeft: 5
                    }}/>
                    </TouchableOpacity>
                </View>
                <View style={{
                    marginTop: 10,
                    marginLeft: 20
                }}>    
                    <Text style={{fontSize: 15 , color: 'white'}}>Toll</Text>
                </View>
            </View>
            <View style={{
                marginLeft: 20,
                marginTop: 30
            }}>
                <View style={{
                    backgroundColor: 'white',
                    width: 50,
                    height: 50,
                    borderRadius :50/2,
                    resizeMode: 'contain',
                    marginLeft: 35
                }}>
                    <TouchableOpacity onPress={() => Alert.alert('Parking')}>
                    <Image source={require("../../../assets/images/parking-charge.png")} 
                    
                    style={{
                        marginTop: 8,
                        marginLeft: 8
                    }}/>
                    </TouchableOpacity>
                </View>
                <View style={{
                    marginTop: 10,
                    marginLeft: 35
                }}>    
                    <Text style={{fontSize: 15 , color: 'white'}}>Parking</Text>
                </View>
            </View>
            <View style={{
                marginLeft: 30,
                marginTop: 30
            }}>
                <View style={{
                    backgroundColor: 'white',
                    width: 50,
                    height: 50,
                    borderRadius :50/2,
                    resizeMode: 'contain',
                    marginLeft: 20
                }}>
                    <TouchableOpacity onPress={() => Alert.alert('Fallen')}>
                    <Image source={require("../../../assets/images/fallen-tree.png")} 
                    
                    style={{
                        marginTop: 5,
                        marginLeft: 5
                    }}/>
                    </TouchableOpacity>
                </View>
                <View style={{
                    marginTop: 10,
                    marginLeft: 25
                }}>    
                    <Text style={{fontSize: 15 , color: 'white'}}>Fallen</Text>
                </View>
            </View>
            </View>
        </View>
    )
}

export default Icons