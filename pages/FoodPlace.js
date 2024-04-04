import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Style, {
  responsiveVertical,
  responsiveHorizontal,
  responsiveFonts,
} from '../style';
import Carousel from '../components/Carousel';
import Category from '../components/Category';
import MenuItem from '../components/MenuItem';

const FoodPlace = ({navigation}) => {
  return (
    <View style={[Style.flex1, Style.backgroundColorFFFFFF]}>
      <Carousel />

      <View
        style={[
          Style.flexrow,
          Style.alignItemCenter,
          Style.marginTop30,
          Style.marginBottom26,
          Style.paddingHorizontal20,
        ]}>
        <Image
          source={require('../assets/icons/map.png')}
          style={{
            width: responsiveHorizontal(32),
            height: responsiveHorizontal(32),
            marginRight: responsiveHorizontal(9),
          }}
        />
        <View>
          <Text
            style={[
              {fontSize: responsiveFonts(18)},
              Style.fontWeight400,
              Style.color000000,
              Style.fontWeight700,
            ]}>
            Happy sweets
          </Text>
          <Text style={[Style.fontSize12, Style.color000000]}>Raipur</Text>
        </View>
      </View>
      <View style={{marginBottom: 22,marginHorizontal:10}}>
        <Category />
      </View>

      <MenuItem navigation={navigation}/>
    </View>
  );
};
export default FoodPlace;
