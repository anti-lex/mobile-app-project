import React from 'react';
import {Alert, Button, Text, View, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import {useState} from "react";
import { styles } from '../styles/styles';
import { Ionicons } from '@expo/vector-icons';

const SecondScreen = (props) => {
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
          <Image style={styles.headerImage} source={require('../images/evoskies/evoskieslogo.png')} />
          <Text style={styles.textHeader}>Cards in this set: 203  +34 Secret</Text>
          <Text style={styles.textHeader}>Released Aug 27th 2021</Text>
      </View>
      <View style={styles.row}>
          <Image style={styles.cards} source={require('../images/silvertempest/venonat.jpg')} />
          <Image style={styles.cards} source={require('../images/silvertempest/Venomoth.jpg')} />
          <Image style={styles.cards} source={require('../images/silvertempest/Spinarak.png')} />
          <Image style={styles.cards} source={require('../images/silvertempest/Ariados.png')} />
          <Image style={styles.cards} source={require('../images/silvertempest/Sunkern.png')} />
          <Image style={styles.cards} source={require('../images/silvertempest/Sunflora.png')} />
      </View></>
      </ScrollView>
    );
}

SecondScreen.navigationOptions = {
    headerTitle: 'Add Place'
}

export default SecondScreen;
