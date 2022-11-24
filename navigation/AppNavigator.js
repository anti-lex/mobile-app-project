import React from 'react';
import { Platform, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FirstScreen from '../screens/FirstScreen';
import SecondScreen from '../screens/SecondScreen';
const Stack = createStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                headerMode="screen"
                screenOptions={{
                    headerTintColor: Platform.OS === 'android' ? 'black' : 'blue',
                    headerStyle: {
                        backgroundColor: Platform.OS === 'android' ? 'white' : ''
                    },
                    headerLeft: () => (
                        <Button title="Menu" />
                      ),
                }}
            >
                <Stack.Screen
                    name="ScreenOne"
                    component={FirstScreen}
                    options={{
                        title: 'Home',
                    }}
                />
                <Stack.Screen
                    name="ScreenTwo"
                    component={SecondScreen}
                    options={{
                        title: 'Evolving Skies',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;