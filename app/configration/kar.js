import React, { Component } from 'react';
 
import { StyleSheet, Text, View, Alert, ScrollView, Platform, TouchableOpacity,Button} from 'react-native';

numbers.push(6,7); 
numbers.unshift(1,2);
numbers.splice(2,0,'a');

export default class Config extends Component{
    constructor(props){
        super(props);
        this.state ={
         numbers : [1, 2, 3, 4, 5],
         myAwesomeArray : [
            { id: 1, name: "john" },
            { id: 2, name: "Ali" },
            { id: 3, name: "Mass" },
          ]
        }
    }

   // for (let i = 0;i < this.state.days.length;i++)
    //console.log(this.state.days[i]);//Here all the values are executing
  render() {
    const arr = this.state.myAwesomeArray.forEach(element => console.log(element.name));//only executes here
    const startForEach = performance.now()
 myAwesomeArray.forEach(x => (x + x) * 10000000000)//it is not chainable
 const endForEach = performance.now()
 console.log(`Speed [forEach]: ${endForEach - startForEach} miliseconds`)
    return (
 
      <View style={styles.MainContainer}>
           {this.state.name.map((value) => (// if we are using the objects we use key as value.id
            <Text>{value}</Text>))}
            {this.state.myAwesomeArray.map((element,value) => (
            <Text key={value}>{element.name}</Text>))}
      </View>
    );
  }
}
const styles = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    margin: 2,
 
  }
 
});