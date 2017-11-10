
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


const Comments = ({ whenPress, children, loading }) =>{
    var imageChange;
    if(loading){
      imageChange = <Image style={styles.imageStyle}
      source={require('./../image/download.png')}
      />;
    }else {
      imageChange = <Image style={styles.imageStyle}
      source={require('./../image/up-arrow.png')}
      />;
    }
    return(
        <TouchableOpacity
        onPress = { whenPress }
        >
          <View style={styles.commentStyle}>
            <Text> {children} </Text>
            {imageChange}
          </View>
        </TouchableOpacity>
    );

};

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
