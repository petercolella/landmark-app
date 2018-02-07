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
            <View style={styles.container}>
                <Text>Welcome to unTurnd!</Text>
                <Button onPress = { () =>
                this.props.navigation.navigate('LoginScreen')}
                title="Login"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default HomeScreen;