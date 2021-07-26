import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function AddCat({ cats, setCats }) {
    const [textIn,setTextIn] = useState('');

    const handleSubmit = (cats, setCats, textIn) => {
        let updatedCats = [...cats]
        updatedCats.push({id:2, name: textIn})
        setCats(updatedCats)
    }

    return (
        <View>
            <TextInput style={styles.input} 
            onChangeText={(value) => setTextIn(value)}
            onSubmitEditing={() => handleSubmit(cats, setCats, textIn)} />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      
      width: 190,
      margin: 12,
      borderWidth: 1,
    },
  });