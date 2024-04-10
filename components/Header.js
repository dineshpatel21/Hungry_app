import React from 'react';
import {View, Text, Image} from 'react-native';
import {
  responsiveVertical,
  responsiveHorizontal,
  responsiveFonts,
  MyStyle,
} from '../style';
const Header = () => {
  return (
    <View
      style={[
        MyStyle.flexrow,
        MyStyle.alignItemCenter,
        MyStyle.justifyContentSpaceBetween,
        MyStyle.marginTop18,
      ]}>
      <View style={[MyStyle.flexrow, MyStyle.alignItemCenter]}>
        <Image
          source={require('../assets/icons/location.png')}
          style={[MyStyle.icon32, MyStyle.marginRight18]}
        />
        <View>
          <Text
            style={[MyStyle.fontSize15, MyStyle.fontWeight400]}>
            Delivering to
          </Text>
          <Text style={[,MyStyle.color238152,MyStyle.fontSize15]}>
            Raipur
          </Text>
        </View>
      </View>
      <View>
        <Image
          source={require('../assets/icons/Noti.png')}
          style={[MyStyle.icon27]}
        />
      </View>
    </View>
  );
};
export default Header;
