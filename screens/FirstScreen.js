import React, { useState } from 'react';
import { View, Text, Platform, TextInput, Button, Image, ScrollView, TouchableOpacity } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import CustomHeaderButton from '../components/CustomHeaderButton';
import { styles } from '../styles/styles';
const FirstScreen = (props) => {
    const [titleValue, setTitleValue] = useState('');

    React.useLayoutEffect(() => {
      props.navigation.setOptions({
        headerRight: () => (
          <TouchableOpacity
              onPress={() => props.navigation.navigate('ScreenTwo')}>
              <Ionicons name="search-outline" size={32} color="black" />
          </TouchableOpacity>
        ),
      });
    }, []); 

    return (
        <View style={styles.form}>
            <ScrollView>
              <TouchableOpacity onPress={() => props.navigation.navigate('ScreenTwo') }>
                <Image style={styles.images} source={require('../images/evoskies.jpg')}/>
              </TouchableOpacity>
              <View style={styles.space} /> 
              <TouchableOpacity onPress={() => props.navigation.navigate('ScreenThree') }>
                <Image style={styles.images} source={require('../images/silvertemp.jpg')}/>
              </TouchableOpacity>
              <View style={styles.space} /> 
              <TouchableOpacity onPress={() => props.navigation.navigate('ScreenFour') }>
                <Image style={styles.images} source={require('../images/cosmic.jpg')}/>
              </TouchableOpacity>
              <View style={styles.space} />
              <TouchableOpacity onPress={() => props.navigation.navigate('ScreenFive') }>
                <Image style={styles.images} source={require('../images/lostorigin.jpg')}/>
              </TouchableOpacity> 
              <View style={styles.space} /> 
              <Image style={styles.images} source={require('../images/chilling.jpg')}/>
            </ScrollView>
        </View>
    );
}

export default FirstScreen;