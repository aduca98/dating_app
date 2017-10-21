import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Button,
  Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
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

    
    async componentWillMount() {
        const user = await API.getMyInfo(fbId);
        this.setState({
            pictureUrl: user.pictureUrl,
            name: user.name,
            gender: user.gender,
            interestedIn: user.interestedIn
        })
    }
    

    render() {
        return(
            <View> 
                <Text>Settings </Text>
                <Image
                    source={this.state.pictureUrl} />
                <Text> Name: {this.state.name} </Text>
                <Text> Gender: {this.state.gender} </Text>
                <Text> Interested in: {this.state.interestedIn} </Text>
                <Button 
                    title="Logout"
                    onPress={this.logout}/>
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