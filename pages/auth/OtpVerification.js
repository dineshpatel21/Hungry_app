import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {
  responsiveVertical,
  responsiveHorizontal,
  MyStyle,
  Colors,
} from '../../style';
import SumbitButton from '../../components/SumbitButton';

const OtpVerification = ({navigation}) => {
  const [otp1, setOtp1] = useState('');
  const [otp2, setOtp2] = useState('');
  const [otp3, setOtp3] = useState('');
  const [otp4, setOtp4] = useState('');
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const [otp1Validation, setOtp1Validation] = useState(false);
  const [otp2Validation, setOtp2Validation] = useState(false);
  const [otp3Validation, setOtp3Validation] = useState(false);
  const [otp4Validation, setOtp4Validation] = useState(false);
  const errorColor = {color: `#E74747`};
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
          <View style={[MyStyle.width120, MyStyle.marginTop74]}>
            <Text
              style={[
                MyStyle.fontSize28,
                MyStyle.color000000,
                MyStyle.colorD18741,
                MyStyle.fontWeight700,
              ]}>
              OTP
            </Text>
          </View>
          <View style={[MyStyle.width260]}>
            <Text
              style={[
                MyStyle.fontSize28,
                MyStyle.color000000,
                MyStyle.colorD18741,
                MyStyle.fontWeight700,
              ]}>
              VERIFICATION
            </Text>
          </View>
          <View style={[MyStyle.marginBottom20]}>
            <Text
              style={[
                MyStyle.fontSize15,
                MyStyle.fontWeight700,
                MyStyle.color000044,
                MyStyle.lineHeight,
                MyStyle.marginTop5,
              ]}>
              ENTER THE VERIFICATION CODE WE SEND YOU
            </Text>
          </View>
          <View style={[MyStyle.marginBottom12]}>
            <Text
              style={[
                MyStyle.fontSize17,
                MyStyle.fontWeight400,
                MyStyle.color00001,
              ]}>
              Enter Your Phone Number
            </Text>
          </View>

          <View
            style={[
              MyStyle.flexrow,
              MyStyle.justifyContentCenter,
              MyStyle.marginBottom8,
            ]}>
            {/* otp box 1 */}

            <View
              style={[
                MyStyle.otp,
                MyStyle.borderRadius10,
                MyStyle.alignItemCenter,
                MyStyle.justifyContentCenter,
                MyStyle.marginRight9,
                {borderColor: otp1.length >= 1 ? Colors.color4d4dff : '#000000'},
                otp1Validation && {
                  borderColor: errorColor.color,
                  borderWidth: 1,
                },
              ]}>
              <TextInput
                ref={ref1}
                value={otp1}
                keyboardType="number-pad"
                maxLength={1}
                onChangeText={text => {
                  if (text.length >= 1) {
                    ref2.current.focus();
                  }
                  setOtp1(text);
                  setOtp1Validation(false);
                }}
              />
            </View>

            {/* otp box 2 */}

            <View
              style={[
                MyStyle.otp,
                MyStyle.borderRadius10,
                MyStyle.alignItemCenter,
                MyStyle.justifyContentCenter,
                MyStyle.marginRight9,
                {
                  borderColor:
                    otp2.length >= 1 ? Colors.color4d4dff : '#000000',
                },
                otp2Validation && {
                  borderColor: errorColor.color,
                  borderWidth: 1,
                },
              ]}>
              <TextInput
                ref={ref2}
                value={otp2}
                keyboardType="number-pad"
                maxLength={1}
                onChangeText={text => {
                  if (text.length >= 1) {
                    ref3.current.focus();
                  } else if (text.length < 1) {
                    ref1.current.focus();
                  }
                  setOtp2(text);
                  setOtp2Validation(false);
                }}
              />
            </View>

            {/* otp box 3 */}

            <View
              style={[
                MyStyle.otp,
                MyStyle.borderRadius10,
                MyStyle.alignItemCenter,
                MyStyle.justifyContentCenter,
                MyStyle.marginRight9,
                {borderColor: otp3.length >= 1 ? Colors.color4d4dff : '#000000'},
                otp3Validation && {
                  borderColor: errorColor.color,
                  borderWidth: 1,
                },
              ]}>
              <TextInput
                ref={ref3}
                value={otp3}
                keyboardType="number-pad"
                maxLength={1}
                onChangeText={text => {
                  if (text.length >= 1) {
                    ref4.current.focus();
                  } else if (text.length < 1) {
                    ref2.current.focus();
                  }
                  setOtp3(text);
                  setOtp3Validation(false);
                }}
              />
            </View>

            {/* otp box 4 */}

            <View
              style={[
                MyStyle.otp,
                MyStyle.borderRadius10,
                MyStyle.alignItemCenter,
                MyStyle.justifyContentCenter,
                MyStyle.marginRight9,
                {borderColor: otp4.length >= 1 ? Colors.color4d4dff : '#000000'},
                otp4Validation && {
                  borderColor: errorColor.color,
                  borderWidth: 1,
                },
              ]}>
              <TextInput
                ref={ref4}
                value={otp4}
                keyboardType="number-pad"
                maxLength={1}
                onChangeText={text => {
                  if (text.length < 1) {
                    ref3.current.focus();
                  }
                  setOtp4(text);
                  setOtp4Validation(false);
                }}
              />
            </View>
          </View>

          <View style={[MyStyle.flexrow, MyStyle.justifyContentCenter]}>
            <Text
              style={[
                MyStyle.fontSize15,
                MyStyle.fontWeight700,
                MyStyle.marginRight5,
                MyStyle.color000044,
              ]}>
              Didn’t receive code?
            </Text>
            <TouchableOpacity>
              <Text
                style={[
                  MyStyle.fontSize15,
                  MyStyle.fontWeight700,
                  MyStyle.color17223,
                ]}>
                Resend
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={[
              MyStyle.flexrow,
              MyStyle.justifyContentCenter,
              MyStyle.alignItemCenter,
              MyStyle.marginTop16,
              MyStyle.marginBottom26,
            ]}>
            <Image
              source={require('../../assets/icons/clock.png')}
              style={[MyStyle.icon14, MyStyle.marginRight7]}
            />
            <View>
              <Text
                style={[
                  MyStyle.fontSize15,
                  MyStyle.fontWeight400,
                  MyStyle.color138132,
                ]}>
                09:00
              </Text>
            </View>
          </View>

          <SumbitButton
            navigation={navigation}
            btnText="CONTINUE"
            nextScreen="MyTabs"
          />
        </ScrollView>
      </LinearGradient>
    </View>
  );
};
export default OtpVerification;
