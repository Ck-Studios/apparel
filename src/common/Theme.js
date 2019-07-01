import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import styled from 'styled-components/native';

export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;

export const Container = (props) => {
  return (
    <View style={{flex: 1,}}>
      {props.children}
    </View>
  )
};

export const RowView = styled.View`
  flex: 1;
  flex-direction: row;
`;
