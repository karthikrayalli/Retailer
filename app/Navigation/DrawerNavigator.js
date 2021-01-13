import * as React from 'react';
import { Button, View ,Text} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ContactNavigator } from "./StackNavigator";
import BottomTabNavigator from "./Tabnavigator";

    
const Drawer = createDrawerNavigator();
    
   const DrawerNavigator = () => {
      return (
       
          <Drawer.Navigator>
            <Drawer.Screen name="Home" component={BottomTabNavigator} />
            <Drawer.Screen name="Contact" component={ContactNavigator} />
          </Drawer.Navigator>
      );
    }
    export default DrawerNavigator;