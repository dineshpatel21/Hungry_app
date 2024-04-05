import React from 'react';
import {View, Text} from 'react-native';
import  {
  responsiveVertical,
  responsiveHorizontal,
  MyStyle,
} from '../style';
const MenuManagement = () => {
  return (
    <View>
      <Text
        style={[MyStyle.fontSize28, MyStyle.fontWeight600, MyStyle.colorEE9846]}>
        Menu
      </Text>
      <Text style={[MyStyle.fontSize15, MyStyle.fontWeight500]}>
        Menu Management
      </Text>
    </View>
  );
};
export default MenuManagement;
