import React, { Component } from 'react';
import {
    View,
    KeyboardAvoidingView,
    Text,
    TextInput,
    Button
} from 'react-native';
import API from '../../api';

export default class Description extends Component {

    state = {
        selfDescription: "Albert Einstein was a German-born theoretical physicist. Einstein developed the theory of relativity, one of the two pillars of modern physics. Einstein's work is also known for its influence on the philosophy of science.",
        matchDescription: "Sir Isaac Newton PRS was an English mathematician, astronomer, and physicist who is widely recognised as one of the most influential scientists of all time and a key figure in the scientific revolution.",
    }

    constructor(props) {
        super(props);
    }

    componentWillMount = () => {
    }

    onSubmit = async () => {
        const {
            selfDescription,
            matchDescription
        } = this.state;
        try {
            const data = {
                selfDescription,
                matchDescription
            }
            console.log(data);
            const res = await API.addDescriptions(data);
            this.props.navigation.navigate('Match');
        } catch(e) {
            console.log(e);
        }
    }

    render() {
        return(
            <View>
                <Text> Write your description... </Text>
                <TextInput
                    multiline={true}
                    placeholder="Describe yourself."
                    name="selfDescription"
                    value={this.state.selfDescription}
                    onChangeText={(text) => this.setState({"selfDescription": text})} />
                <TextInput
                    multiline={true}
                    placeholder="Describe your ideal partner."
                    name="matchDescription"
                    value={this.state.matchDescription}
                    onChangeText={(text) => this.setState({"matchDescription": text})} />
                <Button 
                    title="Submit"
                    onPress={this.onSubmit} />    
            </View>
        )
    }
}

Description.navigationOptions = ({navigation}) => ({
    title: "Description"
})