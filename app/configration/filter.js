import React, { Component } from 'react';
 
import { StyleSheet, Text, View, Alert, ScrollView, Platform, TouchableOpacity,Button} from 'react-native';
const numbers = [1, 2, 3, 4, 5];
numbers.push(6,7); 
numbers.unshift(1,2);
numbers.splice(2,0,'a');


export default class Config extends Component{
    constructor(props){
        super(props);
        this.state ={
            data : [
                { id: 1, name: "John Doe" },
                { id: 2, name: "Victor Wayne" },
                { id: 3, name: "Jane Doe" }],
            numbers : [1, 2, 3, 4, 5],
            num:['spray', 'limit', 'elite', 'exuberant ,', 'destruction ,', 'present']
        }
    }

  render(){
    const jam = this.state.numbers.filter(numbers => numbers * 3);
    console.log(jam);
    return (
  
      <View style={styles.MainContainer}>
          {this.state.data.filter(data => data.id === 3).map(data => (//filtewr is used to shoe the specific object in the array no to display in UI we should use map to display specific element
          <Text>{data.name}</Text>))}
          {this.state.num.filter(num => num.includes('s')).map(num => (
              <Text>{num}</Text>))}
         <Text>{jam}</Text>
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