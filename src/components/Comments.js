
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class Comments extends Component{

  render(){

    return (
      <View style={styles.commentStyle}>
        <Text> Hide Comments </Text>
        <Image style={styles.imageStyle}
        source={require('./../image/download.png')}
      />
      </View>
    );
  }
}



const styles = StyleSheet.create({
  commentStyle: {
    flexDirection: 'row',
  },
  imageStyle:{
    height:15,
    width:15,
  },

});

export default Comments;
