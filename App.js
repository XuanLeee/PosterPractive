
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AppRegistry
} from 'react-native';
import Header from './src/components/Header';
import PosterList from './src/components/PosterList';


export default class App extends Component<{}> {
  render() {
    return (
      <View style={{ flex:1 }}>
        <Header headerText={'poster'}/>
        <PosterList />
      </View>
    );
  }
}



AppRegistry.registerComponent('poster', () => App);
