import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "../Components/HomeScreen";
import DetailsScreen from '../Components/DetailsScreen';
import Contact from '../Components/Contact';

const Stack = createStackNavigator();

const StackNavigator = () =>{
  return(
  
      <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen}/>
      <Stack.Screen name='Details' component={DetailsScreen}/>
      </Stack.Navigator>
 
  );
}
const ContactNavigator = () =>{
  return(
  
      <Stack.Navigator>
      <Stack.Screen name='Contact' component={Contact}/>
      </Stack.Navigator>
 
  );
}

export {StackNavigator,ContactNavigator} ;