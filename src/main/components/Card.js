import React from 'react';
import {View, Text, Platform, StyleSheet} from 'react-native';
import {Entypo} from '@expo/vector-icons';
import {Container, Title, moderateScale, isAndroid, isIOS, pointColor} from "../../common/Theme";
import styled from 'styled-components/native';


export default function Card(props) {
  return (
    <Layout style={shadow}>
      <Header>
        <CardTitle fontSize={15}>{props.title}</CardTitle>
        <Entypo name={'dots-three-horizontal'} size={15}/>
      </Header>
      <ContentBody>
        {props.children}
      </ContentBody>
    </Layout>
  )
};

const Header = styled.View`
  flex: 2;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: ${moderateScale(15)};
  padding-left: ${moderateScale(25)};
  padding-right: ${moderateScale(15)};
  padding-bottom: ${moderateScale(15)};
`;

const ContentBody = styled.View`
  flex: 8;
`;

const Layout = styled(Container)`
  backgroundColor: #ffffff};
  width: 100%;
  min-height: ${moderateScale(250)};
  margin-bottom: ${moderateScale(15)};
`;

const CardTitle = styled(Title)`
  font-size: ${moderateScale(15)};
`;

const shadow = {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});
