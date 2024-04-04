import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import MyStyle from '../style';
import Colors from '../style';
import Fonts from '../style';
import Style, {
  responsiveVertical,
  responsiveHorizontal,
  responsiveFonts,
} from '../style';
import {Divider} from 'react-native-paper';

const NewOrder = () => {
  return (
    <View style={[MyStyle.flex1, MyStyle.backgroundColorFFFFFF]}>
      <View
        style={[
          MyStyle.borderWidth1,
          MyStyle.padding8,
          MyStyle.marginHorizontal20,
          MyStyle.marginTop16,
          MyStyle.borderRadius10,
        ]}>
        <View
          style={[
            MyStyle.flexrow,
            MyStyle.justifyContentSpaceBetween,
            MyStyle.alignItemCenter,
            {marginHorizontal: responsiveHorizontal(14)},
          ]}>
          <Text
            style={[Fonts.fontSize15, Fonts.fontWeight700, {color: '#0093FE'}]}>
            10th order by Vishal Chauhan
          </Text>
          <Text style={[Fonts.fontSize15, Fonts.fontWeight700]}>1:00 PM</Text>
        </View>
        <Divider style={{marginVertical: 15, borderWidth: 1}} />

        <View
          style={[
            MyStyle.flexrow,
            MyStyle.alignItemCenter,
            MyStyle.marginBottom8,
            MyStyle.marginLeft18,
            MyStyle.justifyContentSpaceBetween,
            {marginHorizontal: responsiveHorizontal(14)},
          ]}>
          <View style={[MyStyle.flexrow]}>
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
              <Text style={[{color: 'rgba(255, 0, 0, 1)'}]}>Quantity</Text> X
              Dish
            </Text>
          </View>
          <Text>Rs100</Text>
        </View>

        <View
          style={[
            MyStyle.flexrow,
            MyStyle.alignItemCenter,
            MyStyle.marginBottom8,
            MyStyle.marginLeft18,
            MyStyle.justifyContentSpaceBetween,
            {marginHorizontal: responsiveHorizontal(14)},
          ]}>
          <View style={[MyStyle.flexrow]}>
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
              <Text style={[{color: 'rgba(255, 0, 0, 1)'}]}>Quantity</Text> X
              Dish
            </Text>
          </View>
          <Text>Rs100</Text>
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
            MyStyle.flexrow,
            MyStyle.alignItemCenter,
            MyStyle.justifyContentSpaceBetween,
            {marginHorizontal: responsiveHorizontal(14)},
          ]}>
          <Text style={[Fonts.fontSize12, Fonts.fontWeight400]}>
            Total Bill
          </Text>
          <Text style={[Fonts.fontSize12, Fonts.fontWeight400]}>Rs200</Text>
        </View>

        <View
          style={[
            {
              backgroundColor: '#4BABCA',
              padding: 5,
              width: 50,
              marginHorizontal: responsiveHorizontal(14),
            },
            MyStyle.borderRadius10,
            MyStyle.marginRight18,
            MyStyle.alignItemCenter,
            MyStyle.justifyContentCenter,
            MyStyle.marginTop4,
            MyStyle.marginBottom10,
          ]}>
          <Text
            style={[Fonts.fontSize15, Fonts.fontWeight400, {color: '#FF0000'}]}>
            Paid
          </Text>
        </View>

        <Text
          style={[
            Fonts.fontSize14,
            Fonts.fontWeight500,
            {marginHorizontal: responsiveHorizontal(14)},
          ]}>
          Set food preparation time
        </Text>

        <View
          style={[
            MyStyle.flexrow,
            MyStyle.borderWidth1,
            MyStyle.alignItemCenter,
            MyStyle.borderRadius10,
            MyStyle.justifyContentSpaceBetween,
            MyStyle.marginTop16,
            {height: responsiveVertical(40)},
          ]}>
          <TouchableOpacity>
            <Text
              style={[
                {marginLeft: responsiveHorizontal(50)},
                Fonts.fontSize17,
              ]}>
              -
            </Text>
          </TouchableOpacity>
          <Divider
            horizontalInset={true}
            style={[
              {borderWidth: 0.5, height: '100%'},
              Style.marginHorizontal20,
            ]}
          />
          <Text>20 Mins</Text>
          <Divider
            horizontalInset={true}
            style={[
              {borderWidth: 0.5, height: '100%'},
              Style.marginHorizontal20,
            ]}
          />
          <TouchableOpacity>
            <Text
              style={[
                {marginRight: responsiveHorizontal(50)},
                Fonts.fontSize17,
              ]}>
              +
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={[
            MyStyle.flexrow,
            MyStyle.alignItemCenter,
            MyStyle.justifyContentCenter,
            MyStyle.marginTop28,
            {marginHorizontal: responsiveHorizontal(14)},
          ]}>
          <TouchableOpacity
            style={[
              MyStyle.borderWidth1,
              MyStyle.paddingVertical10,
              MyStyle.paddingHorizontal14,
              MyStyle.borderRadius10,
              MyStyle.marginRight24,
              {borderColor: '#FF0000'},
            ]}>
            <Text
              style={[
                Fonts.fontSize20,
                Fonts.fontWeight500,
                {color: '#FF0000'},
              ]}>
              Reject
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              MyStyle.borderWidth1,
              MyStyle.paddingVertical10,
              MyStyle.paddingHorizontal14,
              MyStyle.borderRadius10,
              {backgroundColor: '#E69343'},
            ]}>
            <Text
              style={[Fonts.fontSize20, Fonts.fontWeight500, Fonts.colorWhite]}>
              Accept
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default NewOrder;
