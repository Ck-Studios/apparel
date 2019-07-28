import React from 'react';
import {View, Text, StyleSheet, Dimensions, Platform} from 'react-native';
import styled from 'styled-components/native';

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;

export const scale = size => DEVICE_WIDTH / guidelineBaseWidth * size;
export const verticalScale = size => DEVICE_HEIGHT / guidelineBaseHeight * size;
export const moderateScale = (size, factor = 0.5) => size + ( scale(size) - size ) * factor;

export const AppContainerPadding = moderateScale(20);

export const pointColor = {
  red: '#e85107',
  pink: '#e84466',
  pink2: '#ff238e',
  green: '#1ed07c',
  gray: '#b4b5c9',
  gray0: '#ebebeb',
  gray1: '#b5b5b5',
  gray2: '#ababab',
  gray3: '#767676',
  gray4: '#484848',
  gray5: '#373737'
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
  font-size: ${props => props.fontSize ? props.fontSize : moderateScale(15)};
  color: ${props => props.color ? props.color : '#000000'};
  font-weight: ${props => props.fontWeight ? props.fontWeight : '400'};
`;

export const SmallText = styled.Text`
  font-size: ${props => props.fontSize ? props.fontSize : moderateScale(12)};
  color: ${props => props.color ? props.color : '#000000'};
  font-weight: ${props => props.fontWeight ? props.fontWeight : '400'};
`;

export const Title = styled.Text`
  font-size: ${props => props.fontSize ? props.fontSize : moderateScale(20)};
  color: ${props => props.color ? props.color : '#000000'};
  font-weight: ${props => props.fontWeight ? props.fontWeight : '400'};
`;

export const Subtitle = styled.Text`
  font-size: ${props => props.fontSize ? props.fontSize : moderateScale(17)};
  color: ${props => props.color ? props.color : '#000000'};
  font-weight: ${props => props.fontWeight ? props.fontWeight : '400'};
`;


