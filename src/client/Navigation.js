import React from 'react';
import {createAppContainer, createStackNavigator, createMaterialTopTabNavigator, createDrawerNavigator, DrawerItems} from 'react-navigation';
import {Dimensions, StyleSheet, Image, View, Text, TouchableOpacity} from 'react-native';
import MainContainer from '../main/containers/MainContainer';
import ProfileContainer from '../profile/ProfileContainer';
import Header from '../common/Header';

const {width, height} = Dimensions.get('window');

const RootTab = createMaterialTopTabNavigator({
  MainContainer: {
    screen: MainContainer,
  },

  ProfileContainer: {
    screen: ProfileContainer,
  }
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

const AppStack = createStackNavigator({
  RootTab,
}, {
  initialRouteName: 'RootTab',
  headerMode: 'none',
  defaultNavigationOptions: {
    header: navigation => (<Header navigation={navigation}/>)
  }
});

export const AppContainer = createAppContainer(AppStack);
