import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Container, ScrollContainer} from "../../common/Theme";
import Card from '../components/Card';
import NewApparel from '../components/NewApparels';
import PopularItems from '../components/PopularItems';
import styled from 'styled-components/native';
import Header from "../../common/Header";
import FloatNavigator from '../../common/FloatNavigator';

const dummyNewApparel = [
  {title: '파인 린낸 원피스', price: '12,000', image: null},
  {title: '레트 뷔스티에 세트', price: '17,900', image: null},
  {title: '코드 시스루 세트', price: '22,000', image: null},
  {title: '파인 린낸 원피스', price: '12,000', image: null},
];

const dummyPopularItems = [
  {title: '파인 린낸 원피스', price: '12,000', image: null},
  {title: '레트 뷔스티에 세트', price: '17,900', image: null},
  {title: '코드 시스루 세트', price: '22,000', image: null},
  {title: '파인 린낸 원피스', price: '12,000', image: null},
  {title: '파인 린낸 원피스', price: '12,000', image: null},
  {title: '파인 린낸 원피스', price: '12,000', image: null},
  {title: '파인 린낸 원피스', price: '12,000', image: null},
  {title: '파인 린낸 원피스', price: '12,000', image: null},
  {title: '파인 린낸 원피스', price: '12,000', image: null},
];

export default class MainContainer extends Component<Props> {
  state = {};

  render() {
    const {navigation} = this.props;
    return (
      <MainContainerWrapper>
        <Header navigation={navigation} title={'스크램블에서 무엇이든 찾아보세요.'}/>
        <ScrollContainer>
          <Card title={"WHAT'S NEW"}>
            <NewApparel data={dummyNewApparel}/>
          </Card>
          <Card title={"WHAT'S HOT"}>
            <PopularItems data={dummyPopularItems}/>
          </Card>
        </ScrollContainer>
        <FloatNavigator/>
      </MainContainerWrapper>
    )
  }
}


const MainContainerWrapper = styled(Container)`
  position: relative;
`;

const HotItems = styled.FlatList`
  
`;
