import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {
  responsiveVertical,
  responsiveHorizontal,
  MyStyle,
  responsiveFonts,
} from '../style';
const Categories = () => {
  const items = [
    {
      id: '1',
      name: 'Biryani',
      src: require('../assets/icons/biryani.png'),
    },
    {
      id: '2',
      name: 'rating 4.0+',
      src: require('../assets/icons/biryani.png'),
    },
    {
      id: '3',
      name: 'offers',
      src: require('../assets/icons/egg.png'),
    },
    {
      id: '4',
      name: 'cuisines',
      src: require('../assets/icons/biryani.png'),
    },
    {
      id: '5',
      name: 'MAX Safety',
      src: require('../assets/icons/egg.png'),
    },
    {
      id: '6',
      name: 'Pro',
      src: require('../assets/icons/biryani.png'),
    },
  ];
  return (
    <View>
      <View
        style={[
          MyStyle.flexrow,
          MyStyle.alignItemCenter,
          MyStyle.marginHorizontal20,
          MyStyle.justifyContentSpaceBetween,
          MyStyle.marginTop18,
        ]}>
        <View>
          <Text
            style={[
              MyStyle.fontWeight700,
              MyStyle.fontSize17,
              MyStyle.color000052,
            ]}>
            Category
          </Text>
        </View>
        <TouchableOpacity>
          <Text
            style={[
              MyStyle.fontWeight700,
              MyStyle.fontSize12,
              MyStyle.color238152,
            ]}>
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={items}
        style={[MyStyle.marginTop10]}
        renderItem={({item}) => (
          <TouchableOpacity style={[MyStyle.marginTop5]}>
            <View
              style={[
               
                MyStyle.alignItemCenter,
                MyStyle.padding5,
                MyStyle.marginVertical5,
                MyStyle.marginHorizontal10,MyStyle.borderRadius4
              ]}>
              <Image
                source={item.src}
                style={[MyStyle.marginRight3, MyStyle.icon58]}
              />
              <Text
                style={[
                  MyStyle.fontSize13,
                  MyStyle.fontWeight400,
                  MyStyle.paddingVertical7,
                ]}>
                {item.name}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Categories;
