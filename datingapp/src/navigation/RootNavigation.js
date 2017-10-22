import React from 'react';
import { 
    Platform, 
    View,
    Text,
} from 'react-native';
import { 
    StackNavigator, 
    TabNavigator
} from 'react-navigation';

// Screens
import Login from '../screens/Login';
import Match from '../screens/Match';
import Profile from '../screens/Profile';
import Description from '../screens/Description';
import Settings from '../screens/Settings';

const tabs = TabNavigator(
    {
        Match: {
            screen: Match,
        },
        Settings: {
            screen: Settings
        }
    }, 
    {
        tabBarPosition: 'bottom',
        initialRouteName: 'Match',
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: '#e91e63',
        }
    }
);


var onboardingNav = StackNavigator(
    {
        Profile: {
            screen: Profile
        },
        Description: {
            screen: Description
        },
        Tabs: {
            screen: tabs
        }
    }, 
    {
        mode: "modal",
        headerMode: 'screen'
    }
)
var RootNavigation = StackNavigator(
    {
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