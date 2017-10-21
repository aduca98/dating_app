import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TextInput,
  Button
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
    }

    componentWillMount() {
        const {params} = this.props.navigation.state;
        try {
            const {name, fbId,  fbToken, picture, gender} = params;
            this.setState({
                name, 
                fbId,
                fbToken,
                picture,
                gender
            })
        } catch(e) {
            console.log(e);
        }
        
    }

    async onSubmit() {
        const res = await API.createUser({
            name: this.state.name,
            fbId: this.state.fbId,
            fbToken: this.state.fbToken,
            pictureUrl: this.state.picture,
            interestedIn: this.state.gender
        });
        alert(res);
    }
    
    render() {
        return(
            <View> 
                <Text> Your Name </Text>
                <TextInput
                    placeholder="Please enter your name"
                    value={this.state.name}
                    onChange={(value) => this.setState({"name": value})}
                    name="name"/>
                {/*}Camera Roll{*/}
                {/*}Age{*/}
                <Text> Your Age </Text>
                <TextInput
                    placeholder="Please enter your age"
                    value={this.state.age}
                    onChange={(value) => this.setState({"age": value})}
                    name="age"/>
                <Text> Your Gender </Text>
                <TextInput
                    placeholder="Your gender"
                    value={this.state.gender}
                    onChange={(value) => this.setState({"gender": value})}
                    name="gender"/>
                <TextInput
                    placeholder="What gender you like ;)"
                    value={this.state.interestedIn}
                    onChange={(value) => this.setState({"interestedIn": value})}
                    name="interestedIn"/>
                {/*}Gender via drop down menu?{*/}
                {/*}Gender Preference via drop down menu?{*/}
                <Button
                    title="Press me"
                    onPress={this.onSubmit.bind(this)} />
            </View>
        )
    }
}

Profile.navigationOptions = {
    title: "Finish Profile",
    headerLeft: null
}