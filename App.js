import React, {Component} from 'react';
import {
    View,
    Image,
    Keyboard,
    TouchableWithoutFeedback,
    TextInput,
    TouchableOpacity,
    Animated,
    Easing,
    Dimensions,
    StyleSheet,
    Text,
    StatusBar,
    Alert
} from 'react-native';
import {Spinner} from 'native-base';
import usernameImg from "./src/images/username.png";
import passwordImg from "./src/images/password.png";
import eyeImg from "./src/images/eye_black.png";
import Logo from "./src/components/Logo";
import Form from "./src/components/Form";


class App extends Component {

    render() {

        return (
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>
                    <StatusBar barStyle="light-content" backgroundColor="#0d4422"/>
                    <Logo/>
                    <Form/>
                </View>
            </TouchableWithoutFeedback>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0d4422',
    }
});

export default App;
