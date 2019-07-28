import React, {Component} from 'react';
import {View, Text, Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {moderateScale, pointColor,} from "./Theme";

const {width, height} = Dimensions.get('window');

export default class FloatNavigator extends Component<Props> {
  state = {};

  render() {
    return (
      <FloatNavigatorWrapper>
        <Text>Float Navigator</Text>
      </FloatNavigatorWrapper>
    )
  }
}

const FloatNavigatorWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  width: ${width - moderateScale(20)};
  height: ${moderateScale(50)};
  padding-left: ${moderateScale(15)};
  padding-right: ${moderateScale(15)};
  position: absolute;
  align-self: center;
  bottom: 0;
  background-color: ${pointColor.pink2};
  border-top-left-radius: ${moderateScale(10)};
  border-top-right-radius: ${moderateScale(10)};
  justify-content: space-between;
  align-items: center;
`;
