import React, {useEffect, useState} from 'react';
import {View, Text, Image, Pressable, TouchableOpacity} from 'react-native';

import delivery from '../../assets/icons/cartempty.png';
import styles, {responsiveVertical, responsiveHorizontal} from '../../style';

const InitialPage = ({navigation}) => {
  return (
    <View
      style={[
        styles.positionRelative,
        styles.justifyContentCenter,
        styles.alignItemCenter,
        styles.flex1,
        styles.backgroundColorFFFFFF,
      ]}>
      <View style={{opacity: 0}}></View>

      <View style={styles.width100}>
        <View
          style={[
            {width: responsiveHorizontal(284)},
            styles.alignItemCenter,
            styles.alignSelfCenter,
          ]}>
          <Image
            style={[
              styles.welcomeimg,
              {
                width: responsiveHorizontal(329),
                height: responsiveVertical(346),
              },
            ]}
            source={delivery}
          />
          <Text style={[{...styles.welcomehead}]}>Ouch! Hungry</Text>
          <Text style={{...styles.welcomepera}}>
            Seems like you have not ordered any food yet!
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={[styles.welcomebtn,styles.alignItemCenter,styles.justifyContentCenter, {width: responsiveHorizontal(160)}]}>
        <Text
          style={[
            styles.welcomebtntext,
            styles.colorWhite,
           
          ]}>
          Find Foods
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default InitialPage;
