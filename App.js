import React, { useState } from 'react';
import {Alert, View, TextInput, Text, Button, StyleSheet } from 'react-native';

// run: expo install expo-sms
// run: expo install expo-mail-composer
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  [message, setMessage] = useState();
  return (
    <AppNavigator />
  );

}

const styles = StyleSheet.create({
  form: {
      margin: 30,
      marginTop: 60 
  },
  label: {
      fontSize: 18,
      marginBottom: 30,
      textAlign: 'center'
  },
  buttonContainer: {
    paddingVertical: 40,
    flexDirection: 'row',
    marginBottom: '10%',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
      marginBottom: '10%',
      width: '40%',
  }  
});
