import React, {useEffect, useState} from 'react';
import {View, Text, Image, Pressable, TouchableOpacity} from 'react-native';
import explorer from '../assets/icons/HUNGRY_EXPLORER.png';
import shops from '../assets/icons/HUNGRY_SHOP.png';
import delivery from '../assets/icons/DELIVERY_BOYS.png';

import {responsiveVertical, responsiveHorizontal, MyStyle} from '../style';

const InitialPage = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {}, 5000);
  }, []);

  const welcomedata = [
    {
      page: 1,
      headline: 'HUNGRY EXPLORER',
      lines: 'Who want to explore and order delicious food.',
    },
    {
      page: 2,
      headline: 'HUNGRY HEROS',
      lines:
        'For businesses or individuals eager to sell their delightful food creations.',
    },
    {
      page: 3,
      headline: 'DELIVERY BOYS',
      lines: 'For individuals keen on becoming delivery partners.',
    },
  ];

  const [pagedata, setPagedata] = useState(welcomedata[0]);

  const nextscreen = async () => {
    if (pagedata.page < 3) {
      let pn = pagedata.page;
      setPagedata(welcomedata[pn]);
    } else {
      navigation.navigate('welcome');
    }
  };

  const prevscreen = () => {
    if (pagedata.page > 1) {
      let pn = pagedata.page;
      setPagedata(welcomedata[pn - 2]);
    }
  };

  return (
    <View
      style={[
        MyStyle.positionRelative,
        MyStyle.justifyContentCenter,
        MyStyle.alignItemCenter,
        MyStyle.flex1,
        MyStyle.backgroundColorFFFFFF,
      ]}
      onTouchStart={e => (this.touchX = e.nativeEvent.pageX)}
      onTouchEnd={e => {
        if (this.touchX - e.nativeEvent.pageX > 20) {
          nextscreen();
        }
        if (this.touchX + 20 < e.nativeEvent.pageX) {
          prevscreen();
        }
      }}>
      <View style={{opacity: 0}}></View>

      <View style={MyStyle.width100}>
        <View
          style={[
            MyStyle.alignItemCenter,
            MyStyle.alignSelfCenter,
            MyStyle.width284,
          ]}>
          <Image
            style={[
              MyStyle.welcomeimg,
              pagedata.page === 1
                ? MyStyle.i1
                : pagedata.page === 2
                ? MyStyle.i2
                : MyStyle.i3,
            ]}
            source={
              pagedata.page === 1
                ? explorer
                : pagedata.page === 2
                ? shops
                : delivery
            }
          />
          <Text style={[{...MyStyle.welcomehead}]}>{pagedata.headline}</Text>
          <Text style={{...MyStyle.welcomepera}}>{pagedata.lines}</Text>
        </View>
      </View>

      <TouchableOpacity style={MyStyle.welcomebtn} onPress={nextscreen}>
        <Text style={MyStyle.welcomebtntext}>Next</Text>
      </TouchableOpacity>

      <Text
        style={[
          MyStyle.skip,
          MyStyle.fontWeight700,
          MyStyle.fontSize19,
          MyStyle.colorEE9846,
          MyStyle.marginTop13,
        ]}
        onPress={async () => {
          navigation.navigate('welcome');
        }}>
        Skip
      </Text>

      <View
        style={[
          MyStyle.width100,
          MyStyle.alignItemCenter,
          MyStyle.marginTop18,
        ]}>
        <View style={MyStyle.welcomedots}>
          <View
            style={
              pagedata.page === 1 ? MyStyle.dotactive : MyStyle.dot
            }></View>
          <View
            style={
              pagedata.page === 2 ? MyStyle.dotactive : MyStyle.dot
            }></View>
          <View
            style={
              pagedata.page === 3 ? MyStyle.dotactive : MyStyle.dot
            }></View>
        </View>
      </View>
    </View>
  );
};

export default InitialPage;
