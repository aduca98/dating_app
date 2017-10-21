import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View 
} from 'react-native';

export default class Match extends Component {
    render() {
        return(
            <Text> Match Page... </Text>
        )
    }
}
Match.navigationOptions = ({navigation}) => ({
    title: "Matches",
    headerLeft: null
})