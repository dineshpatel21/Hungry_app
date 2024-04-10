import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {responsiveVertical, responsiveHorizontal, MyStyle} from '../style';

import {Divider} from 'react-native-paper';

const NewOrder = () => {
  return (
    <ScrollView style={[MyStyle.flex1, MyStyle.backgroundColorFFFFFF]}>
      <View
        style={[
          MyStyle.flexrow,
          MyStyle.width100,
          MyStyle.alignItemCenter,
          MyStyle.backgroundColorEE9846,
          MyStyle.height90,
        ]}>
        <Text
          style={[
            MyStyle.fontSize28,
            MyStyle.fontWeight500,
            MyStyle.marginHorizontal20,
            MyStyle.colorWhite,
          ]}>
          New Order Detail
        </Text>
      </View>

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
            MyStyle.marginHorizontal14,
          ]}>
          <Text
            style={[
              MyStyle.fontSize15,
              MyStyle.fontWeight700,
              MyStyle.color0093FE,
            ]}>
            10th order by Vishal Chauhan
          </Text>
          <Text style={[MyStyle.fontSize15, MyStyle.fontWeight700]}>
            1:00 PM
          </Text>
        </View>
        <Divider style={[MyStyle.borderWidth1, MyStyle.marginVertical15]} />

        <View
          style={[
            MyStyle.flexrow,
            MyStyle.alignItemCenter,
            MyStyle.marginBottom8,
            MyStyle.marginLeft18,
            MyStyle.justifyContentSpaceBetween,
            MyStyle.marginHorizontal14,
          ]}>
          <View style={[MyStyle.flexrow]}>
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
          <Text>Rs100</Text>
        </View>

        <View
          style={[
            MyStyle.flexrow,
            MyStyle.alignItemCenter,
            MyStyle.marginBottom8,
            MyStyle.marginLeft18,
            MyStyle.justifyContentSpaceBetween,
            MyStyle.marginHorizontal14,
          ]}>
          <View style={[MyStyle.flexrow]}>
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
          <Text>Rs100</Text>
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
            MyStyle.alignItemCenter,
            MyStyle.justifyContentSpaceBetween,
            MyStyle.marginHorizontal14,
          ]}>
          <Text style={[MyStyle.fontSize12, MyStyle.fontWeight400]}>
            Total Bill
          </Text>
          <Text style={[MyStyle.fontSize12, MyStyle.fontWeight400]}>Rs200</Text>
        </View>

        <View
          style={[
            MyStyle.borderRadius10,
            MyStyle.marginRight18,
            MyStyle.alignItemCenter,
            MyStyle.justifyContentCenter,
            MyStyle.marginTop4,
            MyStyle.marginBottom10,
            MyStyle.width50,
            MyStyle.padding5,
            MyStyle.marginHorizontal14,
            MyStyle.backgroundColor4BABCA,
          ]}>
          <Text
            style={[
              MyStyle.fontSize15,
              MyStyle.fontWeight400,
              MyStyle.colorFF0000,
            ]}>
            Paid
          </Text>
        </View>

        <Text
          style={[
            MyStyle.fontSize14,
            MyStyle.fontWeight500,
            MyStyle.marginHorizontal14,
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
            MyStyle.height40,
          ]}>
          <TouchableOpacity>
            <Text style={[MyStyle.fontSize17, MyStyle.marginLeft50]}>-</Text>
          </TouchableOpacity>
          <Divider
            horizontalInset={true}
            style={[
              MyStyle.height100,
              MyStyle.bw12,
              MyStyle.marginHorizontal20,
            ]}
          />
          <Text>20 Mins</Text>
          <Divider
            horizontalInset={true}
            style={[
              MyStyle.marginHorizontal20,
              MyStyle.height100,
              MyStyle.bw12,
            ]}
          />
          <TouchableOpacity>
            <Text style={[MyStyle.fontSize17, MyStyle.marginRight50]}>+</Text>
          </TouchableOpacity>
        </View>

        <View
          style={[
            MyStyle.flexrow,
            MyStyle.alignItemCenter,
            MyStyle.justifyContentCenter,
            MyStyle.marginTop28,
            MyStyle.marginHorizontal14,
          ]}>
          <TouchableOpacity
            style={[
              MyStyle.borderWidth1,
              MyStyle.paddingVertical10,
              MyStyle.paddingHorizontal14,
              MyStyle.borderRadius10,
              MyStyle.marginRight24,
              MyStyle.borderColorFF0000,
            ]}>
            <Text
              style={[
                MyStyle.fontSize20,
                MyStyle.fontWeight500,
                MyStyle.colorFF0000,
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
              MyStyle.backgroundColorE69343,
            ]}>
            <Text
              style={[
                MyStyle.fontSize20,
                MyStyle.fontWeight500,
                MyStyle.colorWhite,
              ]}>
              Accept
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default NewOrder;
