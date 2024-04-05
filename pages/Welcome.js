import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import  {
  responsiveVertical,
  responsiveHorizontal,
  MyStyle,
} from '../style';

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
        ]}
        >
        <Image
          source={require('.././assets/icons/HUNGRY_LOGO.png')}
          style={{
            width: responsiveHorizontal(179),
            height: responsiveVertical(178),
            marginTop: responsiveHorizontal(90),
            marginBottom: responsiveHorizontal(56),
            alignSelf: 'center',
          }}
        />
        <View
          style={{
            width: responsiveHorizontal(180),
            // height: responsiveVertical(88),
            marginLeft: responsiveHorizontal(20),
          }}>
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
          style={{
            width: responsiveHorizontal(266),
            height: responsiveVertical(84),
            marginLeft: responsiveHorizontal(20),

            marginTop: responsiveVertical(10),
          }}>
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
        <View
          style={{
            position: 'absolute',
            bottom: responsiveVertical(-70),
            left: responsiveHorizontal(-70),
          }}>
          <Image
            source={require('.././assets/icons/FOOD_WELCOME.png')}
            style={{
              width: responsiveHorizontal(306.24),
              height: responsiveVertical(246.05),
            }}
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

            {
              bottom: responsiveVertical(64),
              right: responsiveHorizontal(0),
              borderTopLeftRadius: responsiveVertical(30),
              borderBottomLeftRadius: responsiveVertical(30),
              width: responsiveHorizontal(151),
              height: responsiveVertical(46),
              justifyContent: 'flex-end',
            },
          ]}>
          <View
            style={[
              MyStyle.flexrow,
              MyStyle.alignItemCenter,

              {
                marginLeft: responsiveHorizontal(30),
                marginRight: responsiveHorizontal(16),
              },
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
              style={{
                width: responsiveHorizontal(15),
                height: responsiveHorizontal(15),
                tintColor: '#000000',
              }}
            />
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};
export default Welcome;
