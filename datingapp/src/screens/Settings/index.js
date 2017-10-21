import React, { Component } from 'react';
import { 
  StyleSheet,  
  View,
  Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { 
    Container, 
    Header, 
    Content, 
    Button, 
    List, 
    ListItem, 
    Text 
} from 'native-base';

import API from '../../api';

export default class Settings extends Component {
    
    state = {
        pictureUrl: "",
        name: "",
        gender: "",
        interestedIn: "",
        createdAt: ""
    }

    logout = async () => {
        try {
            await API.logout();
            this.props.navigation.navigate("Login");
        } catch(e) {
            console.log(e);
        }
    }

    async componentWillMount() {
        try {
            const res = await API.getMyInfo();
            const user = res.data.user;
            console.log('user ' + JSON.stringify(user));
            this.setState({
                pictureUrl: user.pictureUrl,
                name: user.name,
                gender: user.gender,
                interestedIn: user.interestedIn,
                createdAt: this.formatDate(user.createdAt)
            });
        } catch(e) {
            console.log(JSON.stringify(e));
        }
    }
    
    formatDate(date) {
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString(options);
    }

    render() {
        return(
            <View> 
                <Button 
                    onPress={this.logout}>
                    <Text> Logout </Text>
                </Button>

                <Image
                    source={this.state.picture} />
                <Text> Name: {this.state.name} </Text>
                <Text> Gender: {this.state.gender} </Text>
                <Text> Interested in: {this.state.interestedIn} </Text>
                <Text> Created at {this.state.createdAt} </Text>
            </View>
        )
    }
}
Settings.navigationOptions = ({navigation}) => ({
    title: "Settings",
    headerLeft: null,
    tabBarIcon: ({ tintColor }) => (
      <Ionicons 
        name="ios-settings" 
        size={32} 
        color={tintColor}/>)
})