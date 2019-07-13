import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {RowView, SearchIcon, DEVICE_HEIGHT} from "./Theme";
import {Feather} from "@expo/vector-icons";
import styled from "styled-components/native";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {toggleDrawer} = this.props;
    return (
      <Container>
        <HeaderButton onPress={() => toggleDrawer()}>
          <Feather name={'menu'} size={25} color={'#ff238e'}/>
        </HeaderButton>
        <View style={{flex: 8, alignSelf: 'stretch', justifyContent: 'center'}}>
          <HeaderText>스크램블에서 무엇이든 찾아보세요.</HeaderText>
        </View>
        <HeaderButton>
          <Feather name={'search'} size={25} color={'#ff238e'}/>
        </HeaderButton>
      </Container>
    )
  }
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
  font-size: 17;
  font-weight: 400
`;
