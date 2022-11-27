import React from 'react';
import {Alert, Button, Text, View, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
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
          <ScrollView>
          <><View style={styles.row}>
              <Image style={styles.headerImage} source={require('../images/lostoriginlogo.png')} />
              <Text style={styles.textHeader}>Cards in this set: 196  +21 Secret</Text>
              <Text style={styles.textHeader}>Released Sept 9th 2022</Text>
          </View>
          <View style={styles.row}>
              <Image style={styles.cards} source={require('../images/lostorigin/mimikyu2.png')} />
              <Image style={styles.cards} source={require('../images/lostorigin/giratina.png')} />
              <Image style={styles.cards} source={require('../images/lostorigin/chandelure.png')} />
              <Image style={styles.cards} source={require('../images/lostorigin/rotom.png')} />
              <Image style={styles.cards} source={require('../images/lostorigin/orbeetle.png')} />
              <Image style={styles.cards} source={require('../images/lostorigin/magnezone.png')} />
          </View></>
          </ScrollView>
    );
}

FifthScreen.navigationOptions = {
    headerTitle: 'Add Place'
}

export default FifthScreen;