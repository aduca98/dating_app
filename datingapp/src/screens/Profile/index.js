import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View 
} from 'react-native';

export default class Profile extends Component {
    render() {
        return(
            <View> 
                <Text> Hello </Text>
            </View>
        )
    }
}

Profile.navigationOptions = {
    title: "Finish Profile",
    headerLeft: null
}