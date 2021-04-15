import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import App from './../App';

export default function AddReminder() {

  return (
    <View>
      
      <TouchableOpacity style ={styles.catExpand} onPress = {() => App.setNewReminder(false)}>
              <Text style={styles.catagories}>x</Text>
      </TouchableOpacity>

      <TextInput 
        style={styles.input} 
        placeholder='new reminder...' 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 20,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
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
});