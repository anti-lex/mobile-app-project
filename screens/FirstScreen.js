import React, { useState } from 'react';
import { View, Text, Platform, TextInput, Button, Image, ScrollView, TouchableOpacity } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CustomHeaderButton from '../components/CustomHeaderButton';
import { styles } from '../styles/styles';
const FirstScreen = (props) => {
    const [titleValue, setTitleValue] = useState('');

/*     React.useLayoutEffect(() => {
        props.navigation.setOptions({
          headerRight: () => (
            <><HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item />
            </HeaderButtons>
            <Text style={styles.headerText}>TCG Library</Text></>
          ),
         });
      }, []); */

    return (
        <View style={styles.form}>
            <ScrollView>
              <TouchableOpacity onPress={() => props.navigation.navigate('ScreenTwo') }>
                <Image style={styles.images} source={require('../images/evoskies.jpg')}/>
              </TouchableOpacity>
              <View style={styles.space} /> 
              <Image style={styles.images} source={require('../images/silvertemp.jpg')}/>
              <View style={styles.space} /> 
              <Image style={styles.images} source={require('../images/cosmic.jpg')}/>
              <View style={styles.space} /> 
              <Image style={styles.images} source={require('../images/lostorigin.jpg')}/>
              <View style={styles.space} /> 
              <Image style={styles.images} source={require('../images/chilling.jpg')}/>
            </ScrollView>
        </View>
    );
}

export default FirstScreen;