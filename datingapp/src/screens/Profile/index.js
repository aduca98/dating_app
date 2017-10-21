import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TextInput
} from 'react-native';

export default class Profile extends Component {
    
    state ={
        name: "",
        fbId: "",
        fbToken: "",
        picture: ""

    }

    constructor(props) {
        super(props);
    }

    componentWillMount = () => {
        const {params} = props.navigation.state;
        alert(JSON.stringify(params));
        const {name, fbId,  fbToken, picture} = params;
        this.setState({
            name, 
            fbId,
            fbToken,
            picture
        })
    }

    updateInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    }
    
    
    render() {
        return(
            <View> 
                <Text> Your Name </Text>
                <TextInput
                    placeholder="Please enter your name"
                    name="name"/>
                {/*}Camera Roll{*/}
                {/*}Age{*/}
                <Text> Your Age </Text>
                <TextInput
                    placeholder="Please enter your age"
                    age="age"/>
                {/*}Gender via drop down menu?{*/}
                {/*}Gender Preference via drop down menu?{*/}
                
            </View>
        )
    }
}

Profile.navigationOptions = {
    title: "Finish Profile",
    headerLeft: null
}