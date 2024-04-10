import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {responsiveVertical, responsiveHorizontal, MyStyle} from '../style';

const ProfileContent = ({
  navigation,
  heading,
  icon,
  nextScreen,
  width,
  height,
}) => {
  return (
    <TouchableOpacity
      style={[MyStyle.flexrow, MyStyle.alignItemCenter]}
      onPress={() => {
        if (nextScreen != '') {
          navigation.navigate(nextScreen);
        }
      }}>
      <Image
        source={icon}
        style={[MyStyle.icon32, MyStyle.marginRight16, MyStyle.tintColorEE9846]}
      />
      <Text
        style={[
          MyStyle.fontSize12,
          MyStyle.fontWeight400,
          MyStyle.color000000,
        ]}>
        {heading}
      </Text>
    </TouchableOpacity>
  );
};
export default ProfileContent;
