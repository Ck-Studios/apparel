import React, {Component} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import styled from 'styled-components';
import {moderateScale, pointColor, Subtitle, Title, NormalText, SmallText} from "../../common/Theme";

export default function NewApparel(props) {
  const {navigation} = props;
  console.log('data::::::::::',props.data[0]);
  return(
    <FlatList
      data={props.data}
      keyExtractor={(item, index) => index.toString()}
      horizontal={true}
      renderItem={({item, index}) => (
        <Apparel onPress={() => navigation.navigate('DetailApparelContainer', {apparel: item})}>
          <ImageView>
            <Image source={item.image} resizeMode={'cover'}/>
          </ImageView>
          <Title fontSize={moderateScale(15)}>{item.title}</Title>
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

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

const ImageView = styled.View`
  width: ${moderateScale(140)};
  height: ${moderateScale(140)};
  border-radius: ${moderateScale(5)};
  margin-bottom: ${moderateScale(5)};
`;
