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
import {
  responsiveVertical,
  responsiveHorizontal,
  responsiveFonts,
  MyStyle,
  vw,
  vh,
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
          MyStyle.marginBottom10,
          MyStyle.alignItemCenter,
          MyStyle.marginTop13,
          MyStyle.marginHorizontal20,
          MyStyle.borderColor000022,
        ]}
        icon={({color, size}) => (
          <Image
            source={require('../../assets/icons/search.png')}
            style={[MyStyle.marginRight3, MyStyle.icon20]}
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
              MyStyle.fontWeight700,
              MyStyle.fontSize17,
              MyStyle.color000052,
            ]}>
            Search by Market
          </Text>
        </View>
      </View>

      <View>
        {items.map((item, index) => {
          return (
            <>
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
                      MyStyle.backcolor238152,
                    ]}>
                    <Text
                      style={[
                        MyStyle.fontSize17,
                        MyStyle.fontWeight700,
                        MyStyle.marginRight2,
                        MyStyle.color000052,
                      ]}>
                      {item.loc}
                    </Text>
                    <Image
                      source={require('../../assets/icons/map.png')}
                      style={[MyStyle.marginRight3, MyStyle.icon18]}
                    />
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

                <Image
                  source={item.src}
                  style={[
                    MyStyle.alignSelfCenter,
                    MyStyle.height182,
                    MyStyle.resizeModeContain,
                    MyStyle.width100,
                  ]}
                />

                <Image
                  source={require('../../assets/icons/heart.png')}
                  style={[
                    MyStyle.positionAbsolute,
                    MyStyle.icon35,
                    MyStyle.right30,
                    MyStyle.top80,
                    MyStyle.tintColorWhite,
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
                  
                </View>
                <View
                  style={[
                    MyStyle.flexrow,
                    MyStyle.alignItemCenter,
                    MyStyle.borderWidth,
                    MyStyle.marginHorizontal20,
                    MyStyle.marginTop9,
                  ]}>
                  <Image
                    source={require('../../assets/icons/stopwatch.png')}
                    style={[MyStyle.marginRight5, MyStyle.icon18]}
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
              {index != items.length - 1 && (
                <View
                  style={[
                    MyStyle.backgroundColorD9D9D9,
                    MyStyle.height5,
                  ]}></View>
              )}
            </>
          );
        })}
      </View>
    </ScrollView>
  );
};
export default Home;
