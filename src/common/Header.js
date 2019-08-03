import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {RowView, SearchIcon, DEVICE_HEIGHT, moderateScale, pointColor} from "./Theme";
import {Feather} from "@expo/vector-icons";
import styled from "styled-components/native";
import {Ionicons, Foundation} from "@expo/vector-icons";
import {connect} from 'react-redux';
import NavigationService from '../client/NavigationService';
import DrawerService from '../client/DrawerService';
import {closeSearchInput, openSearchInput} from "./reducer/Actions";

class Header extends Component<Props> {
  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.isOpenSearchInput !== prevState.isOpenSearchInput) {
      return {
        isOpenSearchInput: nextProps.isOpenSearchInput,
      }
    }

    return null;
  }

  state = {
    isOpenSearchInput: false,
  };

  renderLeftButton = () => {
    const {isOpenSearchInput} = this.state;
    const {leftButton, navigation, closeSearchInput} = this.props;

    if(isOpenSearchInput) {
      return (
        <HeaderButton onPress={() => closeSearchInput()}>
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
    const {isOpenSearchInput} = this.state;
    const {rightButton, openSearchInput, navigation} = this.props;

    if(isOpenSearchInput) {
      return null;
    }

    if (rightButton === 'hide') {
      return <InvisibleHeaderButton/>;
    }

    if (rightButton === 'home') {
      return (
        <HeaderButton onPress={() => navigation.navigate('MainContainer')}>
          <Foundation name={'home'} size={moderateScale(23)} color={pointColor.pink2}/>
        </HeaderButton>
      )
    }

    if (rightButton) {
      return rightButton;
    } else {
      return (
        <HeaderButton onPress={() => openSearchInput()}>
          <Feather name={'search'} size={25} color={'#ff238e'}/>
        </HeaderButton>
      )
    }
  };

  render() {
    const {isOpenSearchInput} = this.state;
    const {title, leftButton, rightButton} = this.props;
    return (
      <HeaderContainerWrapper>
        {
          this.renderLeftButton()
        }
        {
          isOpenSearchInput ?
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

const IconButton = styled.TouchableOpacity`
  width: ${moderateScale(30)};
  height: ${moderateScale(30)};
  justify-content: center;
  align-items: center;
`;

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
  font-size: ${moderateScale(17)};
  font-weight: 700;
`;

const mapStateToProps = state => {
  return state.HeaderReducer;
};

const mapDispatchToProps = {
  openSearchInput,
  closeSearchInput
};

export default connect(mapStateToProps, mapDispatchToProps) (Header);
