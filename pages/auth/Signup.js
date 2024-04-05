import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import  {
  responsiveVertical,
  responsiveHorizontal,
  MyStyle,
} from '../../style';
import SumbitButton from '../../components/SumbitButton';
const Signup = ({navigation}) => {
  return (
    <View style={[MyStyle.flex1]}>
      <LinearGradient
        style={[MyStyle.flex1]}
        colors={[
          'rgba(255, 255, 255, 0)',
          'rgba(240, 184, 131, 0.52)',
          'rgba(238, 175, 115, 0.59)',
          'rgba(234, 156, 81, 0.73)',
        ]}>
        <ScrollView style={[MyStyle.flex1, MyStyle.paddingHorizontal20]}>
          <View
            style={{
              marginTop: responsiveVertical(74),
              width: responsiveHorizontal(284),
            }}>
            <Text
              style={[
                MyStyle.fontSize28,
                MyStyle.color000000,
                MyStyle.colorD18741,
                MyStyle.fontWeight700,
              ]}>
              CREATE YOUR NEW ACCOUNT
            </Text>
          </View>
          <View
            style={[
              {
                width: responsiveHorizontal(246),
                marginBottom: responsiveVertical(20),
              },
            ]}>
            <Text
              style={[
                MyStyle.fontSize15,
                MyStyle.fontWeight700,

                MyStyle.lineHeight,
                {
                  color: 'rgba(0, 0, 0, 0.44)',
                  marginTop: responsiveVertical(5),
                },
              ]}>
              Create an account to start looking for the food you like
            </Text>
          </View>
          <View style={[{marginBottom: responsiveVertical(12)}]}>
            <Text
              style={[
                MyStyle.fontSize17,
                MyStyle.fontWeight400,
                {color: 'rgba(0, 0, 0, 1)'},
              ]}>
              Enter Your Phone Number
            </Text>
          </View>
          <TextInput
            style={[
              MyStyle.width100,
              MyStyle.borderRadius10,
              MyStyle.borderWidth1,
              MyStyle.paddingVertical7,
              MyStyle.paddingHorizontal10,
            ]}
          />

          <View
            style={[MyStyle.flexrow, MyStyle.alignItemCenter, MyStyle.marginTop13]}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/icons/CHECK.png')}
                style={{
                  width: responsiveHorizontal(27),
                  height: responsiveHorizontal(27),
                  marginRight: responsiveHorizontal(3),
                }}
              />
            </TouchableOpacity>
            <View style={{width: responsiveHorizontal(239)}}>
              <Text
                style={[
                  MyStyle.fontStyleItalic,
                  MyStyle.color000000,
                  MyStyle.fontWeight300,
                  MyStyle.fontSize13,
                ]}>
                I have read and agreed to terms and conditions of Hungry.
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={[
              {
                marginBottom: responsiveVertical(29),
                width: responsiveHorizontal(269),
              },
            ]}>
            <Text
              style={[
                MyStyle.color101FA2,
                MyStyle.fontSize12,
                MyStyle.fontWeight500,
                MyStyle.alignSelfFlexEnd,
              ]}>
              READ MORE
            </Text>
          </TouchableOpacity>

          <SumbitButton
            navigation={navigation}
            btnText="SEND OTP"
            nextScreen="Login"
          />
          <View
            style={[
              MyStyle.flexrow,
              MyStyle.justifyContentCenter,
              MyStyle.marginTop8,
            ]}>
            <Text
              style={[
                {
                  color: 'rgba(0, 0, 0, 0.44)',
                  marginRight: responsiveHorizontal(5),
                },
                MyStyle.fontSize15,
                MyStyle.fontWeight700,
              ]}>
              If you have a already account ?
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <Text
                style={[
                  {color: 'rgba(172, 23, 18, 1)'},
                  MyStyle.fontSize15,
                  MyStyle.fontWeight700,
                ]}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};
export default Signup;
