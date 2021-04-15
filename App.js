import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, SectionList, ScrollView, Modal } from 'react-native';
import AddReminder from './components/addReminder';

export default function App() {
  
  const [catagories, setCatagories] = useState([
    { name: 'Life', reminders: [{text:'an important thing',key:1},{text:'b',key:2},{text:'c',key:3}], key: 1, show: false},
    { name: 'Social', reminders: [{text:'d',key:1},{text:'b',key:2},{text:'c',key:3}], key: 2, show: false},
    { name: 'Work On', reminders: [{text:'a',key:1},{text:'e',key:2},{text:'c',key:3}], key: 3, show: false},
    { name: 'Jokes', reminders: [{text:'a',key:1},{text:'e',key:2},{text:'c',key:3}], key: 4, show: false},
  ]);
  {/* add a last variable so code can add key value */}
  const [update, updateCatagories] = useState(true);
  const [focus, setFocus] = useState(1);

  const [newCat,setNewCat] = useState('');

  const [reminder, setReminder] = useState('');

  {/*for add-reminder modal*/}
  const [modVis, setModVis] = useState(false);
  const [newRem, setNewRem] = useState("");
  const [keyHold, setKeyHold] = useState(1);

  const addReminder = (text) => {
    catagories[keyHold-1]['reminders'].push({text:text,id: catagories[keyHold-1]['reminders'].length+1 })
    setModVis(false)
    updateCatagories(!update)
    console.log(catagories[keyHold-1])
    console.log('ran')
  }

  const addCat = (name) => {
    catagories.push({name: name, reminders: [], key: (catagories.length+1)})
    updateCatagories(!update)
  }

  const showCat = (item) => {
    catagories[item.key-1].show = !(catagories[item.key-1].show)
    updateCatagories(!update)
  }

  const log = () => {
    setModVis(!modVis)
    console.log(catagories.length)
  }

  const newReminderView = (key) => {
    setModVis(true)
    setKeyHold(key)
  }

  function Reminders(props) {
    if (props.item.show) {
      return (
        <View>
        <FlatList 
            data={props.item.reminders} 
            renderItem={({ item }) => ( 
            <Text style={styles.reminder}>{item.text}</Text>
            )}
          />
        </View>
    )}
    else{
      return (null)
    }
  }

  return (
    
    <View style={styles.container}>

      {/*for adding reminders*/}
      <Modal visible={modVis}>
        <View style={styles.container}>

          <View style= {styles.exitRemOver}>
            <TouchableOpacity style ={styles.exitReminder} onPress = {() => log()}>
                <Text style={styles.addCatButton}>x</Text>
            </TouchableOpacity>
          </View>

          <TextInput 
            placeholder='Reminder' 
            style={styles.addRem}
            onChangeText={(value) => setNewRem(value)}
            onSubmitEditing={() => addReminder(newRem)}  
          />
        </View>
      </Modal>

      <TextInput 
        placeholder='Add Catagorie' 
        style={styles.addCat}
        onChangeText={(value) => setNewCat(value)}
        onSubmitEditing={() => addCat(newCat)}  
      />

      <FlatList 
        data={catagories} 
        extraData={update}
        renderItem={({ item }) => ( 
        <View> 
          
          <View style = {styles.catButtons}>
            <TouchableOpacity style ={styles.catExpand} onPress = {() => showCat(item)}>
              <Text style={styles.catagories}>{item.name}</Text>
            </TouchableOpacity>
            <TouchableOpacity style ={styles.addReminder} onPress = {() => newReminderView(item.key)}>
              <Text style={styles.addCatButton}>+</Text>
            </TouchableOpacity>
          </View>


          <Reminders item={item} />

        </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  
  addRem: {
    marginTop: 30,
    borderWidth: 1,
    padding: 5,
    paddingLeft: 10,
    fontSize: 25,
    borderColor: 'gray',
    borderRadius: 4,
  },

  exitRemOver: {
    alignItems: 'flex-end',
  },

  exitReminder: {
    borderWidth: 1,
    borderColor: 'red', 
    borderRadius: 6,
    padding: 5,
    margin: 0,
    alignItems: 'center',
    width: 40,
    backgroundColor: "red",
  },

  catButtons: {
    flex: 1,
    flexDirection: 'row',
  },
  addCatButton: {
    fontSize: 24,
  },
  addReminder: {
    borderWidth: 1,
    borderColor: 'gray', 
    borderRadius: 6,
    padding: 10,
    margin: 5,
    marginTop: 10,
    alignItems: 'center',
  },

  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#EAEAEA',
  },
  reminder: {
    padding: 30,
    fontSize: 20,
    borderWidth: 0,
    borderColor: 'gray', 
    borderRadius: 7,
    padding: 3,
    margin: 5,
    marginLeft: 15,
  },
  catagories: {
    fontSize: 24,
    justifyContent: 'flex-start',
  },
  catExpand: {
    borderWidth: 1,
    borderColor: 'gray', 
    borderRadius: 7,
    padding: 10,
    margin: 5,
    marginTop: 10,
    flex:20,
  },
  bottom: {
    height: 50,
  },
  addCat: {
    margin: 0,
    borderBottomWidth: 1,
    padding: 5,
    paddingLeft: 10,
    fontSize: 20,
    borderColor: 'gray',
  },
});
