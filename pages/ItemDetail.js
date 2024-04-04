import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Carousel from '../components/Carousel';
import Style, {responsiveHorizontal, responsiveVertical} from '../style';
const ItemDetail = ({navigation}) => {
  const [item, setItem] = useState(0);
  return (
    <View style={[Style.flex1]}>
      <Carousel />
      <View
        style={[
          {
            width: responsiveHorizontal(317),
            height: responsiveVertical(190),
          },
          Style.alignSelfCenter,
          Style.borderWidth1,
          Style.borderColorA61A1,
          Style.marginRight20,
          Style.borderRadius10,
          Style.marginLeft18,
          Style.marginTop17,
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
          Style.marginTop18,
          Style.positionRelative,
          Style.marginHorizontal20,
        ]}>
        <Text
          style={[Style.fontSize25, Style.fontWeight700, Style.color000000]}>
          Name
        </Text>
        {/* <View style={[Style.flexrow]}>
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
          style={[Style.fontSize10, Style.fontWeight400, Style.colorEE9846,Style.marginTop13]}>
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
            Style.positionAbsolute,
          ]}
        />
      </View>

      <View
        style={[
          Style.flexrow,
          Style.alignSelfCenter,
          Style.positionAbsolute,
          {bottom: 16},
        ]}>
        <TouchableOpacity
          onPress={() => {
            if (item != 0) {
              setItem(item - 1);
            }
          }}
          style={[
            Style.padding8,
            Style.borderWidth1,
            Style.borderColorA61A1,
            Style.justifyContentCenter,
            Style.alignItemCenter,
            Style.marginRight20,
            Style.borderRadius50,
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
          style={[Style.fontSize35, Style.fontWeight700, Style.marginRight20]}>
          {item}
        </Text>
        <TouchableOpacity
          onPress={() => {
            setItem(item + 1);
          }}
          style={[
            Style.padding8,
            Style.borderWidth1,
            Style.borderRadius10,
            Style.borderColorA61A1,
            Style.justifyContentCenter,
            Style.alignItemCenter,
            Style.marginRight20,
            Style.borderRadius50,
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
            Style.flexrow,
            Style.paddingVertical10,
            Style.paddingHorizontal6,

            Style.backgroundColorEE9846,
            Style.borderRadius10,
            Style.alignItemCenter,
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
            style={[Style.fontSize12, Style.fontWeight500, Style.colorWhite]}>
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ItemDetail;
