import React from 'react';
import {Alert, Button, Text, View, TextInput} from 'react-native';
import {useState} from "react";
import { styles } from '../styles/styles';

const SecondScreen = props => {
    return (
        <View style={styles.form}>
            <Text style={styles.label3}>Email</Text>
        </View>
    );
}

SecondScreen.navigationOptions = {
    headerTitle: 'Add Place'
}

export default SecondScreen;
