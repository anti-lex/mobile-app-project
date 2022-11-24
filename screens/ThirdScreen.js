import React from 'react';
import {Alert, Button, Text, View, TextInput, Image} from 'react-native';
import {useState} from "react";
import { styles } from '../styles/styles';

const ThirdScreen = props => {
    return (
        <View style={styles.form}>
            <Image style={styles.headerImage} source={require('../images/Silver-Tempest.logo.354.png')}/>
            <Text style={styles.textHeader}>Cards in this set: 195 +20 Secret</Text>
            <Text style={styles.textHeader}>Released Nov 11th 2022</Text>
        </View>
    );
}

ThirdScreen.navigationOptions = {
    headerTitle: 'Add Place'
}

export default ThirdScreen;