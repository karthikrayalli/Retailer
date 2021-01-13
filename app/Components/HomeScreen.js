import React, { Component } from 'react';
import {View,Text,StyleSheet, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
 
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Go to Details screen" 
      onPress={() => navigation.navigate("Details",{homeId:89,otherParam:"Anything"})}/>
      
    </View>
  );
}
export default HomeScreen;