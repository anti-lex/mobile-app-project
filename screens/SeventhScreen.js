import React from 'react';
import {Alert, Button, Text, View, TextInput, TouchableOpacity, Image, Appearance} from 'react-native';
import {useState} from "react";
import { styles } from '../styles/styles';
import { Ionicons } from '@expo/vector-icons';
import { app, authentication, database } from '../firebase/FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import {Database, getDatabase, ref, set} from 'firebase/database';

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
      createUserWithEmailAndPassword(authentication, registrationEmail, registrationPassword)
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
  
      signInWithEmailAndPassword(authentication, loginEmail, loginPassword)
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
      authentication.signOut().then(function () {
        // if logout was successful
        if (!authentication.currentUser) {
          Alert.alert('user was logged out!');
          setLoggedIn(false);
        }
      });
    }

    function saveDataWithFirebase() {
      // *********************************************************************
      // When saving data, to create a new collection you can use SET 
      // and when updating you can use UPDATE (refer to docs for more info)
      // -- https://firebase.google.com/docs/firestore/manage-data/add-data
      // *********************************************************************
  
      var userId = authentication.currentUser.uid;
  
      const db = getDatabase();
      // SAVE DATA TO REALTIME DB
      set(ref(db, 'users/' + userId),{
        text: databaseData
      });
      Alert.alert('Document successfully written!');
    }

    function retrieveDataFromFirebase() {
      // *********************************************************************
      // When loading data, you can either fetch the data once like in these examples 
      // -- https://firebase.google.com/docs/firestore/query-data/get-data
      // or you can listen to the collection and whenever it is updated on the server
      // it can be handled automatically by your code
      // -- https://firebase.google.com/docs/firestore/query-data/listen
      // *********************************************************************
  
      var userId = authentication.currentUser.uid;
  
      /*****************************/
      // LOAD DATA FROM REALTIME DB
      /*****************************/
  
      // read once from data store
      // db.ref('/users/' + userId).once('value').then(function (snapshot) {
      //   setDatabaseData(snapshot.val().text);
      // });
  
      /*****************************/
      // LOAD DATA FROM FIRESTORE
      /*****************************/
  
      // read once from data store
      firestore.collection("users").doc(userId).get()
        .then(function (doc) {
          if (doc.exists) {
            setDatabaseData(doc.data().text);
            console.log("Document data:", doc.data());
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch(function (error) {
          console.log("Error getting document:", error);
        });
  
      // For real-time updates:
      // firestore.collection("users").doc(userId).onSnapshot(function (doc) {
      //   setDatabaseData(doc.data().text);
      //   console.log("Document data:", doc.data());
      // });
  
    }

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
        <><View style={styles.form}>
        <Text style={styles.label3}>User Login</Text>
      </View><View style={styles.form}>
          {!loggedIn &&
            <View>
              <View>
                <Text style={styles.label3}>Register with TCG Library</Text>
                <TextInput
                  style={styles.textInput2}
                  onChangeText={(value) => setRegistrationEmail(value)}
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoCompleteType="email"
                  keyboardType="email-address"
                  placeholder=" Email" />
                <TextInput
                  style={styles.textInput2}
                  onChangeText={(value) => setRegistrationPassword(value)}
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoCompleteType="password"
                  keyboardType="visible-password"
                  placeholder=" Password" />
                <Button color="black" style={styles.button2} title="Register" onPress={registerWithFirebase} />
              </View>
              <View>
                <Text style={styles.label3}>Sign In with TCG Library</Text>
                <TextInput
                  style={styles.textInput2}
                  onChangeText={(value) => setLoginEmail(value)}
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoCompleteType="email"
                  keyboardType="email-address"
                  placeholder=" Email" />
                <TextInput
                  style={styles.textInput2}
                  onChangeText={(value) => setLoginPassword(value)}
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoCompleteType="password"
                  keyboardType="visible-password"
                  placeholder=" Password" />
                <Button color="black" style={styles.button2} title="Login" onPress={loginWithFirebase} />
              </View>
            </View>}
          {loggedIn &&
            <View>
              <Text style = {styles.words }>Hello! Thank you for signing into TCG Library!</Text>
              <Text style = { styles.words }>We are currently running a survey on people's favourite Pokémon</Text>
              <Text style = { styles.words }>Please submit your answer down below!</Text>
              <View style = {styles.space}/>
              <TextInput
                style={styles.textInput}
                multiline={false}
                numberOfLines={1}
                onChangeText={(value) => setDatabaseData(value)}
                value={databaseData} 
                placeholder = " Mimikyu"
                />
              <View style={styles.buttonContainer}>
                <Button color = "black" style={styles.button} title="Save Data" onPress={saveDataWithFirebase} />
              </View>
              <Button color = "black" style={styles.signOutButton} title="Sign Out" onPress={signoutWithFirebase} />
            </View>}
        </View></>
    );
}

SeventhScreen.navigationOptions = {
    headerTitle: 'Add Place'
}

export default SeventhScreen;