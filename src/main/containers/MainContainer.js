import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Container, moderateScale, pointColor, ScrollContainer} from "../../common/Theme";
import {connect} from 'react-redux';
import Card from '../components/Card';
import NewApparel from '../components/NewApparels';
import PopularItems from '../components/PopularItems';
import styled from 'styled-components/native';
import Header from "../../common/Header";
import FloatNavigator from '../../common/FloatNavigator';
import {Entypo} from '@expo/vector-icons';
import {closeSearchInput} from "../../common/reducer/Actions";

const dummyNewApparel = [
  {title: '파인 린낸 원피스', price: '12,000', image: require('../../../assets/images/sample1.jpg')},
  {title: '레트 뷔스티에 세트', price: '17,900', image: require('../../../assets/images/sample2.jpeg')},
  {title: '코드 시스루 세트', price: '22,000', image: require('../../../assets/images/sample3.jpeg')},
  {title: '파인 린낸 원피스', price: '12,000', image: require('../../../assets/images/sample2.jpeg')},
];

const dummyPopularItems = [
  {title: '파인 린낸 원피스', price: '12,000', image: require('../../../assets/images/sample2.jpeg')},
  {title: '레트 뷔스티에 세트', price: '17,900', image: require('../../../assets/images/sample3.jpeg')},
  {title: '코드 시스루 세트', price: '22,000', image: require('../../../assets/images/sample1.jpg')},
  {title: '파인 린낸 원피스', price: '12,000', image: require('../../../assets/images/sample1.jpg')},
  {title: '파인 린낸 원피스', price: '12,000', image: require('../../../assets/images/sample2.jpeg')},
  {title: '파인 린낸 원피스', price: '12,000', image: require('../../../assets/images/sample3.jpeg')},
  {title: '파인 린낸 원피스', price: '12,000', image: require('../../../assets/images/sample2.jpeg')},
  {title: '파인 린낸 원피스', price: '12,000', image: require('../../../assets/images/sample1.jpg')},
  {title: '파인 린낸 원피스', price: '12,000', image: require('../../../assets/images/sample2.jpeg')},
];

class MainContainer extends Component<Props> {
  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      isOpenSearchInput: nextProps.isOpenSearchInput,
    }
  }

  state = {};

  render() {
    const {navigation, closeSearchInput} = this.props;
    const {isOpenSearchInput} = this.state;
    return (
      <MainContainerWrapper>
        <Header
          navigation={navigation}
        />
        <ScrollContainer>
          <Card title={"WHAT'S NEW"}>
            <NewApparel
              navigation={navigation}
              data={dummyNewApparel}/>
          </Card>
          <Card title={"WHAT'S HOT"}>
            <PopularItems
              navigation={navigation}
              data={dummyPopularItems}/>
          </Card>
        </ScrollContainer>
        {
          isOpenSearchInput ?
            <CloseSearchInputButton onPress={() => closeSearchInput()}>
              <Entypo name={'cross'} size={moderateScale(30)} color={'#ffffff'}/>
            </CloseSearchInputButton>

            :
            <FloatNavigator/>
        }
      </MainContainerWrapper>
    )
  }
}


const MainContainerWrapper = styled(Container)`
  position: relative;
`;

const HotItems = styled.FlatList`
  
`;

const CloseSearchInputButton = styled.TouchableOpacity`
  width: ${moderateScale(58)};
  height: ${moderateScale(58)};
  border-radius: ${moderateScale(29)};
  align-self: center;
  position: absolute;
  bottom: ${moderateScale(50)};
  background-color: ${pointColor.pink2};
  justify-content: center;
  align-items: center;
`;

const mapStateToProps = state => {
  return state.HeaderReducer;
};

const mapDispatchToProps = {
  closeSearchInput
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
