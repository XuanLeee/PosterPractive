
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableHighlight } from 'react-native';


class Stars extends Component{

  starChange(){

    if(this.props.star){
      return(
        <Image style={ styles.imageStyle }
        source={ require('./../image/star_empty.png')}
         />
    );
  }
   return (
     <Image style={ styles.imageStyle }
     source={ require('./../image/star.png')}
      />
   );
}


  render(){

    return (
      <View style={styles.starStyle}>

        <TouchableOpacity onPress = { this.props.whenPress} >

              {this.starChange()}

        </TouchableOpacity>


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
