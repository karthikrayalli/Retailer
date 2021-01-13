import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { StackNavigator, ContactNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={StackNavigator} />
      <Tab.Screen name="Contact" component={ContactNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;