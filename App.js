
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Screens/LoginScreen';
import {AppTabNavigator} from './components/AppTabNavigator.js'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import { AppDrawerNavigator } from './components/appDrawerNavigator'

export default class App extends React.Component {
  render(){
    return (
      <AppContainer/>
    );

  }
}

const switchNavigator = createSwitchNavigator({
  welcomeScreen: {
    screen: LoginScreen
  },
  Drawer: {
    screen: AppDrawerNavigator
  },
  BottomTab:{
    screen:AppTabNavigator
  }
})

const AppContainer = createAppContainer(switchNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
