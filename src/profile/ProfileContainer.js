import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Container} from "../common/Theme";
import styled from 'styled-components/native';

export default class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Container>
        <Text>Profile Container</Text>
      </Container>
    )
  }
}
