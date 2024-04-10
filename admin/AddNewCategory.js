import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import React from 'react';
import MenuManagement from '../components/MenuManagement';

import {
  responsiveVertical,
  responsiveHorizontal,
  responsiveFonts,
  MyStyle,
} from '../style';
import SwitchComponent from '../components/Switch';

const AddNewCategory = () => {
  return (
    <View style={[MyStyle.flex1]}>
      <View
        style={[
          MyStyle.marginHorizontal20,
          MyStyle.marginTop13,
          MyStyle.flexrow,
          MyStyle.justifyContentSpaceBetween,
        ]}>
        <MenuManagement />
        <SwitchComponent />
      </View>
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
          + Add new category
        </Text>
      </View>

      <View
        style={[
         MyStyle.cat_name,
          MyStyle.borderWidth1,
          MyStyle.alignSelfCenter,
          MyStyle.marginTop30,
          MyStyle.borderRadius10,
          MyStyle.borderColorA61A1,
        ]}>
        <View style={[MyStyle.marginHorizontal20, MyStyle.marginTop18]}>
          <TextInput
            placeholder="Category name *"
            textDecorationLine="Underline"
            style={[
              MyStyle.welcomebtntext,
              MyStyle.color000000,
              MyStyle.fontWeight400,
              MyStyle.fontSize15,
            ]}
          />
        </View>
        <View style={[MyStyle.marginHorizontal20]}>
          <Text
            style={[
              MyStyle.welcomebtntext,
              MyStyle.color000000,
              MyStyle.fontWeight400,
              MyStyle.fontSize15,
            ]}>
            Upload category image*
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
            MyStyle.select_img
          ]}>
          <Image
            source={require('../assets/icons/selectimage.png')}
            style={[MyStyle.icon30]}
          />
        </TouchableOpacity>
      </View>
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
            MyStyle.alignSelfCenter,MyStyle.width155
          ]}
          onPress={() => {}}>
          <Text
            style={[
              MyStyle.welcomebtntext,
              MyStyle.colorWhite,
              MyStyle.fontWeight400,
              MyStyle.fontSize30,
            ]}>
            Add
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddNewCategory;
