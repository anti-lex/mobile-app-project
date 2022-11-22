import React, { useState } from 'react';
import { View, Text, Platform, TextInput, Button, Image, ScrollView } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CustomHeaderButton from '../components/CustomHeaderButton';
import { styles } from '../styles/styles';

const FirstScreen = (props) => {
    const [titleValue, setTitleValue] = useState('');

    React.useLayoutEffect(() => {
        props.navigation.setOptions({
          headerRight: () => (
            <><HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item />
            </HeaderButtons>
            <Text style={styles.headerText}>TCG Library2</Text></>
          ),
         });
      }, []);

    return (
        <View style={styles.form}>
            <ScrollView>
              <Image style={styles.images} source={require('../images/evoskies.jpg')}/>
              <Image style={styles.images} source={require('../images/silvertemp.jpg')}/>
              <Image style={styles.images} source={require('../images/cosmic.jpg')}/>
              <Image style={styles.images} source={require('../images/lostorigin.jpg')}/>
              <Image style={styles.images} source={require('../images/chilling.jpg')}/>
            </ScrollView>
        </View>
    );
}

export default FirstScreen;