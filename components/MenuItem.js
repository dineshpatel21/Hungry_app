import React, {useState} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import Style, {
  responsiveVertical,
  responsiveHorizontal,
  responsiveFonts,
} from '../style';
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
        return <View style={{backgroundColor: '#D9D9D9', height: 4}}></View>;
      }}
      renderItem={({item, index}) => {
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ItemDetail');
            }}
            style={[
              Style.flexrow,
              Style.alignItemCenter,
              Style.positionRelative,
              Style.backgroundColorFFFFFF,
              {paddingVertical: responsiveVertical(25)},
            ]}>
            <Image
              source={
                item.isSelected
                  ? require('../assets/icons/green.png')
                  : require('../assets/icons/ungreen.png')
              }
              style={[
                {
                  width: responsiveHorizontal(20),
                  height: responsiveVertical(20),
                  top: 25,
                  right: 10,
                },
                Style.positionAbsolute,
              ]}
            />
            <View
              style={{
                marginLeft: 18,
                width: responsiveHorizontal(122),
               // height: responsiveVertical(121),
                borderWidth: 1,
                borderRadius: 15,
                borderColor: '#A6A1A1',
                marginRight: 20,
              }}>
              <Image
                source={require('../assets/icons/food.png')}
                style={{
                  width: responsiveHorizontal(122),
                  height: responsiveVertical(121),
                }}
              />
              <TouchableOpacity
                style={[
                  Style.borderWidth1,
                  Style.alignItemCenter,
                  Style.positionAbsolute,
                  Style.justifyContentCenter,
                  Style.alignSelfCenter,
                  Style.backgroundColorEE9846,
                  {
                    width: responsiveHorizontal(58),
                    height: responsiveVertical(27),
                    borderRadius: 7,
                    bottom: -10,
                    borderColor: '#A6A1A1',
                  },
                ]}>
                <Text
                  style={[
                    Style.fontSize12,
                    Style.fontWeight700,
                    Style.colorWhite,
                  ]}>
                  Add
                </Text>
                <Image
                  source={require('../assets/icons/+.png')}
                  style={[
                    {
                      width: responsiveHorizontal(9),
                      height: responsiveVertical(8),
                      top: 4,
                      right: 4,
                    },
                    Style.positionAbsolute,
                  ]}
                />
              </TouchableOpacity>
            </View>

            <View>
              <Text
                style={[
                  Style.fontSize15,
                  Style.fontWeight700,
                  Style.color000000,
                ]}>
                Name
              </Text>
              {/* <View style={[Style.flexrow]}>
                <Image
                  source={require('../assets/icons/stars.png')}
                  style={{
                    width: responsiveHorizontal(93),
                    height: responsiveVertical(21),
                    marginLeft: -12,
                  }}
                />
                <Text
                  style={[
                    Style.fontSize15,
                    Style.fontWeight400,
                    Style.color000000,
                  ]}>
                  5 rating
                </Text>
              </View> */}
              <Text
                style={[
                  Style.fontSize15,
                  Style.fontWeight400,
                  Style.colorEE9846,
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
