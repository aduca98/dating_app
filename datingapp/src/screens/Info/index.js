import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';
var { FBLogin, FBLoginManager } = require('react-native-facebook-login');

export default class Login extends Component {

    state = {
        name: "",
        email: "",
        gender: "",
        sexual_preference: "",
        self_description: "",
        match_description: ""
    }

    updateInput = () => {

    }
    
    render() {

        return(
            <View>
                <Text style={{marginTop: 100}}> Login </Text>
                <FBLogin style={{ marginBottom: 10, }}
                    ref={(fbLogin) => { this.fbLogin = fbLogin }}
                    permissions={["email","user_friends"]}
                    loginBehavior={FBLoginManager.LoginBehaviors.Native}
                    onLogin={function(data){
                    console.log("Logged in!");
                    console.log(data);
                    _this.setState({ user : data.credentials });
                    }}
                    onLogout={function(){
                    console.log("Logged out.");
                    _this.setState({ user : null });
                    }}
                    onLoginFound={function(data){
                    console.log("Existing login found.");
                    console.log(data);
                    _this.setState({ user : data.credentials });
                    }}
                    onLoginNotFound={function(){
                    console.log("No user logged in.");
                    _this.setState({ user : null });
                    }}
                    onError={function(data){
                    console.log("ERROR");
                    console.log(data);
                    }}
                    onCancel={function(){
                    console.log("User cancelled.");
                    }}
                    onPermissionsMissing={function(data){
                    console.log("Check permissions!");
                    console.log(data);
                    }}
                />
            </View>
        )
    }
}