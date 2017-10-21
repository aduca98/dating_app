import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import List from '../../components/List';

export default class Match extends Component {
    
    async componentWillMount() {
        const matches = []//await API.getMatches();
        this.setState({
            matches,
        });
    }  
    
    // Not used yet...
    filterMatches() {
        return this.state.matches;
    }

    getInformation(userDetails) {
        // do something w/ this
    }

    render() {
        return(
            <View> 
                <Text>Match Page... </Text>
                {this.state.matches.length > 0  && 
                    <List items={this.state.matches} detailsCallback={this.getInformation.bind(this)}/>
                }
            </View>
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