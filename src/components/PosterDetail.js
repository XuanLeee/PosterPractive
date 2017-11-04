
import React from 'react';
import { Text } from 'react-native';
import Card from './Card';

const PosterDetail = (props) =>{
  return (
    <Card>
      <Text> {props.list.name} </Text>
    </Card>
  );
};

export default PosterDetail;
