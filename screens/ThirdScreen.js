import React from 'react';
import {Alert, Button, Text, View, TextInput} from 'react-native';
import {useState} from "react";
import { styles } from '../styles/styles';

const ThirdScreen = props => {
    return (
        <View style={styles.form}>
            <Image style={styles.headerImage} source={require('../images/Silver-Tempest.logo.354.png')}/>
        </View>
    );
}

ThirdScreen.navigationOptions = {
    headerTitle: 'Add Place'
}

export default ThirdScreen;