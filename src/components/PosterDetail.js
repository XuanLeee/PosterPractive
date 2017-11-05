
import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Stars from './Stars';
import Comments from './Comments';

const PosterDetail = (props) =>{
  return (
    <Card>
      <CardSection>
          <Text> {props.list.name} </Text>
      </CardSection>
      <CardSection>
          <Text> {props.list.body} </Text>
      </CardSection>
      <CardSection>
        <View style={styles.headerContentStyle}>
          <Stars />
        </View>
      </CardSection>
      <CardSection>
        <View>
        <Comments whenPress={() => {console.log(props.list.email)}} >
        {props.list.email}
        </Comments>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle:{
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',

  },
   header:{
     backgroundColor: '#D3D3D3',
   },
   imageStyle:{
     height:15,
     width:15,
   },
}

export default PosterDetail;
