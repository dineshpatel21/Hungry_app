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
import Style, {
  responsiveVertical,
  responsiveHorizontal,
  responsiveFonts,
  vw,
  vh,
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
          Style.marginBottom10,
          Style.alignItemCenter,
          Style.marginTop18,
          Style.marginHorizontal20,
          Style.marginBottom26
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
          Style.borderWidth1,
          Style.alignSelfCenter,
          Style.paddingVertical10,
          Style.borderRadius10,
          //Style.padding8,
        ]}>
        <View
          style={[
            Style.flexrow,
            Style.justifyContentSpaceBetween,
            Style.marginBottom8,
          ]}>
          <View
            style={[Style.flexrow, Style.marginLeft24, Style.alignItemCenter]}>
            <View>
              <Image
                style={[
                  {width: 54, height: 54},
                  Style.marginRight18,
                  Style.borderRadius10,
                ]}
                source={require('../assets/icons/sweets.png')}
              />
            </View>
            <View>
              <Text style={[Style.fontSize15, Style.fontWeight700]}>
                Stall Name
              </Text>
              <Text style={[Style.fontSize10, Style.fontWeight400]}>
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
              Style.marginRight24,
              Style.alignItemCenter,
            ]}>
            <Text style={[Style.fontSize10, Style.fontWeight400]}>
              Delivered
            </Text>
          </View>
        </View>
        <Divider style={[Style.borderWidth1, Style.marginVertical9]} />

        <View
          style={[
            Style.flexrow,
            Style.alignItemCenter,
            Style.marginBottom8,
            Style.marginLeft18,
          ]}>
          <TouchableOpacity
            style={[
              {
                width: responsiveHorizontal(20),
                height: responsiveVertical(20),
              },
              Style.marginRight18,
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
              Style.fontSize15,
              Style.fontWeight700,
              Style.color000000,
              Style.marginRight9,
            ]}>
            <Text style={[{color: 'rgba(255, 0, 0, 1)'}]}>Quantity</Text> X Dish
          </Text>
        </View>

        <View
          style={[Style.flexrow, Style.alignItemCenter, Style.marginLeft18]}>
          <TouchableOpacity
            style={[
              {
                width: responsiveHorizontal(20),
                height: responsiveVertical(20),
              },
              Style.marginRight18,
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
              Style.fontSize15,
              Style.fontWeight700,
              Style.color000000,
              Style.marginRight9,
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
            Style.borderWidth1,
          ]}
        />
        <View
          style={[
            Style.flexrow,
            Style.justifyContentSpaceBetween,
            Style.paddingHorizontal20,
          ]}>
          <Text>DATE</Text>
          <Text>Total Bill</Text>
        </View>
      </View>
    </View>
  );
};

export default OrderHistory;
