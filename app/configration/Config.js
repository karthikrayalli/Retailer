import React, { Component } from 'react';
 
import { StyleSheet, Text, View, Alert, ScrollView, Platform, TouchableOpacity,Button} from 'react-native';

const myAwesomeArray = [1, 2, 3, 4, 5]

export default class Config extends Component{
    constructor(props){
        super(props);
        this.state ={
            
myAwesomeArray : [
    { id: 1, name: "john" },
    { id: 2, name: "Ali" },
    { id: 3, name: "Mass" },
  ],
  days: ["Lundi","Mardi","Mercredi"]
            
        }
    }

  render(){
  for (let i = 0;i < this.state.days.length;i++)
  //Here all the values are executing
    return (
  
      <View style={styles.MainContainer}>
         <Text>{this.state.days[i]}</Text>
         
      </View>//here only one value is
    );
  }
}
 
const styles = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    margin: 2,
 
  }
 
});