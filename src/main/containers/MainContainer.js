import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Container, ScrollContainer} from "../../common/Theme";
import Card from '../components/Card';

export default class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <TouchableOpacity onPress={() => this.props.toggleDrawer()}>
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
