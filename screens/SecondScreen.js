import React from 'react';
import {Alert, Button, Text, View, TextInput} from 'react-native';
import {useState} from "react";
import { styles } from '../styles/styles';

const SecondScreen = props => {
    return (
        <View style={styles.form}>
            <Text style={styles.label3}>Email</Text>
            <View style={styles.space} /> 
            <TextInput 
                style={styles.textInput} 
                multiline
                numberOfLines={1}
                onChangeText={onChangeHandler} 
            />
            <View style={styles.space} /> 
            <Text style={styles.label3}>Message</Text>
            <View style={styles.space} /> 
            <TextInput 
                style={styles.textInput} 
                multiline
                numberOfLines={10}
                onChangeText={onChangeHandler2} 
            />
            <View style={styles.space} /> 
            <Button style={styles.button} color="#000000" title="Send Email" onPress={ () => { sendMessageWithEmail(); }} />
        </View>
    );
}

SecondScreen.navigationOptions = {
    headerTitle: 'Add Place'
}

export default SecondScreen;
