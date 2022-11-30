import React from 'react';
import {Alert, Button, Text, View, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import {useState} from "react";
import { styles } from '../styles/styles';
import { Ionicons } from '@expo/vector-icons';

const FourthScreen = (props) => {
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
      <View style={styles.row3}>
          <View style={styles.space} />
          <Text style={styles.title}>POKÉMON TCG: SWORD & SHIELD SILVER TEMPEST</Text>
          <View style={styles.space} />
          <Text>Grant a VSTAR Power to any Pokémon V with these special Pokémon Tool cards! Attach Forest Seal Stone to</Text>
          <Text>your Pokémon V to gain the Star Alchemy Ability. Use this VSTAR Power to search your deck for a card and put it</Text>
          <Text>in your hand, perfect for finding that one card you need at any point in the game. You can also go on the</Text>
          <Text>offensive by attaching Earthen Seal Stone to any of your Pokémon V to gain the Star Gravity attack, which puts</Text>
          <Text>damage counters on each of your opponent's Pokémon V until its remaining HP is 100. Rock the boat with these</Text>
          <Text>powerful Pokémon Tool cards that make any Pokémon stellar</Text>
      </View>
      </ScrollView>
    );
}

FourthScreen.navigationOptions = {
    headerTitle: 'Add Place'
}

export default FourthScreen;