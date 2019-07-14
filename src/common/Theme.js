import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import styled from 'styled-components/native';

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;

export const scale = size => DEVICE_WIDTH / guidelineBaseWidth * size;
export const verticalScale = size => DEVICE_HEIGHT / guidelineBaseHeight * size;
export const moderateScale = (size, factor = 0.5) => size + ( scale(size) - size ) * factor;

export const pointColor = {
  red: '#e85107',
  pink: '#e84466',
  green: '#1ed07c',
  gray: '#b4b5c9',
};

export const Container = styled.View`
    flex: 1;
`;

export const RowView = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const ScrollContainer = styled.ScrollView`
    flex: 1;
`;

export const NormalText = styled.Text`
  font-size: ${moderateScale(15)}
`;

export const SmallText = styled.Text`
  font-size: ${moderateScale(12)}
`;

export const Title = styled.Text`
  font-size: ${moderateScale(20)}
`;

export const Subtitle = styled.Text`
  font-size: ${moderateScale(17)}
`;


