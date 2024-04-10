import React, {useState} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {responsiveVertical, responsiveHorizontal, MyStyle} from '../style';
const MenuItem = ({navigation}) => {
  const [DATA, SETDATA] = useState([
    {isSelected: false},
    {isSelected: false},
    {isSelected: false},
  ]);
  return (
    <FlatList
      data={DATA}
      keyExtractor={(item, index) => index.toString()}
      ItemSeparatorComponent={() => {
        return (
          <View style={[MyStyle.backgroundColorD9D9D9, MyStyle.height5]}></View>
        );
      }}
      renderItem={({item, index}) => {
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ItemDetail');
            }}
            style={[
              MyStyle.flexrow,
              MyStyle.alignItemCenter,
              MyStyle.positionRelative,
              MyStyle.backgroundColorFFFFFF,
              MyStyle.paddingVertical25,
            ]}>
            <Image
              source={
                item.isSelected
                  ? require('../assets/icons/green.png')
                  : require('../assets/icons/ungreen.png')
              }
              style={[
                MyStyle.positionAbsolute,
                MyStyle.icon20,
                MyStyle.right10,
                MyStyle.top25,
              ]}
            />
            <View
              style={[
                MyStyle.marginRight20,
                MyTabs.borderWidth1,
                MyStyle.marginLeft18,
                MyStyle.borderColorA6A1A1,
                MyStyle.borderRadius15,
                MyStyle.width121,
              ]}>
              <Image
                source={require('../assets/icons/food.png')}
                style={[MyStyle.icon121]}
              />
              <TouchableOpacity
                style={[
                  MyStyle.borderWidth1,
                  MyStyle.alignItemCenter,
                  MyStyle.positionAbsolute,
                  MyStyle.justifyContentCenter,
                  MyStyle.alignSelfCenter,
                  MyStyle.backgroundColorEE9846,
                  MyStyle.width58,
                  MyStyle.height27,
                  MyStyle.borderRadius7,
                  MyStyle.borderColorA6A1A1,
                  MyStyle.bottomM10,
                ]}>
                <Text
                  style={[
                    MyStyle.fontSize12,
                    MyStyle.fontWeight700,
                    MyStyle.colorWhite,
                  ]}>
                  Add
                </Text>
                <Image
                  source={require('../assets/icons/+.png')}
                  style={[
                    MyStyle.positionAbsolute,
                    MyStyle.icon8,
                    MyStyle.top4,
                    MyStyle.right4,
                  ]}
                />
              </TouchableOpacity>
            </View>

            <View>
              <Text
                style={[
                  MyStyle.fontSize15,
                  MyStyle.fontWeight700,
                  MyStyle.color000000,
                ]}>
                Name
              </Text>

              <Text
                style={[
                  MyStyle.fontSize15,
                  MyStyle.fontWeight400,
                  MyStyle.colorEE9846,
                ]}>
                Rs 150
              </Text>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};
export default MenuItem;
