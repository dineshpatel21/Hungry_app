import React, {useEffect, useState} from 'react';
import {View, Text, Image, Pressable, TouchableOpacity} from 'react-native';

import delivery from '../../assets/icons/cartempty.png';
import {responsiveVertical, responsiveHorizontal, MyStyle} from '../../style';

const InitialPage = ({navigation}) => {
  return (
    <View
      style={[
        MyStyle.positionRelative,
        MyStyle.justifyContentCenter,
        MyStyle.alignItemCenter,
        MyStyle.flex1,
        MyStyle.backgroundColorFFFFFF,
      ]}>
      <View style={{opacity: 0}}></View>

      <View style={MyStyle.width100}>
        <View
          style={[
            MyStyle.alignItemCenter,
            MyStyle.alignSelfCenter,
            MyStyle.width284,
          ]}>
          <Image
            style={[MyStyle.welcomeimg, MyStyle.height346, MyStyle.width329]}
            source={delivery}
          />
          <Text style={[{...MyStyle.welcomehead}]}>Ouch! Hungry</Text>
          <Text style={{...MyStyle.welcomepera}}>
            Seems like you have not ordered any food yet!
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={[
          MyStyle.welcomebtn,
          MyStyle.alignItemCenter,
          MyStyle.justifyContentCenter,
          {width: responsiveHorizontal(160)},
        ]}>
        <Text style={[MyStyle.welcomebtntext, MyStyle.colorWhite]}>
          Find Foods
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default InitialPage;
