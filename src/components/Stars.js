
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class Stars extends Component{

  changeStar(){

  }
  render(){

    return (
      <View style={styles.starStyle}>
        <Image style={styles.imageStyle}
        source={require('./../image/star_empty.png')}
        />
        <Image style={styles.imageStyle}
        source={require('./../image/star_empty.png')}
        />
        <Image style={styles.imageStyle}
        source={require('./../image/star_empty.png')}
        />
        <Image style={styles.imageStyle}
        source={require('./../image/star_empty.png')}
        />
        <Image style={styles.imageStyle}
        source={require('./../image/star_empty.png')}
        />
      </View>
    );
  }
}



const styles = StyleSheet.create({
  starStyle: {
    flexDirection: 'row',
  },
  imageStyle:{
    height:15,
    width:15,
  },

});

export default Stars;
