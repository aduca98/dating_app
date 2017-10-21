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
        this.onSubmit = this.onSubmit.bind(this);
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
        var data = {
            name: this.state.name,
            fbId: this.state.fbId,
            fbToken: this.state.fbToken,
            pictureUrl: this.state.picture,
            gender: this.state.gender.toLowerCase(),
            interestedIn: this.state.interestedIn.toLowerCase()
        }
        // alert(JSON.stringify(data));
        const res = await API.createUser(data);
    }
    
    render() {
        return(
            <View> 
                <Text> Your Name </Text>
                <TextInput
                    placeholder="Please enter your name"
                    value={this.state.name}
                    onChangeText={(text) => this.setState({"name": text})}
                    name="name"/>
                {/*}Camera Roll{*/}
                {/*}Age{*/}
                <Text> Your Age </Text>
                <TextInput
                    placeholder="Please enter your age"
                    value={this.state.age}
                    onChangeText={(text) => this.setState({"age": text})}
                    name="age"/>
                <Text> Your Gender </Text>
                <TextInput
                    placeholder="Your gender"
                    onChangeText={(text) => this.setState({"gender": text})}
                    name="gender"/>
                <TextInput
                    placeholder="Whatender you like ;)"
                    value={this.state.interestedIn}
                    onChangeText={(text) => {
                        this.setState({"interestedIn": text})
                    }}
                    name="interestedIn"/>
                {/*}Gender via drop down menu?{*/}
                {/*}Gender Preference via drop down menu?{*/}
                <Button
                    title="Press me"
                    onPress={this.onSubmit} />
            </View>
        )
    }
}

Profile.navigationOptions = {
    title: "Finish Profile",
    headerLeft: null
}