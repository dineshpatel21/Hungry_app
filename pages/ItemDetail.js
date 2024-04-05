import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Carousel from '../components/Carousel';
import  {
  responsiveVertical,
  responsiveHorizontal,
  MyStyle,
} from '../style';
const ItemDetail = ({navigation}) => {
  const [item, setItem] = useState(0);
  return (
    <View style={[MyStyle.flex1]}>
      <Carousel />
      <View
        style={[
          {
            width: responsiveHorizontal(317),
            height: responsiveVertical(190),
          },
          MyStyle.alignSelfCenter,
          MyStyle.borderWidth1,
          MyStyle.borderColorA61A1,
          MyStyle.marginRight20,
          MyStyle.borderRadius10,
          MyStyle.marginLeft18,
          MyStyle.marginTop17,
        ]}>
        <Image
          source={require('../assets/icons/food.png')}
          style={{
            width: responsiveHorizontal(317),
            height: responsiveVertical(190),
          }}
        />
      </View>

      <View
        style={[
          MyStyle.marginTop18,
          MyStyle.positionRelative,
          MyStyle.marginHorizontal20,
        ]}>
        <Text
          style={[MyStyle.fontSize25, MyStyle.fontWeight700, MyStyle.color000000]}>
          Name
        </Text>
        {/* <View style={[MyStyle.flexrow]}>
          <Image
            source={require('../assets/icons/stars.png')}
            style={{
              width: responsiveHorizontal(93),
              height: responsiveVertical(21),
              marginLeft: -12,
            }}
          />
        </View> */}
        <Text
          style={[MyStyle.fontSize10, MyStyle.fontWeight400, MyStyle.colorEE9846,MyStyle.marginTop13]}>
          Delicious meals are tasty, appetizing, scrumptious, yummy, luscious,
          delectable, mouth-watering, fit for a king, delightful, lovely,
          wonderful, pleasant, enjoyable, appealing, enchanting, charming and
          hihgly pleasant to the taste.
        </Text>
        <Image
          source={require('../assets/icons/green.png')}
          style={[
            {
              width: responsiveHorizontal(20),
              height: responsiveVertical(20),
              top: responsiveVertical(8),
              right: responsiveHorizontal(10),
            },
            MyStyle.positionAbsolute,
          ]}
        />
      </View>

      <View
        style={[
          MyStyle.flexrow,
          MyStyle.alignSelfCenter,
          MyStyle.positionAbsolute,
          {bottom: 16},
        ]}>
        <TouchableOpacity
          onPress={() => {
            if (item != 0) {
              setItem(item - 1);
            }
          }}
          style={[
            MyStyle.padding8,
            MyStyle.borderWidth1,
            MyStyle.borderColorA61A1,
            MyStyle.justifyContentCenter,
            MyStyle.alignItemCenter,
            MyStyle.marginRight20,
            MyStyle.borderRadius50,
          ]}>
          <Image
            source={require('../assets/icons/-.png')}
            style={{
              width: responsiveHorizontal(33),
              height: responsiveHorizontal(33),
            }}
          />
        </TouchableOpacity>
        <Text
          style={[MyStyle.fontSize35, MyStyle.fontWeight700, MyStyle.marginRight20]}>
          {item}
        </Text>
        <TouchableOpacity
          onPress={() => {
            setItem(item + 1);
          }}
          style={[
            MyStyle.padding8,
            MyStyle.borderWidth1,
            MyStyle.borderRadius10,
            MyStyle.borderColorA61A1,
            MyStyle.justifyContentCenter,
            MyStyle.alignItemCenter,
            MyStyle.marginRight20,
            MyStyle.borderRadius50,
          ]}>
          <Image
            source={require('../assets/icons/additem.png')}
            style={{
              width: responsiveHorizontal(33),
              height: responsiveHorizontal(33),
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('MyCart');
          }}
          style={[
            MyStyle.flexrow,
            MyStyle.paddingVertical10,
            MyStyle.paddingHorizontal6,

            MyStyle.backgroundColorEE9846,
            MyStyle.borderRadius10,
            MyStyle.alignItemCenter,
            {width: responsiveHorizontal(127)},
          ]}>
          <Image
            source={require('../assets/icons/shopping.png')}
            style={{
              width: responsiveHorizontal(36),
              height: responsiveHorizontal(33),
              marginRight: 8,
            }}
          />
          <Text
            style={[MyStyle.fontSize12, MyStyle.fontWeight500, MyStyle.colorWhite]}>
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ItemDetail;
