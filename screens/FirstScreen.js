import React, { useState } from 'react';
import { View, Text, Platform, TextInput, Button, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles/styles';
const FirstScreen = (props) => {
    const [titleValue, setTitleValue] = useState('');
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
              <TouchableOpacity onPress={() => props.navigation.navigate('ScreenEight') }>
                <Image style={styles.images} source={require('../images/chilling.jpg')}/>
              </TouchableOpacity>
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
            </View>
        </View>
    );
}

export default FirstScreen;