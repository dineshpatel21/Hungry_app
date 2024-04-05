import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Carousel from '../components/Carousel';
import Header from '../components/Header';
import {Searchbar} from 'react-native-paper';
import Categories from '../components/Categories';
import  {
  responsiveVertical,
  responsiveHorizontal,
  MyStyle,
} from '../style';
import {Divider} from 'react-native-paper';
const OrderHistory = () => {
  return (
    <View>
      <Searchbar
        placeholder="Search your orders"
        style={[
          {
            borderColor: 'rgba(0, 0, 0, 0.22)',
          },
          MyStyle.marginBottom10,
          MyStyle.alignItemCenter,
          MyStyle.marginTop18,
          MyStyle.marginHorizontal20,
          MyStyle.marginBottom26
        ]}
        icon={({color, size}) => (
          <Image
            source={require('../assets/icons/search.png')}
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

      <View
        style={[
          {width: responsiveHorizontal(325)},
          MyStyle.borderWidth1,
          MyStyle.alignSelfCenter,
          MyStyle.paddingVertical10,
          MyStyle.borderRadius10,
          //MyStyle.padding8,
        ]}>
        <View
          style={[
            MyStyle.flexrow,
            MyStyle.justifyContentSpaceBetween,
            MyStyle.marginBottom8,
          ]}>
          <View
            style={[MyStyle.flexrow, MyStyle.marginLeft24, MyStyle.alignItemCenter]}>
            <View>
              <Image
                style={[
                  {width: 54, height: 54},
                  MyStyle.marginRight18,
                  MyStyle.borderRadius10,
                ]}
                source={require('../assets/icons/sweets.png')}
              />
            </View>
            <View>
              <Text style={[MyStyle.fontSize15, MyStyle.fontWeight700]}>
                Stall Name
              </Text>
              <Text style={[MyStyle.fontSize10, MyStyle.fontWeight400]}>
                Address
              </Text>
            </View>
          </View>
          <View
            style={[
              {
                width: responsiveHorizontal(50),
                height: responsiveVertical(16),
                backgroundColor: 'rgba(217, 217, 217, 0.64)',
              },
              MyStyle.marginRight24,
              MyStyle.alignItemCenter,
            ]}>
            <Text style={[MyStyle.fontSize10, MyStyle.fontWeight400]}>
              Delivered
            </Text>
          </View>
        </View>
        <Divider style={[MyStyle.borderWidth1, MyStyle.marginVertical9]} />

        <View
          style={[
            MyStyle.flexrow,
            MyStyle.alignItemCenter,
            MyStyle.marginBottom8,
            MyStyle.marginLeft18,
          ]}>
          <TouchableOpacity
            style={[
              {
                width: responsiveHorizontal(20),
                height: responsiveVertical(20),
              },
              MyStyle.marginRight18,
            ]}>
            <Image
              source={require('../assets/icons/green.png')}
              style={[
                {
                  width: responsiveHorizontal(20),
                  height: responsiveVertical(20),
                },
              ]}
            />
          </TouchableOpacity>
          <Text
            style={[
              MyStyle.fontSize15,
              MyStyle.fontWeight700,
              MyStyle.color000000,
              MyStyle.marginRight9,
            ]}>
            <Text style={[{color: 'rgba(255, 0, 0, 1)'}]}>Quantity</Text> X Dish
          </Text>
        </View>

        <View
          style={[MyStyle.flexrow, MyStyle.alignItemCenter, MyStyle.marginLeft18]}>
          <TouchableOpacity
            style={[
              {
                width: responsiveHorizontal(20),
                height: responsiveVertical(20),
              },
              MyStyle.marginRight18,
            ]}>
            <Image
              source={require('../assets/icons/green.png')}
              style={[
                {
                  width: responsiveHorizontal(20),
                  height: responsiveVertical(20),
                },
              ]}
            />
          </TouchableOpacity>
          <Text
            style={[
              MyStyle.fontSize15,
              MyStyle.fontWeight700,
              MyStyle.color000000,
              MyStyle.marginRight9,
            ]}>
            <Text style={[{color: 'rgba(255, 0, 0, 1)'}]}>Quantity</Text> X Dish
          </Text>
        </View>

        <Divider
          style={{borderWidth: 1}}
          style={[
            {
              borderStyle: 'dotted',
              marginVertical: responsiveVertical(9),
              marginHorizontal: responsiveHorizontal(14),
            },
            MyStyle.borderWidth1,
          ]}
        />
        <View
          style={[
            MyStyle.flexrow,
            MyStyle.justifyContentSpaceBetween,
            MyStyle.paddingHorizontal20,
          ]}>
          <Text>DATE</Text>
          <Text>Total Bill</Text>
        </View>
      </View>
    </View>
  );
};

export default OrderHistory;
