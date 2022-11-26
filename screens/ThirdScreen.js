import React from 'react';
import {Alert, Button, Text, View, TextInput, Image, ScrollView} from 'react-native';
import {useState} from "react";
import { styles } from '../styles/styles';

const ThirdScreen = props => {
    return (
        <ScrollView>
        <><View style={styles.row}>
            <Image style={styles.headerImage} source={require('../images/Silver-Tempest.logo.354.png')} />
            <Text style={styles.textHeader}>Cards in this set: 195  +20 Secret</Text>
            <Text style={styles.textHeader}>Released Nov 11th 2022</Text>
        </View>
        <View style={styles.row}>
            <Image style={styles.cards} source={require('../images/venonat.jpg')} />
            <Image style={styles.cards} source={require('../images/Venomoth.jpg')} />
            <Image style={styles.cards} source={require('../images/Spinarak.png')} />
            <Image style={styles.cards} source={require('../images/Ariados.png')} />
            <Image style={styles.cards} source={require('../images/Sunkern.png')} />
        </View></>
        </ScrollView>
    );
}

ThirdScreen.navigationOptions = {
    headerTitle: 'Add Place'
}

export default ThirdScreen;