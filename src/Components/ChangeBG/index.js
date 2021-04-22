import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

export default  () =>  {
  const [firstTabColor, setFirstTabColor] = useState('#125315');
  const [secondTabColor, setSecondTabColor] = useState('#526378');

  const getColor = () => {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  }

  const onPress = (tab) => {
    if(tab === 1)
      setFirstTabColor(getColor());
    else
      setSecondTabColor(getColor());
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={firstTabColor} />
      <View style={[styles.firstTab, {backgroundColor: firstTabColor}]}>
        <TouchableOpacity onPress={() => onPress(1)}>
          <Text style={styles.text}>Change</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.secondTab, {backgroundColor: secondTabColor}]}>
      <TouchableOpacity onPress={() => onPress(2)}>
          <Text style={styles.text}>Change</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column'
  },
  firstTab: {
    flex: 2,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  secondTab: {
    flex: 2,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'black',
    padding: 5,
    backgroundColor: 'white',
    fontSize: 18,
    borderRadius: 10
  }
});
