import React, { useState } from 'react';
import { View, Text, Platform, TextInput, Button, Image, ScrollView, TouchableOpacity } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import CustomHeaderButton from '../components/CustomHeaderButton';
import { styles } from '../styles/styles';
import { CardStyleInterpolators } from '@react-navigation/stack';
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
            <View style = {styles.row2}>
              <TouchableOpacity onPress={() => props.navigation.navigate('ScreenSix')}>
                <Ionicons style= {styles.footer} name="home-outline" size={32} color="black" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => props.navigation.navigate('ScreenOne')}>
                <Ionicons style= {styles.footer2} name="list-outline" size={32} color="black" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => props.navigation.navigate('ScreenSeven')}>
                <Ionicons style= {styles.footer2} name="person-circle-outline" size={32} color="black" />
              </TouchableOpacity>
              <Ionicons style= {styles.footer2} name="add-circle-outline" size={32} color="black" />
              <Ionicons style= {styles.footer2} name="settings-outline" size={32} color="black" />
            </View>
        </View>
    );
}

export default FirstScreen;