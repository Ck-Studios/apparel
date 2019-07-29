import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {RowView, SearchIcon, DEVICE_HEIGHT, moderateScale, pointColor} from "./Theme";
import {Feather} from "@expo/vector-icons";
import styled from "styled-components/native";
import {Ionicons} from "@expo/vector-icons";
import NavigationService from '../client/NavigationService';
import DrawerService from '../client/DrawerService';

export default class Header extends Component<Props> {
  state = {
    showSearchInput: false,
  };

  onPressSearchButton = () => {
    this.setState(prevState => ({
      showSearchInput: !prevState.showSearchInput
    }))
  }

  renderLeftButton = () => {
    const {showSearchInput} = this.state;
    const {leftButton, navigation} = this.props;

    if(showSearchInput) {
      return (
        <HeaderButton onPress={() => this.onPressSearchButton()}>
          <Feather
            style={{
              marginLeft: moderateScale(15),
            }}
            name={'search'}
            size={25}
            color={'#ff238e'}
          />
        </HeaderButton>
      );
    }

    if (leftButton === 'hide') {
      return <InvisibleHeaderButton/>
    }

    if (leftButton === 'back') {
      return (
        <HeaderButton onPress={() => navigation.goBack()}>
          <Ionicons name={'md-arrow-round-back'} size={25} color={pointColor.pink2}/>
        </HeaderButton>
      )
    } else {
      return (
        <HeaderButton onPress={() => DrawerService.openDrawer()}>
          <Feather name={'menu'} size={25} color={'#ff238e'}/>
        </HeaderButton>
      )
    }
  };

  renderRightButton = () => {
    const {showSearchInput} = this.state;
    const {rightButton} = this.props;

    if(showSearchInput) {
      return null;
    }

    if (rightButton === 'hide') {
      return <InvisibleHeaderButton/>;
    }

    if (rightButton) {
      return rightButton;
    } else {
      return (
        <HeaderButton onPress={() => this.onPressSearchButton()}>
          <Feather name={'search'} size={25} color={'#ff238e'}/>
        </HeaderButton>
      )
    }
  };

  render() {
    const {showSearchInput} = this.state;
    const {title, leftButton, rightButton} = this.props;
    return (
      <HeaderContainerWrapper>
        {
          this.renderLeftButton()
        }
        {
          showSearchInput ?
            <View style={{flex: 8, alignSelf: 'stretch', justifyContent: 'center'}}>
              <SearchInput placeholder={'검색어를 입력하세요'}/>
            </View>
            :
            <View style={{flex: 8, alignSelf: 'stretch', justifyContent: 'center'}}>
              <HeaderText>{title ? title : '스크램블에서 무엇이든 찾아보세요.'}</HeaderText>
            </View>
        }
        {
          this.renderRightButton()
        }
      </HeaderContainerWrapper>
    )
  }
}

const SearchInput = styled.TextInput`
  flex: 1;
  margin-left: ${moderateScale(20)};
  height: ${moderateScale(30)};
  font-size: ${moderateScale(17)};
`;

const HeaderContainerWrapper = styled.View`
  flex-direction: row;
  backgroundColor: white;
  padding-left: ${moderateScale(10)};
  padding-right: ${moderateScale(10)};
  justify-content: space-between;
  height: ${moderateScale(50)};
`;

const InvisibleHeaderButton = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
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
