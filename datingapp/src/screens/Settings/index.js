import React, { Component } from 'react';
import { 
  StyleSheet,  
  View,
  Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Container, Header, Content, Button, List, ListItem, Text } from 'native-base';
import API from '../../api';

export default class Settings extends Component {
    
    state = {
        pictureUrl: "",
        name: "",
        gender: "",
        interestedIn: "",
    }

    logout = async () => {
        try {
            await API.logout();
            this.props.navigation.navigate("Login");
        } catch(e) {
            console.log(e);
        }
    }

    Profile = async () => {
        try {
            //Import API user Data
            this.props.navigation.navigate("Profile");
        } catch(e) {
            console.log(e);
        }
    }

    Description = async () => {
        try {
            //Import API user Data
            this.props.navigation.navigate("Description");
        } catch(e) {
            console.log(e);
        }
    }

    
    async componentWillMount() {
        const user = await API.getMyInfo(fbId);
        this.setState({
            picture: user.picture,
            name: user.name,
            gender: user.gender,
            interestedIn: user.interestedIn
        })
    }
    

    render() {
        return(
            <View> 
                    <List>
                        <ListItem onPress={this.Profile}>
                        <Text>Profile</Text>
                        </ListItem>
                        <ListItem onPress={this.Description}>
                        <Text>Description</Text>
                        </ListItem>
                        <ListItem>
                        <Text>Notifications</Text>
                        </ListItem>
                        <ListItem onPress={this.logout}>
                        <Text>Logout</Text>
                        </ListItem>
                    </List>
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