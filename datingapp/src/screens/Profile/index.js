import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TextInput,
  Button,
  ScrollView
} from 'react-native';
import API from '../../api';

export default class Profile extends Component {
    
    state ={
        name: "",
        fbId: "",
        fbToken: "",
        picture: "",
        age: "",
        gender: "",
        interestedIn: ""
    }

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    async componentWillMount () {
        const {params} = this.props.navigation.state;
        try {
            const {name, fbId,  fbToken, picture, gender} = params;
            this.setState({
                name, 
                fbId,
                fbToken,
                picture,
                gender
            });
            const jwt = await API.getJwt();

            if(jwt) {
                console.log("USER LOGGED IN");
                const user = await API.getMyInfo();
                this.setState({
                    name: user.name,
                    gender: user.gender,
                    interestedIn: user.interestedIn
                })
            }
        } catch(e) {
            console.log(e);
        }
        
    }

    _checkFields() {
        const {
            name,
            fbId,
            fbToken,
            pictureUrl,
            gender,
            interestedIn
        } = this.state;
        if(!name || !gender || !interestedIn) {
            return false;
        }
        return true;
    }

    async onSubmit() {
        var filledFields = this._checkFields();
        // if(!filledFields) {
        //     alert("Missing fields.");
        //     return;
        // }
        var data = {
            name: this.state.name,
            fbId: this.state.fbId,
            fbToken: this.state.fbToken,
            pictureUrl: this.state.picture,
            gender: this.state.gender.toLowerCase(),
            interestedIn: this.state.interestedIn.toLowerCase()
        }

        try { 
            // alert(JSON.stringify(data));
            const res = await API.createUser(data);
            // Set jwt
            const jwt = res.data.token;
            await API.storeJwt(jwt);
            console.log(await API.getJwt());
            this.props.navigation.navigate("Description");

        } catch(e) {
            alert("ERROR " + e);
        }
    }
    
    render() {
        return(
            
            <ScrollView contentContainerStyle={styles.contentContainer}>
            
                <Text style={{fontSize:30, textDecorationLine: 'underline'}}> Your Name </Text>
                <TextInput style={{fontSize:20}}
                    placeholder="Please enter your name"
                    value={this.state.name}
                    onChangeText={(text) => this.setState({"name": text})}
                    name="name"/>
                {/*}Camera Roll{*/}
                {/*}Age{*/}
                <Text style={{fontSize:30, textDecorationLine: 'underline'}}> Your Age </Text>
                <TextInput style={{fontSize:20}}
                    placeholder="Please enter your age"
                    value={this.state.age}
                    onChangeText={(text) => this.setState({"age": text})}
                    name="age"/>
                <Text style={{fontSize:30, textDecorationLine: 'underline'}}> Your Gender </Text>
                <TextInput style={{fontSize:20}}
                    placeholder="Your gender"
                    value={this.state.gender}
                    onChangeText={(text) => this.setState({"gender": text})}
                    name="gender"/>
                <Text style={{fontSize:30, textDecorationLine: 'underline'}}> Your Gender Preference</Text>
                <TextInput style={{fontSize:20}}
                    placeholder="Whatender you like ;)"
                    value={this.state.interestedIn}
                    onChangeText={(text) => {
                        this.setState({"interestedIn": text})
                    }}
                    name="interestedIn"/>
                {/*}Gender via drop down menu?{*/}
                {/*}Gender Preference via drop down menu?{*/}
                <View style={styles.buttonContainer}>
                
                    <Button 
                        onPress={this.onSubmit}
                        title="Update Profile"
                        color="#ffffff"
                        accessibilityLabel="Update Profile"
                    />

                </View>
            
            </ScrollView>
        )
    }
}

Profile.navigationOptions = {
    title: "Profile",
    headerLeft: null
}

const styles = StyleSheet.create({
    buttonContainer: {
        margin: 10, backgroundColor: '#228aff'
    },
    contentContainer: {
        paddingVertical: 20,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
      }
})