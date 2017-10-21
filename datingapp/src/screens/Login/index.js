import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    Image,
    StyleSheet
} from 'react-native';

 import Expo, {} from 'expo'


export default class Login extends Component {

    async logIn() {
        const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('123094455049704', {
            permissions: ['public_profile'], 
            });
        if (type === 'success') {
            // Get the user's name using Facebook's Graph API
            const response = await fetch(
            `https://graph.facebook.com/me?access_token=${token}`);
            alert(
            `Logged in! Hi ${(await response.json()).name}!`,
            );
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


const styles = StyleSheet.create({
    buttonContainer: {
      margin: 10, backgroundColor: '#3b5998'
    },
  })