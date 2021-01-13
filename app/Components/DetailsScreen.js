import React from 'react';
import { View, Text ,Button} from 'react-native';

 const DetailsScreen = ({route,navigation}) => {
  const { homeId, otherParam } = route.params;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>HomeId:{JSON.stringify(homeId)}</Text>
        <Text>Param:{JSON.stringify(otherParam)}</Text>
        <Button title="Go to Home" 
        onPress={() => navigation.navigate("Home")}/>
      </View>
    );
    }
  export default DetailsScreen;