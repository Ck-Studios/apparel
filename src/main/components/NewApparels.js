import React, {Component} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import styled from 'styled-components';
import {moderateScale, pointColor, Subtitle, Title, NormalText, SmallText} from "../../common/Theme";

export default function NewApparel(props) {
  return(
    <FlatList
      data={props.data}
      keyExtractor={(item, index) => index.toString()}
      horizontal={true}
      renderItem={({item, index}) => (
        <Apparel>
          <ImageView/>
          <Title fontSize={15}>{item.title}</Title>
          <SmallText color={pointColor.gray2}>{item.price}원</SmallText>
        </Apparel>
      )}
    />
  )
}

const Apparel = styled.TouchableOpacity`
  flex: 1;
  margin-left: ${moderateScale(20)};
  align-items: center;
  justify-content: flex-start;
`;

const ImageView = styled.View`
  width: ${moderateScale(140)};
  height: ${moderateScale(140)};
  border-radius: ${moderateScale(5)};
  margin-bottom: ${moderateScale(5)};
  background-color: ${pointColor.gray};
`;
