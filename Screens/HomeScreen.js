import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';

class HomeScreen extends Component {
    render(){
        return (
            <View>
                <Text>Welcome to unTurnd!</Text>
                <Button onPress = { () =>
                this.props.navigation.navigate('LoginScreen')}
                title="Login"/>
            </View>
        );
    }
}

export default HomeScreen;