import React, {Component} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {moderateScale, pointColor, Subtitle, Title, NormalText, SmallText} from "../../common/Theme";

export default function PopularItems(props) {
  return(
    <FlatList
      data={props.data}
      keyExtractor={(item, index) => index.toString()}
      numColumns={3}
      renderItem={({item, index}) => (
        <Apparel>
          <ImageView>
            <Image source={item.image} resizeMode={'cover'}/>
          </ImageView>
        </Apparel>
      )}
    />
  )
}

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

const Apparel = styled.TouchableOpacity`
  flex: 1;
  margin-top: ${moderateScale(1)};
  margin-right: ${moderateScale(1)};
  margin-bottom: ${moderateScale(1)};
  margin-left: ${moderateScale(1)};
`;

const ImageView = styled.View`
  height: ${moderateScale(100)};
  background-color: ${pointColor.gray};
`;

// <HotItems
//   data={this.state.dataSource}
//   renderItem={({ item }) => (
//     <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
//       {/*<Image style={styles.imageThumbnail} source={{ uri: item.src }} />*/}
//     </View>
//   )}
//   numColumns={3}
//   keyExtractor={(item, index) => index}
// />
