import React, { Component } from 'react';
 
import { StyleSheet, Text, View, Alert, ScrollView, Platform, TouchableOpacity,Button} from 'react-native';

let n=0;//initialization
while(n<5){ //condition
if (n%2==0)
console.log(n);
n++//increment
}
let p=6;//initialization
do{ 
if (p%2==0)// this executes the statements atleast once if the condition is false
console.log(p);
p++//increment
}while(p<5);//condition


export default class Config extends Component{
    constructor(props){
        super(props);
        this.state ={
            scores : [98,45,33,47,100,80],
            data : [
                { id: 1, name: "John Doe" },
                { id: 2, name: "Victor Wayne" },
                { id: 3, name: "Jane Doe" }],
            source : [
                    { id: 1, name: "karthik" },
                    { id: 5, name: "ramu" },
                    { id: 6, name: "dev" }],
            numbers : [1, 2, 3, 4, 5],
            num:['spray', 'limit', 'elite', 'exuberant ,', 'destruction ,', 'present'],
            car:[2.1,2.3],
           
            
        };
    }

  render(){
    const jamu= this.state.numbers.map(numbers => numbers * 3);
    const totalScores = this.state.scores.reduce(
        (previousScore, currentScore, index)=>previousScore+currentScore,0);
    const arr = this.state.car.map(Math.round);
    const Total = this.state.data.reduce((prevValue, currentValue) => prevValue + currentValue.id,
    0);
    const Arr = this.state.car.filter(n => n > 0); // it should be condition for filter no changing the value
    const jam = this.state.numbers.filter((numbers) => numbers < 5);
   
    const yar = this.state.data.map(obj => this.state.source.find(o => o.id === obj.id) || obj);// this will execute if there is the same id
    console.log(yar);
    return (
  
      <View style={styles.MainContainer}>
          <Text>{totalScores}</Text>
          <Text>{Total}</Text>
          <Text>{jam}</Text>
          {this.state.data.filter(data => data.id === 3).map(data => (//filtewr is used to shoe the specific object in the array no to display in UI we should use map to display specific element
          <Text>{data.name}</Text>))}
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