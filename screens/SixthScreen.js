import React from 'react';
import {Alert, Button, Text, View, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import {useState} from "react";
import { styles } from '../styles/styles';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

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
      <LinearGradient
        colors={['#4b3a5e', '#8cc4cf', '#d6e6e6', 'transparent']}
        style={styles.background}   
        />
      <View style={styles.row3}>
          <View style={styles.space3} />
          <Text style={styles.title2}>POKÉMON TCG: SWORD & SHIELD SILVER TEMPEST</Text>
          <View style={styles.space3} />
          <View style={styles.cardWrapper}>
            <Image style={styles.cards2} source={require('../images/earthenSeal.jpg')} />
            <Image style={styles.cards2} source={require('../images/forestSeal.jpg')} />
          </View>
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