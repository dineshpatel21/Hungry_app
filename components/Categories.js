import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import Style, {
  responsiveVertical,
  responsiveHorizontal,
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
          Style.flexrow,
          Style.alignItemCenter,
          Style.marginHorizontal20,
          Style.justifyContentSpaceBetween,Style.marginTop18,
         
        ]}>
        <View>
          <Text
            style={[
              {fontSize: responsiveFonts(17), color: 'rgba(0, 0, 0, 0.52)'},
              Style.fontWeight700,
            ]}>
            Category
          </Text>
        </View>
        <TouchableOpacity >
          <Text
            style={[
              {fontSize: responsiveFonts(12), color: 'rgba(238, 152, 70, 1)'},
              Style.fontWeight700,
            ]}>
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={items}
        style={{marginTop: 10}}
        renderItem={({item}) => (
          <TouchableOpacity style={{marginTop: 5}}>
            <View
              style={{
                marginHorizontal: 10,
                marginVertical: 5,
                padding: 5,
                borderRadius: 4,
                alignItems: 'center',
              }}>
              <Image
                source={item.src}
                style={{
                  width: responsiveHorizontal(60),
                  height: responsiveHorizontal(60),
                  marginRight: responsiveHorizontal(3),
                }}
              />
              <Text
                style={{paddingHorizontal: 5, fontWeight: '400', fontSize: 13}}>
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
