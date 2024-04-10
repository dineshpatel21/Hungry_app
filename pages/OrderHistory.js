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
import {responsiveVertical, responsiveHorizontal, MyStyle} from '../style';
import {Divider} from 'react-native-paper';
const OrderHistory = () => {
  return (
    <View>
      <Searchbar
        placeholder="Search your orders"
        style={[
          MyStyle.marginBottom10,
          MyStyle.alignItemCenter,
          MyStyle.marginTop18,
          MyStyle.marginHorizontal20,
          MyStyle.marginBottom26,
          MyStyle.borderColor000022,
        ]}
        icon={({color, size}) => (
          <Image
            source={require('../assets/icons/search.png')}
            style={(MyStyle.icon20, MyStyle.marginRight5)}
          />
        )}
        // onChangeText={}
        // value={}
      />

      <View
        style={[
          MyStyle.width325,
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
            style={[
              MyStyle.flexrow,
              MyStyle.marginLeft24,
              MyStyle.alignItemCenter,
            ]}>
            <View>
              <Image
                style={[
                  MyStyle.icon54,
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
              MyStyle.marginRight24,
              MyStyle.alignItemCenter,
              MyStyle.backgroundColor217217,
              MyStyle.width50,
              MyStyle,
              height16,
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
          <TouchableOpacity style={[MyStyle.marginRight18, MyStyle.icon20]}>
            <Image
              source={require('../assets/icons/green.png')}
              style={[MyStyle.icon20]}
            />
          </TouchableOpacity>
          <Text
            style={[
              MyStyle.fontSize15,
              MyStyle.fontWeight700,
              MyStyle.color000000,
              MyStyle.marginRight9,
            ]}>
            <Text style={[MyStyle.color255]}>Quantity</Text> X Dish
          </Text>
        </View>

        <View
          style={[
            MyStyle.flexrow,
            MyStyle.alignItemCenter,
            MyStyle.marginLeft18,
          ]}>
          <TouchableOpacity style={[MyStyle.icon20, MyStyle.marginRight18]}>
            <Image
              source={require('../assets/icons/green.png')}
              style={[MyStyle.icon20]}
            />
          </TouchableOpacity>
          <Text
            style={[
              MyStyle.fontSize15,
              MyStyle.fontWeight700,
              MyStyle.color000000,
              MyStyle.marginRight9,
            ]}>
            <Text style={[MyStyle.color255]}>Quantity</Text> X Dish
          </Text>
        </View>

        <Divider
          style={[
            MyStyle.borderWidth1,
            MyStyle.borderStyleDotted,
            MyStyle.marginVertical9,
            MyStyle.marginHorizontal14,
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
