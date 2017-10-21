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
import Profile from '../screens/Profile';

// Stacknavigator
const RootStack = StackNavigator(
  {
    Match: {
        screen: Match
    },
  },
  {      
    initialRouteName: 'Profile',
    headerMode: 'screen',
  }
);

var onboardingNav = StackNavigator(
    {
        Profile: {
            screen: Profile
        }
    }, 
    {
        mode: "modal",
        headerMode: 'screen'
    }
)
var RootNavigation = StackNavigator(
    {
        Root: {
            screen: RootStack
        },
        Login: {
            screen: Login
        },
        Onboarding: {
            screen: onboardingNav
        }
    }, 
    {
        mode: "modal",
        initialRouteName: 'Login',
        headerMode: 'none'
    }
)

export default () => <RootNavigation/>