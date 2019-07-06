import React from 'react';
import {createAppContainer, createStackNavigator, createMaterialTopTabNavigator, createDrawerNavigator, DrawerItems} from 'react-navigation';
import {Dimensions, StyleSheet, Image, View, Text, TouchableOpacity} from 'react-native';
import MainContainer from '../main/containers/MainContainer';
import Header from '../common/Header';
import DrawerMenu from '../common/DrawerMenu';

const {width, height} = Dimensions.get('window');

const DrawerNavigator = createDrawerNavigator({
  DrawerMenu: {
    screen: DrawerMenu,
  }
});

const RootTab = createMaterialTopTabNavigator({
  MainContainer: {
    screen: MainContainer,
  },
}, {
  swipeEnabled: true,
  // tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: false,
    showLabel: false,
    labelStyle: {
      color: '#b1acae'
    },
    style: {
      backgroundColor: 'white',
    },
    indicatorStyle: {
      opacity: 0,
    }
  }
});

const AppNavigator = createStackNavigator({
  RootTab,
}, {
  initialRouteName: 'RootTab',
  // headerMode: 'none',
  defaultNavigationOptions: {
    header: <Header/>
  }
});

// const AppDrawerNavigator = createDrawerNavigator({
//
// });

export const Drawer = createAppContainer(DrawerNavigator);

export const AppContainer = createAppContainer(AppNavigator);
