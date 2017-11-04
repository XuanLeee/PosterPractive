
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Header extends Component{

  render(){

    return (
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}> { this.props.headerText} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle:{
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5},
    shadowOpacity: 0.2
  },
  textStyle: {
    fontSize: 20
  }

});

export default Header;
