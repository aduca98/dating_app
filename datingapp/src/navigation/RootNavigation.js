import React from 'react';
import { 
    Platform, 
    View,
    Text,
} from 'react-native';
import { 
    StackNavigator, 
} from 'react-navigation';

// Screens
import Login from '../screens/Login';
import Match from '../screens/Match';

// Stacknavigator
const RootStack = StackNavigator(
  {
    Match: {
        screen: Match
    }
  },
  {      
    initialRouteName: 'Match',
    headerMode: 'none',
  }
);

var RootNavigation = StackNavigator(
    {
        Login: {
            screen: Login
        },
        Root: {
            screen: RootStack
        }
    }, 
    {
        mode: "modal",
        initialRouteName: 'Login',
        headerMode: 'none'
    }
)

export default () => <RootNavigation/>