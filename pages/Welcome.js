import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {responsiveVertical, responsiveHorizontal, MyStyle} from '../style';

const Welcome = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <LinearGradient
        style={{flex: 1}}
        // colors={['rgba(255, 255, 255, 0)', 'rgba(234, 156, 81, 1)']}
        colors={[
          'rgba(255, 255, 255, 0)',
          'rgba(240, 184, 131, 0.52)',
          'rgba(238, 175, 115, 0.59)',
          'rgba(234, 156, 81, 0.73)',
        ]}>
        <Image
          source={require('.././assets/icons/HUNGRY_LOGO.png')}
          style={[
            MyStyle.alignSelfCenter,
            MyStyle.marginBottom56,
            MyStyle.marginTop90,
            MyStyle.width179,
            MyStyle.height178,
          ]}
        />
        <View style={[MyStyle.width180, MyStyle.marginLeft18]}>
          <Text
            style={[
              MyStyle.fontSize30,
              MyStyle.color000000,
              {lineHeight: 35.65, fontWeight: 'bold'},
            ]}>
            WELCOME TO <Text style={[MyStyle.colorffebeb]}>HUNGRY</Text>
          </Text>
        </View>
        <View
          style={[MyStyle.wel_des, MyStyle.marginTop10, MyStyle.marginLeft18]}>
          <Text
            style={[
              MyStyle.fontSize15,
              MyStyle.fontWeight400,
              MyStyle.color000000,
              MyStyle.lineHeight,
            ]}>
            Whether you're a customer eager to savor delicious dishes, a staller
            looking to showcase culinary masterpieces, or aim to bring joy as a
            delivery partner – Hungry is your all-in-one destination.
          </Text>
        </View>
        <View style={[MyStyle.positionAbsolute, MyStyle.food_wel]}>
          <Image
            source={require('.././assets/icons/FOOD_WELCOME.png')}
            style={[MyStyle.welcom]}
          />
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Signup');
          }}
          style={[
            MyStyle.flexrow,
            MyStyle.positionAbsolute,
            MyStyle.bgWhite,
            MyStyle.paddingVertical10,
            MyStyle.bbjc,
            MyStyle.bottom64,
            MyStyle.width151,
            MyStyle.height46,MyStyle.right0
          ]}>
          <View
            style={[
              MyStyle.flexrow,
              MyStyle.alignItemCenter,
              MyStyle.marginLeft30,
              MyStyle.marginRight16,
            ]}>
            <Text
              style={[
                MyStyle.fontSize20,
                MyStyle.marginRight18,
                MyStyle.fontWeightBold,
                MyStyle.color000000,
              ]}>
              START
            </Text>
            <Image
              source={require('.././assets/icons/Arrow_right.png')}
              style={[MyStyle.icon14, MyStyle.tintColorBlack]}
            />
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};
export default Welcome;
