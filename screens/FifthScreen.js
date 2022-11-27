import React from 'react';
import {Alert, Button, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import {useState} from "react";
import { styles } from '../styles/styles';
import { Ionicons } from '@expo/vector-icons';

const FifthScreen = (props) => {
    React.useLayoutEffect(() => {
        props.navigation.setOptions({
          headerRight: () => (
            <TouchableOpacity
                onPress={() => props.navigation.navigate('ScreenTwo')}>
                <Ionicons name="search-outline" size={32} color="black" />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity
                onPress={() => props.navigation.navigate('ScreenOne')}>
                <Ionicons name="arrow-back-outline" size={32} color="black" />
            </TouchableOpacity>
          ),
        });
      }, []); 
    
    return (
        <View style={styles.form}>
            <Text style={styles.label3}>Email</Text>
        </View>
    );
}

FifthScreen.navigationOptions = {
    headerTitle: 'Add Place'
}

export default FifthScreen;