import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Keyboard,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import MenuManagement from '../components/MenuManagement';
import MyStyle from '../style';
import Colors from '../style';
import Style, {
  responsiveVertical,
  responsiveHorizontal,
  responsiveFonts,
} from '../style';
import {Divider} from 'react-native-paper'

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
      <MenuManagement />
      <View
        style={[
          MyStyle.marginBottom15,
          MyStyle.marginTop8,
          //   Colors.backgroundColorD9D9D9,
          MyStyle.height2,
        ]}
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
          {width: responsiveHorizontal(321), height: responsiveVertical(205)},
          MyStyle.borderWidth1,
          MyStyle.alignSelfCenter,
          MyStyle.marginTop30,
          MyStyle.borderRadius10,
          MyStyle.borderColorA61A1,
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
        <Divider/>
        <View style={[MyStyle.marginHorizontal20,MyStyle.marginTop8]}>
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
            {
              width: responsiveHorizontal(81),
              height: responsiveVertical(71),
              backgroundColor: '#d9d9d9',
            },
          ]}>
          <Image
            source={require('../assets/icons/selectimage.png')}
            style={[
              {
                width: responsiveHorizontal(31),
                height: responsiveVertical(31),
              },
            ]}
          />
        </TouchableOpacity>
      </View>
      {!isKeyboardVisible && (
        <View
          style={[
            MyStyle.positionAbsolute,
            MyStyle.width100,
            MyStyle.justifyContentCenter,
            {bottom: responsiveVertical(34), flex: 0.1},
          ]}>
          <TouchableOpacity
            style={[
              MyStyle.welcomebtn,
              MyStyle.alignItemCenter,
              MyStyle.justifyContentCenter,
              MyStyle.alignSelfCenter,
              {width: responsiveHorizontal(155)},
            ]}
            onPress={() => {}}>
            <Text
              style={[
                MyStyle.welcomebtntext,
                MyStyle.colorWhite,
                MyStyle.fontWeight400,
                MyStyle.fontSize30,
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
