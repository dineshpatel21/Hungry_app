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
import Style, {responsiveVertical, responsiveHorizontal} from '../../style';
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
    <View style={{flex: 1}}>
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
              width: responsiveHorizontal(120),
              // height: responsiveVertical(40),
            }}>
            <Text
              style={[
                Style.fontSize28,
                Style.color000000,
                Style.colorD18741,
                Style.fontWeight700,
              ]}>
              OTP
            </Text>
          </View>
          <View
            style={{
              //   marginTop: responsiveVertical(74),
              width: responsiveHorizontal(260),
              // height: responsiveVertical(40),
            }}>
            <Text
              style={[
                Style.fontSize28,
                Style.color000000,
                Style.colorD18741,
                Style.fontWeight700,
              ]}>
              VERIFICATION
            </Text>
          </View>
          <View
            style={[
              {
                // width: responsiveHorizontal(266),
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
              ENTER THE VERIFICATION CODE WE SEND YOU
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

          <View
            style={[
              Style.flexrow,
              Style.justifyContentCenter,
              Style.marginBottom8,
            ]}>
            {/* otp box 1 */}

            <View
              style={[
                Style.otp,
                Style.borderRadius10,
                Style.alignItemCenter,
                Style.justifyContentCenter,
                Style.marginRight9,
                {borderColor: otp1.length >= 1 ? '#4D4DFF' : '#000000'},
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
                Style.otp,
                Style.borderRadius10,
                Style.alignItemCenter,
                Style.justifyContentCenter,
                Style.marginRight9,
                {borderColor: otp2.length >= 1 ? '#4D4DFF' : '#000000'},
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
                Style.otp,
                Style.borderRadius10,
                Style.alignItemCenter,
                Style.justifyContentCenter,
                Style.marginRight9,
                {borderColor: otp3.length >= 1 ? '#4D4DFF' : '#000000'},
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
                Style.otp,
                Style.borderRadius10,
                Style.alignItemCenter,
                Style.justifyContentCenter,
                Style.marginRight9,
                {borderColor: otp4.length >= 1 ? '#4D4DFF' : '#000000'},
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

          <View style={[Style.flexrow, Style.justifyContentCenter]}>
            <Text
              style={[
                {
                  color: 'rgba(0, 0, 0, 0.44)',
                  marginRight: responsiveHorizontal(5),
                },
                Style.fontSize15,
                Style.fontWeight700,
              ]}>
              Didn’t receive code?
            </Text>
            <TouchableOpacity>
              <Text
                style={[
                  {color: 'rgba(172, 23, 18, 1)'},
                  Style.fontSize15,
                  Style.fontWeight700,
                ]}>
                Resend
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={[
              Style.flexrow,
              Style.justifyContentCenter,
              Style.alignItemCenter,
              Style.marginTop16,
              Style.marginBottom26,
            ]}>
            <Image
              source={require('../../assets/icons/clock.png')}
              style={[
                {
                  width: 14,
                  height: 14,
                  marginRight: responsiveHorizontal(7),
                },
              ]}
            />
            <View>
              <Text
                style={[
                  Style.fontSize15,
                  Style.fontWeight400,
                  {color: 'rgba(138, 132, 126, 1)'},
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
