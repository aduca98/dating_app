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
import API from '../../api';

export default class Login extends Component {

    state = {
        name: "",
        id: "",
        token: ""
    }

    constructor(props) {
        super(props);
    }

    async componentWillMount() {
        const token = await API.getJwt();
        if(token) {
            try {
                console.log("TOKEN. USER ALREADY LOGGED IN");
                const res = await API.getMyInfo();
                const user = res.data.user;
                if(!user.selfDescription|| !user.matchDescription) {
                    this.props.navigation.navigate("Description");
                } else {
                    this.props.navigation.navigate("Match");
                }
            } catch(e) {
                console.log(e);
            }
            // this.props.navigation.navigate("Match");
        }
    }

    logIn = async () => {
        const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('123094455049704', {
            permissions: ['public_profile', 'email'], 
        });

        if (type === 'success') {
            // Get the user's name using Facebook's Graph API
            try {
                const res = await axios.get(`https://graph.facebook.com/me?fields=id,name,picture,gender&access_token=${token}`);
                const data = res.data;

                const params = {
                    name: data.name,
                    fbId: data.id,
                    picture: data.picture.data.url,
                    gender: data.gender,
                }
               
                this.props.navigation.navigate("Profile", {...params});

            } catch(e) {
                alert(e);
            }
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