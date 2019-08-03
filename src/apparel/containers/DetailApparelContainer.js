import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';
import Carousel from 'react-native-looped-carousel';
import {moderateScale, NormalText, pointColor, SmallText, Title} from "../../common/Theme";
import Header from '../../common/Header';
import {FontAwesome5, MaterialCommunityIcons, MaterialIcons, Entypo} from "@expo/vector-icons";

export default class DetailApparelContainer extends Component<Props> {
  state = {};

  render() {
    const {navigation} = this.props;
    const apparel = navigation.getParam('apparel');
    return (
      <DetailApparelContainerWrapper
        contentContainerStyle={{height: '100%'}}
      >
        <ContentWrapper>
          <Header navigation={navigation} title={apparel.title} leftButton={'back'} rightButton={'home'}/>
          <SwipeWrapper autoplay={false} scrollEventThrottle={16}>
            <ImageWrapper>
              <Image source={apparel.image} resizeMode={'contain'}/>
            </ImageWrapper>
            <ImageWrapper>
              <Image source={apparel.image} resizeMode={'contain'}/>
            </ImageWrapper>
          </SwipeWrapper>
          <DescriptionWrapper>
            <BrandName>{apparel.title}</BrandName>
            <ItemName fontWeight={700}>{apparel.title}</ItemName>
            <HistoryWrapper>
              <MaterialCommunityIcons name={'heart'} size={25} color={pointColor.gray2}/>
              <HistoryText>512</HistoryText>
              <MaterialCommunityIcons name={'eye'} size={25} color={pointColor.gray2}/>
              <HistoryText>4087</HistoryText>
            </HistoryWrapper>
          </DescriptionWrapper>
        </ContentWrapper>

        <Footer>
          <FooterButton border>
            <FontAwesome5 name={'shopping-cart'} color={'#ffffff'} size={moderateScale(15)}/>
            <ButtonText color={'#ffffff'}>장바구니 담기</ButtonText>
          </FooterButton>

          <FooterButton>
            <MaterialIcons name={'shopping-basket'} color={'#ffffff'} size={moderateScale(20)}/>
            <ButtonText color={'#ffffff'}>바로 구매하기</ButtonText>
          </FooterButton>
        </Footer>
      </DetailApparelContainerWrapper>
    )
  }
}

const ContentWrapper = styled.View``;

const Footer = styled.View`
  position: absolute;
  flex-direction: row;
  width: 100%;
  height: ${moderateScale(70)};
  bottom: 0;
`;

const ButtonText = styled(NormalText)`
  padding-left: ${moderateScale(5)};
`;

const FooterButton = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  background-color: ${pointColor.pink2};
  justify-content: center;
  align-items: center;
  border-right-width: ${({border}) => border ? moderateScale(1) : 0};
  border-right-color: #ffffff;
`;

const HistoryWrapper = styled.View`
  flex-direction: row;
  padding-top: ${moderateScale(5)};
`;

const HistoryText = styled(SmallText)`
  padding-left: ${moderateScale(10)};
  padding-right: ${moderateScale(20)};
  padding-bottom: ${moderateScale(5)};
  color: ${pointColor.gray2};
  align-self: flex-end;
`;

const DescriptionWrapper = styled.View`
  height: 100%;
  padding-top: ${moderateScale(30)};
  padding-left: ${moderateScale(30)};
`;

const BrandName = styled(SmallText)`
`;

const ItemName = styled(Title)`
  padding-top: ${moderateScale(10)};
`;

const ImageWrapper = styled.View`
  flex: 1;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

const DetailApparelContainerWrapper = styled.ScrollView`
  position: relative;
  flex: 1;
`;

const SwipeWrapper = styled(Carousel)`
  width: 100%;
  height: ${moderateScale(350)};
`;
