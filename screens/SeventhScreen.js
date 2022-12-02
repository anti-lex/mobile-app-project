import React from 'react';
import {Alert, Button, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import {useState} from "react";
import { styles } from '../styles/styles';
import { Ionicons } from '@expo/vector-icons';
import { app, authentication, database } from '../firebase/FirebaseConfig';

const SeventhScreen = (props) => {
  [registrationEmail, setRegistrationEmail] = useState('');
  [registrationPassword, setRegistrationPassword] = useState('');
  [loginEmail, setLoginEmail] = useState('');
  [loginPassword, setLoginPassword] = useState('');
  [loggedIn, setLoggedIn] = useState(false);
  [databaseData, setDatabaseData] = useState('');

    const registerWithFirebase = () => {
      if (registrationEmail.length < 4) {
        Alert.alert('Please enter an email address.');
        return;
      }

      if (registrationPassword.length < 4) {
        Alert.alert('Please enter a password.');
        return;
      }
      authentication.createUserWithEmailAndPassword(registrationEmail, registrationPassword)
      .then(function (_firebaseUser) {
        Alert.alert('user registered!');

        setRegistrationEmail('');
        setRegistrationPassword('');
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        if (errorCode == 'auth/weak-password') {
          Alert.alert('The password is too weak.');
        }
        else {
          Alert.alert(errorMessage);
        }
        console.log(error);
      }
      );
    }

    const loginWithFirebase = () => {
      if (loginEmail.length < 4) {
        Alert.alert('Please enter an email address.');
        return;
      }
  
      if (loginPassword.length < 4) {
        Alert.alert('Please enter a password.');
        return;
      }
  
      auth.signInWithEmailAndPassword(loginEmail, loginPassword)
        .then(function (_firebaseUser) {
          Alert.alert('user logged in!');
          setLoggedIn(true);
  
          // load data
          //retrieveDataFromFirebase();
        })
        .catch(function (error) {
          var errorCode = error.code;
          var errorMessage = error.message;
  
          if (errorCode === 'auth/wrong-password') {
            Alert.alert('Wrong password.');
          }
          else {
            Alert.alert(errorMessage);
          }
        }
        );
    }

    const signoutWithFirebase = () => {
      auth.signOut().then(function () {
        // if logout was successful
        if (!auth.currentUser) {
          Alert.alert('user was logged out!');
          setLoggedIn(false);
        }
      });
    }

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
        <View style={styles.form}>
            <Text style={styles.label3}>User Information</Text>
        </View>
    );
}

SeventhScreen.navigationOptions = {
    headerTitle: 'Add Place'
}

export default SeventhScreen;