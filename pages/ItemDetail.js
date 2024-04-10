import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Carousel from '../components/Carousel';
import {responsiveVertical, responsiveHorizontal, MyStyle} from '../style';
const ItemDetail = ({navigation}) => {
  const [item, setItem] = useState(0);
  return (
    <View style={[MyStyle.flex1]}>
      <Carousel />
      <View
        style={[
          MyStyle.width317,
          MyStyle.height190,
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
          style={[MyStyle.width317, MyStyle.height190]}
        />
      </View>

      <View
        style={[
          MyStyle.marginTop18,
          MyStyle.positionRelative,
          MyStyle.marginHorizontal20,
        ]}>
        <Text
          style={[
            MyStyle.fontSize25,
            MyStyle.fontWeight700,
            MyStyle.color000000,
          ]}>
          Name
        </Text>

        <Text
          style={[
            MyStyle.fontSize10,
            MyStyle.fontWeight400,
            MyStyle.colorEE9846,
            MyStyle.marginTop13,
          ]}>
          Delicious meals are tasty, appetizing, scrumptious, yummy, luscious,
          delectable, mouth-watering, fit for a king, delightful, lovely,
          wonderful, pleasant, enjoyable, appealing, enchanting, charming and
          hihgly pleasant to the taste.
        </Text>
        <Image
          source={require('../assets/icons/green.png')}
          style={[
            MyStyle.positionAbsolute,
            MyStyle.icon20,
            MyStyle.right10,
            MyStyle.top8,
          ]}
        />
      </View>

      <View
        style={[
          MyStyle.flexrow,
          MyStyle.alignSelfCenter,
          MyStyle.positionAbsolute,
          MyStyle.alignItemCenter,
          MyStyle.bottom16,
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
            style={[MyStyle.icon32]}
          />
        </TouchableOpacity>
        <Text
          style={[
            MyStyle.fontSize35,
            MyStyle.fontWeight700,
            MyStyle.marginRight20,
          ]}>
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
            style={[MyStyle.icon32]}
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
            MyStyle.width127,
          ]}>
          <Image
            source={require('../assets/icons/shopping.png')}
            style={[MyStyle.marginRight7, MyStyle.width36, MyStyle.height33]}
          />
          <Text
            style={[
              MyStyle.fontSize12,
              MyStyle.fontWeight500,
              MyStyle.colorWhite,
            ]}>
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ItemDetail;
