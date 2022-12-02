import React from 'react';
import {Alert, Button, Text, View, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import {useState} from "react";
import { styles } from '../styles/styles';
import { Ionicons } from '@expo/vector-icons';

const SecondScreen = (props) => {
    React.useLayoutEffect(() => {
        props.navigation.setOptions({
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
          <Image style={styles.headerImage} source={require('../images/evoskies/evoskieslogo.png')} />
          <Text style={styles.textHeader}>Cards in this set: 203  +34 Secret</Text>
          <Text style={styles.textHeader}>Released Aug 27th 2021</Text>
      </View>
      <View style={styles.row}>
          <Image style={styles.cards} source={require('../images/evoskies/sylveon.jpg')} />
          <Image style={styles.cards} source={require('../images/evoskies/leafeon.jpg')} />
          <Image style={styles.cards} source={require('../images/evoskies/rayquaza.jpg')} />
          <Image style={styles.cards} source={require('../images/evoskies/volcarona.jpg')} />
          <Image style={styles.cards} source={require('../images/evoskies/gigalith.jpg')} />
          <Image style={styles.cards} source={require('../images/evoskies/golurk.jpg')} />
      </View></>
      </ScrollView>
    );
}

SecondScreen.navigationOptions = {
    headerTitle: 'Add Place'
}

export default SecondScreen;
