import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import  {
  responsiveVertical,
  responsiveHorizontal,
  MyStyle,
} from '../style';

const ProfileContent = ({navigation, heading, icon, nextScreen, width, height}) => {
  return (
    <TouchableOpacity
      style={{flexDirection: 'row', alignItems: 'center'}}
      onPress={() => {
        if(nextScreen!=""){
            navigation.navigate(nextScreen);
        }
      }}>
      <Image
        source={icon}
        style={{
          width: responsiveHorizontal(32),
          height: responsiveHorizontal(32),
          marginRight: responsiveHorizontal(15),
          tintColor:'#EE9846'
        }}
      />
      <Text style={{fontSize: 12, fontWeight: '400', color: '#000000'}}>
        {heading}
      </Text>
    </TouchableOpacity>
  );
};
export default ProfileContent;
