import React, {Component} from "react";
import {
    Alert,
    Animated,
    Dimensions,
    Easing,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import usernameImg from "../images/username.png";
import passwordImg from "../images/password.png";
import eyeImg from "../images/eye_black.png";
import {Spinner} from "native-base";

const DEVICE_WIDTH = Dimensions.get('window').width;
const MARGIN = 40;

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPass: true,
            press: false,
            username: '',
            password: '',
            isLoading: false
        };
        this.buttonAnimated = new Animated.Value(0);
        this.showPass = this.showPass.bind(this);
        this._onPress = this._onPress.bind(this);
    }

    showPass() {
        this.state.press === false
            ? this.setState({showPass: false, press: true})
            : this.setState({showPass: true, press: false});
    }

    _onPress() {
        if (this.state.isLoading) {
            return;
        }
        this.setState({isLoading: true})
        Animated.timing(this.buttonAnimated, {
            toValue: 1,
            duration: 200,
            easing: Easing.linear,
        }).start();

        setTimeout(() => {
            this.clickLogin();
        }, 300);
    }

    clickLogin() {
        Alert.alert(
            'Alert',
            'Button clicked.',
            [
                {
                    text: 'OK', onPress: () => {
                        this.setState({isLoading: false});
                        Animated.timing(this.buttonAnimated, {
                            toValue: 0,
                            duration: 300,
                            easing: Easing.linear
                        }).start();
                    }
                },
            ],
            {cancelable: false},
        );
    }

    render() {
        const changeWidth = this.buttonAnimated.interpolate({
            inputRange: [0, 1],
            outputRange: [DEVICE_WIDTH - MARGIN, MARGIN],
        });
        return (
            <View style={{padding: 20}}>
                <View style={{marginBottom: 10, alignSelf: 'center'}}>
                    <Image source={usernameImg} style={styles.inlineImg}/>
                    <TextInput
                        style={styles.input}
                        placeholder="Username"
                        autoCorrect={false}
                        autoCapitalize={'none'}
                        returnKeyType={'done'}
                        placeholderTextColor="white"
                        underlineColorAndroid="transparent"
                        value={this.state.username}
                        onChangeText={value => this.setState({username: value})}
                    />
                </View>
                <View style={{marginBottom: 10, alignSelf: 'center'}}>
                    <Image source={passwordImg} style={styles.inlineImg}/>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry={this.state.showPass}
                        autoCorrect={false}
                        autoCapitalize={'none'}
                        returnKeyType={'done'}
                        placeholderTextColor="white"
                        underlineColorAndroid="transparent"
                        value={this.state.password}
                        onChangeText={value => this.setState({password: value})}
                    />
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.btnEye}
                        onPress={this.showPass}>
                        <Image source={eyeImg} style={styles.iconEye}/>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Animated.View style={{width: changeWidth}}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={this._onPress}
                            activeOpacity={1}>
                            {this.state.isLoading ? (
                                <Spinner style={styles.image}/>
                            ) : (
                                <Text style={styles.text}>Login</Text>
                            )}
                        </TouchableOpacity>
                    </Animated.View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    btnEye: {
        position: 'absolute',
        top: 9,
        right: 28,
    },
    iconEye: {
        width: 25,
        height: 25,
        tintColor: 'rgba(0,0,0,0.2)',
    },
    input: {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: DEVICE_WIDTH - 40,
        height: 40,
        marginHorizontal: 20,
        paddingLeft: 45,
        borderRadius: 20,
        color: '#ffffff',
        fontFamily: 'VAGRoundedBT-Regular'
    },
    inlineImg: {
        position: 'absolute',
        zIndex: 99,
        width: 22,
        height: 22,
        left: 35,
        top: 9,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#166936',
        height: MARGIN,
        borderRadius: 20,
        zIndex: 100,
        marginBottom: 20
    },
    text: {
        color: 'white',
        backgroundColor: 'transparent',
    },
    image: {
        width: 24,
        height: 24,
    },
});