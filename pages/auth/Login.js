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
import Style, {responsiveVertical, responsiveHorizontal} from '../../style';
import SumbitButton from '../../components/SumbitButton';
const Login = ({navigation}) => {
  return (
    <View style={[Style.flex1]}>
      <LinearGradient
        style={[Style.flex1]}
        // colors={['rgba(255, 255, 255, 0)', 'rgba(234, 156, 81, 1)']}
        colors={[
          'rgba(255, 255, 255, 0)',
          'rgba(240, 184, 131, 0.52)',
          'rgba(238, 175, 115, 0.59)',
          'rgba(234, 156, 81, 0.73)',
        ]}>
        <ScrollView style={[Style.flex1, Style.paddingHorizontal20]}>
          <View
            style={{
              marginTop: responsiveVertical(74),
              width: responsiveHorizontal(284),
            }}>
            <Text
              style={[
                Style.fontSize28,
                Style.color000000,
                Style.colorD18741,
                Style.fontWeight700,
              ]}>
              LOGIN TO YOUR ACCOUNT
            </Text>
          </View>
          <View
            style={[
              {
                width: responsiveHorizontal(246),
                // height: responsiveVertical(84),
                // marginLeft: responsiveHorizontal(20),

                marginBottom: responsiveVertical(20),
              },
            ]}>
            <Text
              style={[
                Style.fontSize15,
                Style.fontWeight700,

                Style.lineHeight,
                {
                  color: 'rgba(0, 0, 0, 0.44)',
                  marginTop: responsiveVertical(5),
                },
              ]}>
              PLEASE SIGN IN TO YOUR ACCOUNT
            </Text>
          </View>
          <View style={[{marginBottom: responsiveVertical(12)}]}>
            <Text
              style={[
                Style.fontSize17,
                Style.fontWeight400,
                {color: 'rgba(0, 0, 0, 1)'},
              ]}>
              Enter Your Phone Number
            </Text>
          </View>

          <TextInput
            style={[
              Style.width100,
              Style.borderRadius10,
              Style.borderWidth1,
              Style.paddingVertical7,
              Style.paddingHorizontal10,
            ]}
          />

          <View
            style={[Style.flexrow, Style.alignItemCenter, Style.marginTop13]}>
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
                  Style.fontStyleItalic,
                  Style.color000000,
                  Style.fontWeight300,
                  Style.fontSize13,
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
                Style.color101FA2,
                Style.fontSize12,
                Style.fontWeight500,
                Style.alignSelfFlexEnd,
              ]}>
              READ MORE
            </Text>
          </TouchableOpacity>

          <SumbitButton
            navigation={navigation}
            btnText="SEND OTP"
            nextScreen="OtpVerification"
          />
           <View style={[Style.flexrow, Style.justifyContentCenter,Style.marginTop8]}>
            <Text
              style={[
                {
                  color: 'rgba(0, 0, 0, 0.44)',
                  marginRight: responsiveHorizontal(5),
                },
                Style.fontSize15,
                Style.fontWeight700,
              ]}>
             If you have not any account ?
            </Text>
            <TouchableOpacity onPress={()=>{navigation.navigate("Signup")}}>
              <Text
                style={[
                  {color: 'rgba(172, 23, 18, 1)'},
                  Style.fontSize15,
                  Style.fontWeight700,
                ]}>
                Signup
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};
export default Login;
