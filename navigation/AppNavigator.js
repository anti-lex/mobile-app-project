import React from 'react';
import { Platform, Button, TouchableOpacity, Text} from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { styles } from '../styles/styles';
import FirstScreen from '../screens/FirstScreen';
import SecondScreen from '../screens/SecondScreen';
import ThirdScreen from '../screens/ThirdScreen';
import FourthScreen from '../screens/FourthScreen';
import FifthScreen from '../screens/FifthScreen';
import SixthScreen from '../screens/SixthScreen';
import SeventhScreen from '../screens/SeventhScreen';
import EighthScreen from '../screens/EighthScreen'
import { Ionicons } from '@expo/vector-icons';

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
                    headerTitle: "TCG Library",
                    headerTitleAlign: 'center',
                    headerTitleStyle: styles.header,
/*                     headerRight: () => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ScreenOne')}
                        >
                            <Ionicons name="search-outline" size={32} color="black" />
                        </TouchableOpacity>
                      ), */
                }}
            >
                <Stack.Screen
                    name="ScreenOne"
                    component={FirstScreen}
                    options={{
                        title: 'List',
                    }}
                />
                <Stack.Screen
                    name="ScreenTwo"
                    component={SecondScreen}
                    options={{
                        title: 'Evolving Skies',
                    }}
                />
                <Stack.Screen
                    name="ScreenThree"
                    component={ThirdScreen}
                    options={{
                        title: 'Silver Tempest',
                    }}
                />
                <Stack.Screen
                    name="ScreenFour"
                    component={FourthScreen}
                    options={{
                        title: 'Cosmic Eclipse',
                    }}
                />
                <Stack.Screen
                    name="ScreenFive"
                    component={FifthScreen}
                    options={{
                        title: 'Lost Origin',
                    }}
                />
                <Stack.Screen
                    name="ScreenSix"
                    component={SixthScreen}
                    options={{
                        title: 'Home',
                    }}
                />
                <Stack.Screen
                    name="ScreenSeven"
                    component={SeventhScreen}
                    options={{
                        title: 'Login Page',
                    }}
                />
                <Stack.Screen
                    name="ScreenEight"
                    component={EighthScreen}
                    options={{
                        title: 'Chilling reign',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;