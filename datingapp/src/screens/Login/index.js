import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    Image,
    StyleSheet
} from 'react-native';
import axios from 'axios';
import Expo, {} from 'expo'


export default class Login extends Component {

    state = {
        name: "",
        id: "",
        token: ""
    }

    constructor(props) {
        super(props);
    }

    logIn = async () => {
        const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('123094455049704', {
            permissions: ['public_profile', 'email'], 
        });

        if (type === 'success') {
            // Get the user's name using Facebook's Graph API
            const res = await axios.get(`https://graph.facebook.com/me?fields=id,name,picture&access_token=${token}`);
            const data = res.data;

            const name = data.name;
            const fbId = data.id;
            const picture = data.picture.data.url;

            this.props.navigation.navigate("Profile", {name, fbId, token, picture});
        }
    }  

    render() {

        return(
            <View style={{flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',}}
                >

                <Image
                    style={{width: 250, height: 250}}
                    source={require('../../../img/logo.png')}
                />

                <Text style={{fontSize:30}}>  
                    Welcome to DatingApp!!
                </Text>
                
                <View style={styles.buttonContainer}>

                    <Button 
                        onPress={this.logIn}
                        title="Login with Facebook"
                        color="#ffffff"
                        accessibilityLabel="Login to Facebook"
                    />

                </View>
                
            
            </View>
        )
    }
}

Login.navigationOptions = ({navigation}) => ({
    title: "Login",
})

const styles = StyleSheet.create({
    buttonContainer: {
      margin: 10, backgroundColor: '#3b5998'
    },
  })