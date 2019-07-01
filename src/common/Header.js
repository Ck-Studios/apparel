import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {RowView, SearchIcon, DEVICE_HEIGHT} from "./Theme";
// import Icon from 'react-native-vector-icons/Feather';
import {Feather} from "@expo/vector-icons";
import styled from "styled-components/native";

export default function Header({toggleDrawer}) {
  return (
    <Container>
      <HeaderButton onPress={toggleDrawer ? () => toggleDrawer() : null}>
        <Feather name={'menu'} size={25} color={'#ff4253'}/>
      </HeaderButton>
      <View style={{flex: 8, alignSelf: 'stretch', justifyContent: 'center'}}>
        <HeaderText>Apparel</HeaderText>
      </View>
      <HeaderButton>
        <Feather name={'search'} size={25} color={'#ff4253'}/>
      </HeaderButton>
    </Container>
  )
}

const Container = styled.View`
  flex-direction: row;
  backgroundColor: white;
  padding-left: 10;
  padding-right: 10;
  justify-content: space-between;
  height: 60;
`;

const HeaderButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const HeaderText = styled.Text`
    align-self: center;
    font-size: 22;
    font-weight: 700
`;
