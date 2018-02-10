import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';

import {TabNavigator} from 'react-navigation'

class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Welcome to unTurnd!</Text>
                <Button onPress = { () =>
                this.props.navigation.navigate('LoginScreen')}
                title="Login"/>
            </View>
        );
    }
}

class Notifications extends Component {
    render() {
        return (
            <View>
                <Text>This is the Notification Screen</Text>
            </View>
        )
    }
}

const HomeScreenTabNavigator = TabNavigator({

    HomeScreen:{
        screen: HomeScreen
    },
    Notifications:{
        screen: Notifications
    }

}, {
    animationEnabled: true
})

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default HomeScreenTabNavigator;