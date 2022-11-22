import React from 'react';
import {Alert, Button, Text, View, TextInput} from 'react-native';
import {useState} from "react";
import { styles } from '../styles/styles';
import * as MailComposer from 'expo-mail-composer';
const SecondScreen = props => {
    const [message, setMessage] = useState();
    const [email, setEmail] = useState();

    const onChangeHandler = (value) => {
    setEmail(value);
    }

    const onChangeHandler2 = (value) => {
        setMessage(value);
    }

    sendMessageWithEmail = async () => {
        //Alerting the user then sending the email 
        Alert.alert(
            'Email Alert',
            'Your email has been sent successfully ',
            [
                "okay"
            ],
            {cancelable: false},
          );
        const isAvailable = await MailComposer.isAvailableAsync();
        if(isAvailable) {
          var options = {
            // recipients (array) -- An array of e-mail addressess of the recipients.
            recipients: [email],
            subject: 'This is a test',
            // body (string) -- Body of the mail.
            body: message
          };
          MailComposer.composeAsync(options).then((result) => { console.log(result.status); });
        }
    } 
    return (
        <View style={styles.form}>
            <Text style={styles.label3}>Email</Text>
            <View style={styles.space} /> 
            <TextInput 
                style={styles.textInput} 
                multiline
                numberOfLines={1}
                onChangeText={onChangeHandler} 
            />
            <View style={styles.space} /> 
            <Text style={styles.label3}>Message</Text>
            <View style={styles.space} /> 
            <TextInput 
                style={styles.textInput} 
                multiline
                numberOfLines={10}
                onChangeText={onChangeHandler2} 
            />
            <View style={styles.space} /> 
            <Button style={styles.button} color="#000000" title="Send Email" onPress={ () => { sendMessageWithEmail(); }} />
        </View>
    );
}

SecondScreen.navigationOptions = {
    headerTitle: 'Add Place'
}

export default SecondScreen;
