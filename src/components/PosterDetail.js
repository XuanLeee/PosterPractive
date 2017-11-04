
import React from 'react';
import { Text, View } from 'react-native';
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
        <Text> Stars </Text>
      </CardSection>
      <CardSection>
        <Text> Hide Comments </Text>
        <Text> Image </Text>
      </CardSection>
    </Card>
  );
};

export default PosterDetail;
