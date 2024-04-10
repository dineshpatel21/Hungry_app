import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Keyboard,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {responsiveVertical, responsiveHorizontal, MyStyle} from '../style';
import {Divider} from 'react-native-paper';

const PersonalDetails = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        return setKeyboardVisible(true);
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        return setKeyboardVisible(false);
      },
    );
  }, [isKeyboardVisible]);
  return (
    <View style={[MyStyle.flex1]}>
      <View
        style={[MyStyle.marginBottom15, MyStyle.marginTop8, MyStyle.height2]}
      />
      <View style={[MyStyle.marginHorizontal20]}>
        <Text
          style={[
            MyStyle.welcomebtntext,
            MyStyle.color000000,
            MyStyle.fontWeight700,
            MyStyle.fontSize20,
          ]}>
          Your Name*
        </Text>
      </View>
      <TextInput
        label="Mobile"
        mode="outlined"
        style={[
          MyStyle.backgroundColorFFFFFF,
          MyStyle.marginHorizontal20,
          MyStyle.marginTop8,
          MyStyle.borderRadius10,
          MyStyle.borderWidth1,
          MyStyle.paddingHorizontal14,
        ]}
        // value={text}
        // onChangeText={text => setText(text)}
      />

      <View style={[MyStyle.marginHorizontal20, MyStyle.marginTop8]}>
        <Text
          style={[
            MyStyle.welcomebtntext,
            MyStyle.color000000,
            MyStyle.fontWeight700,
            MyStyle.fontSize20,
          ]}>
          Date of Birth
        </Text>
      </View>

      <TextInput
        label="Mobile"
        mode="outlined"
        style={[
          MyStyle.backgroundColorFFFFFF,
          MyStyle.marginTop8,
          MyStyle.marginHorizontal20,
          MyStyle.borderRadius10,
          MyStyle.borderWidth1,
          MyStyle.paddingHorizontal14,
        ]}
        // value={text}
        // onChangeText={text => setText(text)}
      />

      <View
        style={[
          MyStyle.borderWidth1,
          MyStyle.alignSelfCenter,
          MyStyle.marginTop30,
          MyStyle.borderRadius10,
          MyStyle.borderColorA61A1,
          MyStyle.width321,
          MyStyle.height205,
        ]}>
        <View style={[MyStyle.marginHorizontal20, MyStyle.marginTop18]}>
          <TextInput
            placeholder="Shop Name*"
            textDecorationLine="Underline"
            style={[
              MyStyle.welcomebtntext,
              MyStyle.color000000,
              MyStyle.fontWeight400,
              MyStyle.fontSize15,
            ]}
          />
        </View>
        <Divider />
        <View style={[MyStyle.marginHorizontal20, MyStyle.marginTop8]}>
          <Text
            style={[
              MyStyle.welcomebtntext,
              MyStyle.color000000,
              MyStyle.fontWeight400,
              MyStyle.fontSize15,
            ]}>
            Upload shop images*
          </Text>
        </View>

        <TouchableOpacity
          style={[
            MyStyle.alignSelfCenter,
            MyStyle.marginTop18,
            MyStyle.justifyContentCenter,
            MyStyle.alignItemCenter,
            MyStyle.borderRadius10,
            MyStyle.backgroundColorD9D9D9,
            MyStyle.select_img,
          ]}>
          <Image
            source={require('../assets/icons/selectimage.png')}
            style={[MyStyle.icon30]}
          />
        </TouchableOpacity>
      </View>
      {!isKeyboardVisible && (
        <View
          style={[
            MyStyle.positionAbsolute,
            MyStyle.width100,
            MyStyle.justifyContentCenter,
            MyStyle.bottom34,
            MyStyle.flex01,
          ]}>
          <TouchableOpacity
            style={[
              MyStyle.welcomebtn,
              MyStyle.alignItemCenter,
              MyStyle.justifyContentCenter,
              MyStyle.alignSelfCenter,
              MyStyle.width155,
            ]}
            onPress={() => {}}>
            <Text
              style={[
                MyStyle.welcomebtntext,
                MyStyle.colorWhite,
                MyStyle.fontWeight400,
                MyStyle.fontSize24,
              ]}>
              Done
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default PersonalDetails;
