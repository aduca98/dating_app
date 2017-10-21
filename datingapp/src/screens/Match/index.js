import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class Match extends Component {
    render() {
        return(
            <Text> Match Page... </Text>
        )
    }
}
Match.navigationOptions = ({navigation}) => ({
    title: "Matches",
    headerLeft: null,
    tabBarIcon: ({ tintColor }) => (
      <Ionicons 
        name="ios-snow" 
        size={32} 
        color={tintColor}/>)
})