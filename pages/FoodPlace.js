import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {responsiveVertical, responsiveHorizontal,responsiveFonts, MyStyle} from '../style';
import Carousel from '../components/Carousel';
import Category from '../components/Category';
import MenuItem from '../components/MenuItem';

const FoodPlace = ({navigation}) => {
  return (
    <View style={[MyStyle.flex1, MyStyle.backgroundColorFFFFFF]}>
      <Carousel />

      <View
        style={[
          MyStyle.flexrow,
          MyStyle.alignItemCenter,
          MyStyle.marginTop30,
          MyStyle.marginBottom26,
          MyStyle.paddingHorizontal20,
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
              MyStyle.fontWeight400,
              MyStyle.color000000,
              MyStyle.fontWeight700,
            ]}>
            Happy sweets
          </Text>
          <Text style={[MyStyle.fontSize12, MyStyle.color000000]}>Raipur</Text>
        </View>
      </View>
      <View style={{marginBottom: 22, marginHorizontal: 10}}>
        <Category />
      </View>

      <MenuItem navigation={navigation} />
    </View>
  );
};
export default FoodPlace;
