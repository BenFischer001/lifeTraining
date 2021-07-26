import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AddCat from './src/AddCat';

export default function App() {
  const [cats,setCats] = useState([{name: 'Life', id: 1}]);


  //have use effect to add cat using time for id, have maping inside displayCats 

  return (
    <View style={styles.container}>
      <AddCat setCats={setCats} cats={cats}/>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
