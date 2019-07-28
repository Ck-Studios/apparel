import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Container, moderateScale, NormalText, pointColor, SmallText, Subtitle, Title} from "../../common/Theme";
import styled from 'styled-components/native';
import Header from '../../common/Header';
import {FontAwesome5, FontAwesome, MaterialCommunityIcons, Feather, Ionicons} from "@expo/vector-icons";

const profile = {
  name: '이가현',
  mail: 'gahyun@gmail.com',
  verified: '페이스북 인증됨',
};

export default class ProfileContainer extends Component<Props> {
  state = {};

  render() {
    const {navigation} = this.props;
    return (
      <ProfileContainerWrapper>
        <Header navigation={navigation} title={'프로필'} leftButton={'back'} rightButton={'hide'}/>
        <ContentWrapper>
          <AvatarContainer>
            <AvatarWrapper>
              <EditButton>
                <MaterialCommunityIcons name={'pencil'} color={'#ffffff'} size={moderateScale(18)}/>
              </EditButton>
            </AvatarWrapper>
          </AvatarContainer>
          <FormContainer>
            <FormTitle fontWeight={500} color={pointColor.gray1}>기본 설정</FormTitle>
            <Form>
              <Title color={pointColor.gray4} fontSize={18} fontWeight={500}>이름</Title>
              <VerifiedInfo color={pointColor.gray4} fontSize={18} fontWeight={400}>{profile.name}</VerifiedInfo>
              <IconWrapper/>
            </Form>
            <Form>
              <Title color={pointColor.gray4} fontSize={18} fontWeight={500}>메일</Title>
              <VerifiedInfo color={pointColor.gray4} fontSize={18} fontWeight={400}>{profile.mail}</VerifiedInfo>
              <IconWrapper>
                <Feather name={'info'} color={pointColor.gray2} size={25}/>
              </IconWrapper>
            </Form>
            <Form>
              <Title color={pointColor.gray4} fontSize={18} fontWeight={500}>인증</Title>
              <VerifiedInfo color={pointColor.gray4} fontSize={18} fontWeight={400}>{profile.verified}</VerifiedInfo>
              <IconWrapper>
                <Ionicons name={'ios-arrow-forward'} color={pointColor.gray2} size={25}/>
              </IconWrapper>
            </Form>
            <FooterMessage color={pointColor.gray2} fontWeight={400} fontSize={13}>
              기본 정보를 수정하시면 추천에 반영되기까지 다소 시간이 소요됩니다.
            </FooterMessage>
          </FormContainer>
        </ContentWrapper>
      </ProfileContainerWrapper>
    )
  }
}

const ContentWrapper = styled.View`
  flex: 1;
  padding-left: ${moderateScale(20)};
  padding-right: ${moderateScale(20)};
`;

const EditButton = styled.TouchableOpacity`
  width: ${moderateScale(40)};
  height: ${moderateScale(40)};
  border-radius: ${moderateScale(20)};
  background-color: ${pointColor.pink};
  position: absolute;
  bottom: ${moderateScale(-18)};
  align-self: center;
  justify-content: center;
  align-items: center;
`;

const FooterMessage = styled(NormalText)`
  margin-top: ${moderateScale(30)};
  line-height: 20;
`;

const FormTitle = styled(SmallText)`
  padding-top: ${moderateScale(30)};
  padding-bottom: ${moderateScale(30)};
`;

const IconWrapper = styled.View`
  width: ${moderateScale(30)};
  height: ${moderateScale(30)};
  justify-content: center;
  align-items: center;
`;

const ProfileContainerWrapper = styled(Container)`
`;

const VerifiedInfo = styled(Subtitle)`
  width: ${moderateScale(200)};
  padding-left: ${moderateScale(20)};
  text-align: left;
`;

const AvatarContainer = styled.View`
  flex: 3;
  justify-content: center;
  align-items: center;
`;

const AvatarWrapper = styled.View`
  width: ${moderateScale(120)};
  height: ${moderateScale(120)};
  border-radius: ${moderateScale(7)};
  background-color: ${pointColor.gray};
  position: relative;
`;

const FormContainer = styled.View`
  flex: 7;
`;

const Form = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: ${moderateScale(15)};
  padding-bottom: ${moderateScale(15)};
  border-bottom-width: 1;
  border-bottom-color: ${pointColor.gray0};
`;
