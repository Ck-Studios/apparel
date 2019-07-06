import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Container, ScrollContainer} from "../../common/Theme";
import Card from '../components/Card';

export default class MainContainer extends Component {
  constructor(props) {
    super(props);
    console.warn(this.props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
          <Text>TESTJISEORJES</Text>
        </TouchableOpacity>
        <ScrollContainer>
          <Card title={"WHAT'S NEW"}/>
          <Card title={"WHAT'S HOT"}/>
        </ScrollContainer>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
