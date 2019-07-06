import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import styled from 'styled-components/native';

export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;

export const Container = styled.View`
    flex: 1;
`;

export const RowView = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const ScrollContainer = styled.ScrollView`
    flex: 1;
`;