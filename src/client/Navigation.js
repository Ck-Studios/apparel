import React from 'react';
import {createAppContainer, createStackNavigator, createMaterialTopTabNavigator, createDrawerNavigator, DrawerItems} from 'react-navigation';
import {Dimensions, StyleSheet, Image, View, Text, TouchableOpacity} from 'react-native';
import MainContainer from '../main/containers/MainContainer';
import ProfileContainer from '../profile/containers/ProfileContainer';
import SettingContainer from '../setting/containers/SettingContainer';
import {moderateScale, pointColor} from "../common/Theme";
import Header from '../common/Header';

const {width, height} = Dimensions.get('window');

const RootTab = createMaterialTopTabNavigator({
  MainContainer,
  ProfileContainer,
  SettingContainer
}, {
  swipeEnabled: true,
  tabBarPosition: 'top',
  tabBarOptions: {
    showIcon: false,
    showLabel: false,
    labelStyle: {
      color: '#b1acae'
    },
    style: {
      height: 0,
      backgroundColor: pointColor.gray4,
    },
    indicatorStyle: {
      opacity: 0,
    }
  }
});

const AppStack = createStackNavigator({
  RootTab,
}, {
  initialRouteName: 'RootTab',
  headerMode: "none",
  defaultNavigationOptions: {
    // header: navigation => (<Header navigation={navigation}/>)
  },
},);

export const AppContainer = createAppContainer(AppStack);
