import React from 'react';
import {Alert, Button, Text, View, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import { styles } from '../styles/styles';
import { Ionicons } from '@expo/vector-icons';

const FourthScreen = (props) => {
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
          <Image source={require('../images/cosmiclogo.jpg')} />
          <Text style={styles.textHeader2}>Cards in this set: 236  +35 Secret</Text>
          <Text style={styles.textHeader2}>Released Nov 1th 2019</Text>
      </View>
      <View style={styles.row}>
          <Image style={styles.cards} source={require('../images/cosmiceclipse/mimikyu.png')} />
          <Image style={styles.cards} source={require('../images/cosmiceclipse/zekrom.png')} />
          <Image style={styles.cards} source={require('../images/cosmiceclipse/arceus.png')} />
          <Image style={styles.cards} source={require('../images/cosmiceclipse/lunala.png')} />
          <Image style={styles.cards} source={require('../images/cosmiceclipse/vileplume.png')} />
          <Image style={styles.cards} source={require('../images/cosmiceclipse/solgaleo.png')} />
      </View></>
      </ScrollView>
    );
}

FourthScreen.navigationOptions = {
    headerTitle: 'Add Place'
}

export default FourthScreen;