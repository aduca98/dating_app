import React, { Component } from 'react';
import {
    View,
    KeyboardAvoidingView,
    Text,
    TextInput,
    Button
} from 'react-native';

export default class Description extends Component {

    state = {
        selfDescription: "",
        matchDescripton: "",
        age: ""
    }

    constructor(props) {
        super(props);
    }

    componentWillMount = () => {
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
                <Text> Hello Description </Text>
                <TextInput
                    placeholder="Describe yourself."
                    name="selfDescription"
                    onChange={this.updateInput} />
                <TextInput
                    placeholder="Describe your ideal partner."
                    name="matchDescription"
                    onChange={this.updateInput} />   

                <Button 
                    onClick={} />    
            </View>
        )
    }
}