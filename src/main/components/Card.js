import React from 'react';
import {View, Text} from 'react-native'
import {Entypo} from '@expo/vector-icons';
import {Container} from "../../common/Theme";
import styled from 'styled-components/native';


export default function Card(props) {
  return (
    <Layout>
      <Header>
        <Title>{props.title}</Title>
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
  padding-left: 15;
  padding-right: 15;
`;

const ContentBody = styled.View`
  flex: 8;
  background-color: gray;
`;

const Layout = styled(Container)`
  margin-bottom: 15;
`;

const Title = styled.Text`
  font-size: 17;
  font-weight: 700;
`;
