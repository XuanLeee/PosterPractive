
import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

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
      </CardSection>
      <CardSection>
        <Text> Hide Comments </Text>
        <Image style={styles.imageStyle}
        source={require('./../image/download.png')}
        />
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
