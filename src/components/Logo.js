import React, {Component} from 'react';
import {Image, View} from "react-native";

export default class Logo extends Component {

    render() {
        return (
            <View style={{alignItems: 'center', flexGrow: 1, justifyContent: 'center'}}>
                <Image style={{position: 'absolute'}}
                       resizeMode="center"
                       source={require('../images/logo.png')}/>
            </View>
        )
    }
}