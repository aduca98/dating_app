import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

export default class Login extends Component {

    render() {

        return(
            <Text> {this.props.title} Hello World </Text>
        )
    }
}