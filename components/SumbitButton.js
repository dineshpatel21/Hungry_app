import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import Style, {responsiveVertical, responsiveHorizontal} from '../style';

 const SumbitButton = ({navigation, btnText, nextScreen}) => {
  return (
    <TouchableOpacity
      style={[Style.welcomebtn, {width: '100%'}]}
      onPress={() => {
        nextScreen != '' ? navigation.navigate(nextScreen) : null;
      }}>
      <Text style={Style.welcomebtntext}>{btnText}</Text>
    </TouchableOpacity>
  );
};
export default SumbitButton