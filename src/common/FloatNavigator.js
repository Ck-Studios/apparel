import React, {Component} from 'react';
import {View, Text, Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {FontAwesome5, Ionicons} from "@expo/vector-icons";
import {moderateScale, pointColor,} from "./Theme";

const {width, height} = Dimensions.get('window');

export default class FloatNavigator extends Component<Props> {
  state = {};

  render() {
    return (
      <FloatNavigatorWrapper>
        <IconWrapper>
          <FontAwesome5 name={'fire'} size={moderateScale(20)} color={pointColor.gray2}/>
        </IconWrapper>
        <Text>Float Navigator</Text>
        <IconWrapper>
          <Ionicons name={'ios-briefcase'} size={moderateScale(20)} color={pointColor.gray2}/>
        </IconWrapper>
      </FloatNavigatorWrapper>
    )
  }
}

const IconWrapper = styled.TouchableOpacity`
  width: ${moderateScale(30)};
  height: ${moderateScale(30)};
  justify-content: center;
  align-items: center;
`;

const FloatNavigatorWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  width: ${width - moderateScale(20)};
  height: ${moderateScale(70)};
  padding-left: ${moderateScale(40)};
  padding-right: ${moderateScale(40)};
  position: absolute;
  align-self: center;
  bottom: 0;
  background-color: #ffffff;
  border-top-left-radius: ${moderateScale(10)};
  border-top-right-radius: ${moderateScale(10)};
  justify-content: space-between;
  align-items: center;
`;
