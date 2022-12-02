import React from 'react';
import {Alert, Button, Text, View, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import { styles } from '../styles/styles';
import { Ionicons } from '@expo/vector-icons';

const EighthScreen = (props) => {
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
          <Image style={styles.headerImage} source={require('../images/chilling/chilling.jpg')} />
          <Text style={styles.textHeader2}>Cards in this set: 198  +35 Secret</Text>
          <Text style={styles.textHeader2}>Released Jun 18th 2021</Text>
      </View>
      <View style={styles.row}>
          <Image style={styles.cards} source={require('../images/chilling/moltres.jpg')} />
          <Image style={styles.cards} source={require('../images/chilling/zeraora.jpg')} />
          <Image style={styles.cards} source={require('../images/chilling/metagross.jpg')} />
          <Image style={styles.cards} source={require('../images/chilling/porygon.jpg')} />
          <Image style={styles.cards} source={require('../images/chilling/runerigus.jpg')} />
          <Image style={styles.cards} source={require('../images/chilling/volcarona.jpg')} />
      </View></>
      </ScrollView>
    );
}

EighthScreen.navigationOptions = {
    headerTitle: 'Add Place'
}

export default EighthScreen;