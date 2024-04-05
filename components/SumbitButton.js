import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import  {
  responsiveVertical,
  responsiveHorizontal,
  MyStyle,
} from '../style';

 const SumbitButton = ({navigation, btnText, nextScreen}) => {
  return (
    <TouchableOpacity
      style={[MyStyle.welcomebtn, {width: '100%'}]}
      onPress={() => {
        nextScreen != '' ? navigation.navigate(nextScreen) : null;
      }}>
      <Text style={MyStyle.welcomebtntext}>{btnText}</Text>
    </TouchableOpacity>
  );
};
export default SumbitButton