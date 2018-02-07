import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation'

import LoginScreen from './Screens/LoginScreen'
import HomeScreen from './Screens/HomeScreen'

export default class App extends React.Component {
  render() {
    return (
      // <View style={styles.container}>
      //   <Text>Welcome to unTurnd!</Text>
      // </View>
      <AppNavigator/>
    );
  }
}

const AppNavigator = StackNavigator({
  HomeScreen: { screen: HomeScreen },
  LoginScreen: { screen: LoginScreen }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
