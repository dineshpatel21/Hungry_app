import React from 'react';
import {View, Text} from 'react-native';
import MyStyle from '../style';
import Colors from '../style';

const MenuManagement = () => {
  return (
    <View style={[MyStyle.marginHorizontal20]}>
      <Text
        style={[MyStyle.fontSize28, MyStyle.fontWeight600, Colors.colorEE9846]}>
        Menu
      </Text>
      <Text style={[MyStyle.fontSize15, MyStyle.fontWeight500]}>
        Menu Management
      </Text>
    </View>
  );
};
export default MenuManagement;
