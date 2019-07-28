import {AppLoading} from 'expo';
import {Asset} from 'expo-asset';
import * as Font from 'expo-font';
import React, {Component} from 'react';
import {Platform, StatusBar, StyleSheet, View, SafeAreaView, TouchableWithoutFeedback} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {AppContainer} from "./src/client/Navigation";
import Drawer from 'react-native-drawer';
import DrawerMenu from './src/common/DrawerMenu';
import NavigationService from './src/client/NavigationService';
import DrawerService from './src/client/DrawerService';
import Header from './src/common/Header';
import TouchableOpacity from "react-native-web/dist/exports/TouchableOpacity";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingComplete: false,
      drawerOpen: false,
    }
  }

  toggleDrawerMenu = () => {
    this.setState(prev => ({
      drawerOpen: true,
    }));
  };

  handleLoadingError = (error: Error) => {
    // In this case, you might want to report the error to your error reporting
    // service, for example Sentry
    console.warn(error);
  };

  handleFinishLoading = () => {
    this.setState({
      isLoadingComplete: true,
    })
  };

  loadResourcesAsync = async () => {
    await Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free to
        // remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  render() {
    const {isLoadingComplete, drawerOpen} = this.state;
    const {skipLoadingScreen} = this.props;

    if (!isLoadingComplete && !skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={() => this.handleFinishLoading()}
        />
      );
    } else {
      return (
        <SafeAreaView style={styles.container}>
          <Drawer
            type={"overlay"}
            ref={(drawerRef) => {
              this._drawer = drawerRef;
              DrawerService.setTopLevelDrawer(drawerRef);
            }}
            open={drawerOpen}
            content={<DrawerMenu drawer={this._drawer}/>}
            tapToClose={true}
            openDrawerOffset={0.2}
            panCloseMask={0.2}
            closedDrawerOffset={-3}
            tweenHandler={(ratio) => ({
              main: { opacity:(2-ratio)/2 }
            })}
          >
            {/*<Header toggleDrawer={() => this.toggleDrawerMenu()}/>*/}
            <AppContainer
              ref={navigatorRef => {
                NavigationService.setTopLevelNavigator(navigatorRef);
              }}
            />
          </Drawer>
        </SafeAreaView>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
