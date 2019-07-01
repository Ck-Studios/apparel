import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Container} from "../../common/Theme";
import Card from '../components/Card';

export default class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Container>
        <Text>Test1 hihihi</Text>
        <Card title={"WHAT'S NEW?"}/>
        <Card title={"WHAT'S NEW?"}/>
        <Card title={"WHAT'S NEW?"}/>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
