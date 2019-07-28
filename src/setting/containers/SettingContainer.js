import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {moderateScale, NormalText, Title, AppContainerPadding, pointColor, SmallText} from "../../common/Theme";
import {MaterialCommunityIcons, FontAwesome5, Feather, Ionicons} from "@expo/vector-icons";
import Header from '../../common/Header';
import Switch from 'react-native-switch-pro';

export default class SettingContainer extends Component<Props> {
  static navigationOptions = {
    title: null,
  }

  state = {
    basicSettings: [
      {
        id: 1,
        icon: <MaterialCommunityIcons name={'eye'} size={25} color={pointColor.gray2}/>,
        title: '컨텐츠를 노출합니다',
        description: '컨텐츠 노출 설명',
        selected: true
      },
      {
        id: 2,
        icon: <FontAwesome5 name={'bell'} size={25} color={pointColor.gray2}/>,
        title: '새 컨텐츠가 있으면 알립니다',
        description: '알림 설명',
        selected: false
      },
    ],

    detailSettings: [
      {id: 1, icon: <Feather name={'sun'} color={pointColor.gray2} size={25}/>, title: '세부 설정 1', navigate: ''},
      {id: 2, icon: <FontAwesome5 name={'image'} color={pointColor.gray2} size={25}/>, title: '세부 설정 2', navigate: ''},
    ],
  };

  renderBasicSettings = () => {
    const {basicSettings} = this.state;

    return basicSettings.map((menu, index) => (
      <BasicSettingMenu key={index.toString()}>
        <IconAndTextWRapper>
          <IconWrapper>{menu.icon}</IconWrapper>
          <MenuTextWrapper>
            <Title fontSize={moderateScale(17)} fontWeight={500} color={pointColor.gray5}>
              {menu.title}
            </Title>
            <SettingDescription fontweight={500} color={pointColor.gray3}>
              {menu.description}
            </SettingDescription>
          </MenuTextWrapper>
        </IconAndTextWRapper>
        <Switch
          width={moderateScale(65)}
          height={moderateScale(38)}
          value={menu.selected}
          onSyncPress={() => this.onToggleSwitch(menu.id)}
          backgroundActive={pointColor.pink2}
          circleStyle={{
            width: moderateScale(30),
            height: moderateScale(30),
            marginLeft: moderateScale(2),
            marginRight: moderateScale(2)
          }}
        />
      </BasicSettingMenu>
    ))
  };

  renderDetailSettings = () => {
    const {detailSettings} = this.state;

    return detailSettings.map((menu, index) => (
      <DetailSettingMenu key={index.toString()}>
        <IconAndTextWRapper>
          <IconWrapper>{menu.icon}</IconWrapper>
          <MenuTextWrapper>
            <Title fontSize={moderateScale(18)} fontWeight={500} color={pointColor.gray5}>{menu.title}</Title>
          </MenuTextWrapper>
        </IconAndTextWRapper>
        <IconWrapper style={{marginRight: 0}}>
          <Ionicons name={'ios-arrow-forward'} color={pointColor.gray2} size={25}/>
        </IconWrapper>
      </DetailSettingMenu>
    ))
  };

  onToggleSwitch = (menuID) => {
    this.setState(state => {
      const _newBasicSettings = state.basicSettings.map(setting => {
        return setting.id === menuID ?
          Object.assign({}, setting, {selected: !setting.selected}) : setting;
      });

      return {
        basicSettings: _newBasicSettings
      };
    })
  };

  render() {
    const {navigation} = this.props;
    return (
      <SettingContainerWrapper>
        <Header navigation={navigation} leftButton={'back'} rightButton={'hide'}/>
        <ContentWrapper>
          <Title fontSize={moderateScale(35)} fontWeight={700}>설정</Title>
          <BasicSettingWrapper>
            {this.renderBasicSettings()}
            <BasicSettingDescription>기본 설정</BasicSettingDescription>
          </BasicSettingWrapper>
          <DetailSettingWraper>
            {this.renderDetailSettings()}
          </DetailSettingWraper>
        </ContentWrapper>
      </SettingContainerWrapper>
    )
  }
}

const BasicSettingDescription = styled(SmallText)`
  padding-top: ${moderateScale(40)};
  font-size: ${moderateScale(12)}
  color: ${pointColor.gray2};
`;

const IconAndTextWRapper = styled.View`
  flex-direction: row;
`;

const IconWrapper = styled.View`
  width: ${moderateScale(30)};
  margin-right: ${moderateScale(15)};
  justify-content: flex-start;
  align-items: center;
`;

const MenuTextWrapper = styled.View`
  
`;

const SettingDescription = styled(SmallText)`
  padding-top: ${moderateScale(5)};
`;

const BasicSettingMenu = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${moderateScale(20)};
  padding-bottom: ${moderateScale(20)};
  border-bottom-width: ${moderateScale(1)};
  border-bottom-color: ${pointColor.gray0};
`;

const DetailSettingMenu = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${moderateScale(20)};
  padding-bottom: ${moderateScale(20)};
  border-bottom-width: ${moderateScale(1)};
  border-bottom-color: ${pointColor.gray0};
`;


const BasicSettingWrapper = styled.View`
  padding-top: ${moderateScale(30)};
`;

const DetailSettingWraper = styled(BasicSettingWrapper)`
  padding-top: ${moderateScale(20)}
`;

const SettingContainerWrapper = styled.View`
  flex: 1;
`;

const ContentWrapper = styled.View`
  flex: 1;
  padding-top: ${moderateScale(40)};
  padding-left: ${AppContainerPadding};
  padding-right: ${AppContainerPadding};
`;

const ScreenTItleWrapper = styled.View`
  padding-top: ${moderateScale(40)};
`;

