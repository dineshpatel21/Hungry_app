import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Carousel from '../../components/Carousel';
import Header from '../../components/Header';
import {Searchbar} from 'react-native-paper';
import Categories from '../../components/Categories';
import  {
  responsiveVertical,
  responsiveHorizontal,
  responsiveFonts,
  MyStyle,vw,vh
} from '../../style';
const Home = ({navigation}) => {
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
    <ScrollView style={[MyStyle.flex1, MyStyle.backgroundColorFFFFFF]}>
        <View style={[MyStyle.marginHorizontal20]}>
          <Header />
        </View>

        <Searchbar
          placeholder="Search the “Feast”"
          style={[
            {
              borderColor: 'rgba(0, 0, 0, 0.22)',
            },
            MyStyle.marginBottom10,
            MyStyle.alignItemCenter,
            MyStyle.marginTop13,
            MyStyle.marginHorizontal20,
          ]}
          icon={({color, size}) => (
            <Image
              source={require('../../assets/icons/search.png')}
              style={{
                width: responsiveHorizontal(20),
                height: responsiveHorizontal(20),
                marginRight: responsiveHorizontal(3),
              }}
            />
          )}
          // onChangeText={}
          // value={}
        />

        <Carousel />

        <Categories />

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
                {color: 'rgba(0, 0, 0, 0.52)'},
                MyStyle.fontWeight700,
                MyStyle.fontSize17,
              ]}>
              Search by Market
            </Text>
          </View>
        </View>

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
                MyStyle.paddingVertical7,
                MyStyle.marginBottom10,
                MyStyle.backgroundColorFFFFFF,
              ]}>
              <View
                style={[
                  MyStyle.flexrow,

                  MyStyle.alignItemCenter,
                  MyStyle.marginTop17,
                  MyStyle.justifyContentSpaceBetween,
                  MyStyle.marginBottom15,
                  MyStyle.marginHorizontal20,
                ]}>
                <View
                  style={[
                    MyStyle.flexrow,
                    MyStyle.alignItemCenter,
                    MyStyle.borderRadius10,
                    MyStyle.paddingHorizontal10,
                    MyStyle.paddingVertical7,
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
                      MyStyle.fontSize17,
                      MyStyle.fontWeight700,
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
                      MyStyle.fontWeight700,
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
                source={require('../../assets/icons/heart.png')}
                style={[
                  {
                    width: responsiveHorizontal(35),
                    height: responsiveHorizontal(35),
                    right: responsiveHorizontal(30),
                    top: responsiveVertical(80),
                    tintColor:'white'
                  },
                  MyStyle.positionAbsolute,
                ]}
              />
              <View
                style={[
                  MyStyle.flexrow,
                  MyStyle.alignItemCenter,
                  MyStyle.justifyContentSpaceBetween,
                  MyStyle.marginHorizontal20,
                  MyStyle.marginTop18,
                ]}>
                <View>
                  <Text
                    style={[
                      MyStyle.fontWeight700,
                      MyStyle.fontSize17,
                      MyStyle.color000000,
                    ]}>
                    {item.name}
                  </Text>
                </View>
                {/* <View
                  style={[
                    MyStyle.flexrow,
                    MyStyle.alignItemCenter,
                    MyStyle.marginRight18,
                    MyStyle.borderRadius6,
                    MyStyle.paddingHorizontal6,
                    MyStyle.paddingVertical2,
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
                      MyStyle.fontWeight700,
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
                  MyStyle.flexrow,
                  MyStyle.alignItemCenter,
                  MyStyle.borderWidth,
                  MyStyle.marginHorizontal20,
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
                    MyStyle.fontWeight400,
                    MyStyle.fontSize10,
                    MyStyle.color000000,
                  ]}>
                  {item.time}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={() => {
            return (
              <View style={{backgroundColor: '#D9D9D9', height: 5}}></View>
            );
          }}
        />
      </ScrollView>
  );
};
export default Home;
