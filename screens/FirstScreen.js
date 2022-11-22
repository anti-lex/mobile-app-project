import React, { useState } from 'react';
import { View, Text, Platform, TextInput, Button } from 'react-native';
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
            <Text style={styles.label}>Midterm</Text>
            <Text style={styles.label}>a_valsamos</Text>
            <View style={styles.space2} />                
            <Text style={styles.label2}>CLICK THE BUTTON BELOW</Text>
            <Text style={styles.label2}>TO GO TO THE EMAIL SCREEN</Text>
            <View style={styles.space2} />    
            <Button 
                style={styles.button}
                title="Send email"
                color="#000000"
                onPress={ () => props.navigation.navigate('ScreenTwo', { screenTitle: titleValue }) } 
            /> 
        </View>
    );
}

export default FirstScreen;