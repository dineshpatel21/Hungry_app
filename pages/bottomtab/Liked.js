import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import Style, {
  responsiveVertical,
  responsiveHorizontal,
  responsiveFonts,
  vw,
  vh,
} from '../../style';
const Liked = ({navigation}) => {
  const items = [
    {
      id: '1',
      name: 'Happy Sweets',
      loc: '(M.G Road)',
      ratting: '4.5',
      time: '30-35 min',
      src: require('../../assets/icons/sweets.png'),
    },
    {
      id: '2',
      name: 'Happy Sweets',
      loc: '(M.G Road)',
      ratting: '4.5',
      time: '30-35 min',
      src: require('../../assets/icons/sweets.png'),
    },
  ];
  return (
    <View style={[Style.flex1]}>
      <FlatList
        // horizontal
        showsHorizontalScrollIndicator={false}
        data={items}
        style={{
          marginTop: responsiveHorizontal(10),
          // bottom: responsiveVertical(55),
        }}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('FoodPlace');
            }}
            style={[
              Style.paddingVertical7,
              Style.marginBottom10,
              Style.backgroundColorFFFFFF,
            ]}>
            <View
              style={[
                Style.flexrow,

                Style.alignItemCenter,
                Style.marginTop17,
                Style.justifyContentSpaceBetween,
                Style.marginBottom15,
                Style.marginHorizontal20,
              ]}>
              <View
                style={[
                  Style.flexrow,
                  Style.alignItemCenter,
                  Style.borderRadius10,
                  Style.paddingHorizontal10,
                  Style.paddingVertical7,
                  {
                    backgroundColor: 'rgba(238, 152, 70, 0.3)',
                  },
                ]}>
                <Text
                  style={[
                    {
                      color: 'rgba(0, 0, 0, 0.52)',
                      marginRight: 2,
                    },
                    Style.fontSize17,
                    Style.fontWeight700,
                  ]}>
                  {item.loc}
                </Text>
                <Image
                  source={require('../../assets/icons/map.png')}
                  style={{
                    width: responsiveHorizontal(18),
                    height: responsiveHorizontal(18),
                    marginRight: responsiveHorizontal(3),
                  }}
                />
              </View>
              <TouchableOpacity>
                <Text
                  style={[
                    {
                      fontSize: responsiveFonts(12),
                      color: 'rgba(238, 152, 70, 1)',
                    },
                    Style.fontWeight700,
                  ]}>
                  See All
                </Text>
              </TouchableOpacity>
            </View>

            <Image
              source={item.src}
              style={{
                width: vw,
                height: responsiveHorizontal(182),
                alignSelf: 'center',
                // marginRight: responsiveHorizontal(3),
                resizeMode: 'contain',
              }}
            />

            <Image
              source={require('../../assets/icons/heart_liked.png')}
              style={[
                {
                  width: responsiveHorizontal(28),
                  height: responsiveHorizontal(28),
                  right: responsiveHorizontal(35),
                  top: responsiveVertical(80),
                  tintColor: 'red',
                },
                Style.positionAbsolute,
              ]}
            />
            <View
              style={[
                Style.flexrow,
                Style.alignItemCenter,
                Style.justifyContentSpaceBetween,
                Style.marginHorizontal20,
                Style.marginTop18,
              ]}>
              <View>
                <Text
                  style={[
                    Style.fontWeight700,
                    Style.fontSize17,
                    Style.color000000,
                  ]}>
                  {item.name}
                </Text>
              </View>
              {/* <View
                  style={[
                    Style.flexrow,
                    Style.alignItemCenter,
                    Style.marginRight18,
                    Style.borderRadius6,
                    Style.paddingHorizontal6,
                    Style.paddingVertical2,
                    {
                      backgroundColor: 'rgba(60, 139, 68, 1)',
                    },
                  ]}>
                  <Text
                    style={[
                      {
                        fontSize: responsiveFonts(12),
                        color: 'white',
                        marginRight: 3,
                      },
                      Style.fontWeight700,
                    ]}>
                    {item.ratting}
                  </Text>
                  <Image
                    source={require('../../assets/icons/star.png')}
                    style={{
                      width: responsiveHorizontal(7),
                      height: responsiveHorizontal(7),
                    }}
                  />
                </View> */}
            </View>
            <View
              style={[
                Style.flexrow,
                Style.alignItemCenter,
                Style.borderWidth,
                Style.marginHorizontal20,
                {marginTop: 9},
              ]}>
              <Image
                source={require('../../assets/icons/stopwatch.png')}
                style={{
                  width: responsiveHorizontal(17),
                  height: responsiveHorizontal(18),
                  marginRight: responsiveHorizontal(5),
                }}
              />
              <Text
                style={[
                  Style.fontWeight400,
                  Style.fontSize10,
                  Style.color000000,
                ]}>
                {item.time}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => {
          return <View style={{backgroundColor: '#D9D9D9', height: 5}}></View>;
        }}
      />
    </View>
  );
};
export default Liked;
