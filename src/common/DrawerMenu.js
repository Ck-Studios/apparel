import React, {Component} from 'react';
import {Text, ScrollView, View, Image, Dimensions, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import {RowView, Container, scale, verticalScale, moderateScale, NormalText, SmallText, Title, Subtitle, pointColor} from "./Theme";
import NavigationService from '../client/NavigationService';
import styled from 'styled-components/native';
import {FontAwesome5, FontAwesome, MaterialCommunityIcons} from "@expo/vector-icons";

const window = Dimensions.get('window');
const iconSize = moderateScale(25);
const iconColor = pointColor.gray;
const GAP_BETWEEN_MENU = moderateScale(20);

export default class DrawerMenu extends Component {
  state = {
    menuList: [
      {title: '스크램블 이용 가이드', route: ''},
      {title: '내 소식', route: '', notify: 15, notifyIconColor: pointColor.pink2},
      {title: '알림', route: '', statusMark: <Spot color={pointColor.green}/>, notify: 13, notifyIconColor: pointColor.gray},
      {title: '추천 컨텐츠', route: '', statusMark: <Spot color={pointColor.pink2}/>, notify: 2, notifyIconColor: pointColor.gray},
    ],

    menuWithIcon: [
      {
        title: '이벤트',
        status: 12,
        icon: <MaterialCommunityIcons name={'gift'} color={iconColor} size={iconSize}/>,
        route: ''
      },
      {
        title: '장바구니',
        status: 12,
        icon: <FontAwesome5 name={'shopping-cart'} color={iconColor} size={iconSize}/>,
        route: ''
      },
      {
        title: '스크램블 페이',
        status: 12,
        icon: <FontAwesome name={'credit-card-alt'} color={iconColor} size={iconSize}/>,
        route: ''
      },
      {title: '', status: 12, icon: <FontAwesome5 name={'plus'} color={iconColor} size={iconSize}/>, route: ''},
    ]
  };

  render() {
    const {menuList, menuWithIcon} = this.state;
    const {drawer} = this.props;

    return (
      <Container>
        <ScrollView scrollsToTop={false} style={styles.menu}>
          <View style={styles.profileContainer}>
            <AvatarWrapper
              onPress={() => NavigationService.navigate('ProfileContainer')}
            />
            <View>
              <Title fontWeight={'500'}>이가현</Title>
              <SmallText color={pointColor.gray}>gahyun@gmail.com</SmallText>
              <SmallText color={pointColor.gray}>페이스북 인증됨</SmallText>
            </View>
            <TouchableOpacity
              onPress={() => NavigationService.navigate('SettingContainer')}
            >
              <MaterialCommunityIcons name={'settings'} color={iconColor} size={iconSize + 10}/>
            </TouchableOpacity>
          </View>
          <IconMenuWrapper>
            {
              menuWithIcon.map((menu, index) => (
                <IconMenu key={index}>
                  {menu.icon}
                  <IconMenuName>{menu.title}</IconMenuName>
                </IconMenu>
              ))
            }
          </IconMenuWrapper>
          <TextMenuWrapper>
            {
              menuList.map((menu, index) => (
                <Menu
                  onPress={() => Alert.alert('로그인을 해주세요!')}
                  key={index}
                >
                  <MenuTitleWrapper>
                    {menu.statusMark && menu.statusMark}
                    <MenuTitle index={index}>
                      {menu.title}
                    </MenuTitle>
                  </MenuTitleWrapper>
                  {
                    menu.notify &&
                      <NotificationMark color={menu.notifyIconColor}>
                        <NormalText style={{color: '#ffffff', fontWeight: '500'}}>{menu.notify}</NormalText>
                      </NotificationMark>
                  }
                </Menu>
              ))
            }
          </TextMenuWrapper>
        </ScrollView>
      </Container>
    )
  }
}

const NotificationMark = styled.View`
  width: ${moderateScale(40)};
  height: ${moderateScale(30)};
  border-radius: ${moderateScale(5)};
  background-color: ${({color}) => color};
  justify-content: center;
  align-items: center;
`;

const Spot = styled.View`
  width: ${moderateScale(10)};
  height: ${moderateScale(10)};
  border-radius: ${moderateScale(5)};
  background-color: ${({color}) => color};
  margin-right: ${moderateScale(20)};
`;

const MenuTitle = styled(NormalText)`
  font-size: ${({index}) => index > 1 ? moderateScale(15) : moderateScale(17)};
  font-weight: ${({index}) => index > 1 ? 300 : 400};
`;

const TextMenuWrapper = styled.View`
  margin-top: ${moderateScale(30)};
`;

const IconMenuWrapper = styled(RowView)`
  margin-top: ${moderateScale(30)};
  justify-content: space-between;
`;

const IconMenu = styled.TouchableOpacity`
  justify-content: center;
  align-items: center; 
`;

const IconMenuName = styled(SmallText)`
  padding-top: ${moderateScale(7)};
`;

const AvatarWrapper = styled.TouchableOpacity`
  width: ${moderateScale(50)};
  height: ${moderateScale(50)};
  border-radius: ${moderateScale(5)};
  background-color: ${iconColor};
`;

const Menu = styled.TouchableOpacity`
  flex-direction: row;
  padding-top: ${GAP_BETWEEN_MENU};
  padding-bottom: ${GAP_BETWEEN_MENU};
  padding-right: ${GAP_BETWEEN_MENU};
  border-bottom-width: 1;
  border-bottom-color: ${pointColor.gray0};
`;

const MenuTitleWrapper = styled(RowView)`
  align-items: center;
`;

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: moderateScale(10),
    paddingBottom: moderateScale(10),
    paddingLeft: moderateScale(30),
    paddingRight: moderateScale(30),
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: moderateScale(10),
    paddingBottom: moderateScale(10),
    marginTop: moderateScale(20),
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
  },
});
