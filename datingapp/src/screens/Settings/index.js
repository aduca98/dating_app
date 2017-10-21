import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View 
} from 'react-native';

export default class Settings extends Component {
    render() {
        return(
            <Text> Settings </Text>
        )
    }
}
Settings.navigationOptions = ({navigation}) => ({
    title: "Settings",
    headerLeft: null
})