import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  ScrollView,
  Keyboard,
} from 'react-native';
import Carousel from '../components/Carousel';
import {
  responsiveVertical,
  responsiveHorizontal,
  MyStyle,
  vw,
  vh,
} from '../style';
import {Divider} from 'react-native-paper';
const MyCart = () => {
  const [DATA, SETDATA] = useState([
    {isSelected: false},
    {isSelected: false},
    {isSelected: false},
  ]);
  const [item, setItem] = useState(0);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        return setKeyboardVisible(true);
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        return setKeyboardVisible(false);
      },
    );
  }, [isKeyboardVisible]);
  return (
    <>
      <ScrollView style={[MyStyle.flex1, MyStyle.backgroundColorFFFFFF]}>
        <View
          style={[
            MyStyle.flexrow,
            MyStyle.justifyContentCenternter,
            MyStyle.marginHorizontal20,
            MyStyle.justifyContentSpaceBetween,
            MyStyle.borderRadius10,
            MyStyle.marginTop18,
            MyStyle.marginBottom15,
            MyStyle.borderColorA61A1,
            MyStyle.padding6,
          ]}>
          <View style={[MyStyle.flexrow, MyStyle.alignItemCenter]}>
            <Text style={[MyStyle.fontSize15, MyStyle.fontWeight400]}>
              Delivery Location
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              //navigation.navigate('MyCart');
            }}
            style={[
              MyStyle.flexrow,
              MyStyle.paddingVertical2,
              MyStyle.paddingHorizontal6,
              MyStyle.justifyContentCenter,
              MyStyle.alignItemCenterCenter,
              MyStyle.alignSelfCenter,
              MyStyle.borderWidth1,
              MyStyle.borderRadius10,
              MyStyle.alignItemCenter,
              MyStyle.borderColorEE9846,
            ]}>
            <Text
              style={[
                MyStyle.fontSize9,
                MyStyle.fontWeight400,
                MyStyle.colorEE9846,
              ]}>
              Chanage location
            </Text>
          </TouchableOpacity>
        </View>

        {DATA.map((item, index) => {
          return (
            <View
              style={[
                MyStyle.flexrow,
                MyStyle.alignItemCenter,
                MyStyle.positionRelative,
                MyStyle.backgroundColorFFFFFF,
                MyStyle.borderWidth1,
                MyStyle.marginHorizontal20,
                MyStyle.marginBottom15,
                MyStyle.borderRadius10,
                MyStyle.borderColorEE9846,
                MyStyle.paddingHorizontal25,
              ]}
              key={index}>
              <TouchableOpacity
                style={[
                  MyStyle.positionAbsolute,
                  MyStyle.icon20,
                  MyStyle.right10,
                  MyStyle.bottom13,
                ]}>
                <Image
                  source={require('../assets/icons/trash.png')}
                  style={[MyStyle.icon20]}
                />
              </TouchableOpacity>
              <View
                style={[
                  MyStyle.backgroundColorEE9846,
                  MyStyle.positionAbsolute,
                  MyStyle.marginLeft18,
                ]}>
                <Image
                  source={require('../assets/icons/check-mark.png')}
                  style={[MyStyle.icon20]}
                />
              </View>
              <View
                style={[
                  MyStyle.borderWidth1,
                  MyStyle.marginRight20,
                  MyStyle.borderRadius10,
                  MyStyle.borderColorA61A1,
                  MyStyle.icon121,
                  MyStyle.marginLeft45,
                ]}>
                <Image
                  source={require('../assets/icons/food.png')}
                  style={[MyStyle.icon121]}
                />
                <TouchableOpacity
                  style={[
                    MyStyle.borderWidth1,
                    MyStyle.alignItemCenter,
                    MyStyle.positionAbsolute,
                    MyStyle.justifyContentCenter,
                    MyStyle.alignSelfCenter,
                    MyStyle.backgroundColorEE9846,
                    MyStyle.borderRadius7,
                    MyStyle.width58,
                    MyStyle.height27,
                    MyStyle.bottomM10,
                    MyStyle.borderColorA6A1A1,
                  ]}>
                  <Text
                    style={[
                      MyStyle.fontSize12,
                      MyStyle.fontWeight700,
                      MyStyle.colorWhite,
                    ]}>
                    Add
                  </Text>
                  <Image
                    source={require('../assets/icons/+.png')}
                    style={[
                      MyStyle.positionAbsolute,
                      MyStyle.icon8,
                      MyStyle.marginRight4,
                      MyStyle.top4,
                    ]}
                  />
                </TouchableOpacity>
              </View>

              <View>
                <View style={[MyStyle.flexrow, MyStyle.alignItemCenter]}>
                  <Text
                    style={[
                      MyStyle.fontSize15,
                      MyStyle.fontWeight700,
                      MyStyle.color000000,
                      MyStyle.marginRight9,
                    ]}>
                    Name
                  </Text>
                  <TouchableOpacity style={[MyStyle.icon20]}>
                    <Image
                      source={
                        item.isSelected
                          ? require('../assets/icons/green.png')
                          : require('../assets/icons/ungreen.png')
                      }
                      style={[MyStyle.icon20]}
                    />
                  </TouchableOpacity>
                </View>

                <Text
                  style={[
                    MyStyle.fontSize15,
                    MyStyle.fontWeight400,
                    MyStyle.colorEE9846,
                  ]}>
                  Rs 150
                </Text>
              </View>

              <View
                style={[
                  MyStyle.flexrow,
                  MyStyle.alignSelfCenter,
                  MyStyle.positionAbsolute,
                  MyStyle.bottom15,
                  {left: vw / 2 - 10},
                ]}>
                <TouchableOpacity
                  onPress={() => {
                    if (item != 0) {
                      //   setItem(item - 1);
                    }
                  }}
                  style={[
                    MyStyle.borderWidth1,
                    MyStyle.borderColorA61A1,
                    MyStyle.marginRight20,
                    MyStyle.borderRadius50,
                    MyStyle.padding3,
                  ]}>
                  <Image
                    source={require('../assets/icons/-.png')}
                    style={[MyStyle.icon18]}
                  />
                </TouchableOpacity>
                <Text
                  style={[
                    MyStyle.fontSize17,
                    MyStyle.fontWeight700,
                    MyStyle.marginRight20,
                  ]}>
                  4
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    // setItem(item + 1);
                  }}
                  style={[
                    MyStyle.borderWidth1,
                    MyStyle.borderRadius10,
                    MyStyle.borderColorA61A1,
                    MyStyle.marginRight20,
                    MyStyle.borderRadius50,
                    MyStyle.padding3,
                  ]}>
                  <Image
                    source={require('../assets/icons/additem.png')}
                    style={[MyStyle.icon18]}
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        })}

        <View
          style={[
            MyStyle.flexrow,
            MyStyle.alignItemCenter,
            MyStyle.marginHorizontal20,
            MyStyle.alignSelfCenter,
            MyStyle.marginTop8,
            MyStyle.marginBottom10,
          ]}>
          <Image
            source={require('../assets/icons/stopwatch.png')}
            style={[MyStyle.marginRight7, MyStyle.icon20]}
          />
          <Text style={[MyStyle.fontSize15, MyStyle.fontWeight300]}>
            Delivery in{' '}
          </Text>
          <Text style={[MyStyle.fontSize15, MyStyle.fontWeight700]}>
            30-35 Min
          </Text>
        </View>

        <View
          style={[
            MyStyle.flexrow,
            MyStyle.justifyContentCenternter,
            MyStyle.borderWidth1,
            MyStyle.marginHorizontal20,
            MyStyle.justifyContentSpaceBetween,
            MyStyle.borderRadius10,
            MyStyle.marginTop18,
            MyStyle.marginBottom10,
            MyStyle.borderColord9d9d9,
            MyStyle.padding6,
          ]}>
          <View style={[MyStyle.flexrow, MyStyle.alignItemCenter]}>
            <Image
              source={require('../assets/icons/discount.png')}
              style={[MyStyle.icon30, MyStyle.marginRight16]}
            />
            <TextInput placeholder="Promo Code" />
          </View>
          <TouchableOpacity
            onPress={() => {
              //navigation.navigate('MyCart');
            }}
            style={[
              MyStyle.flexrow,
              MyStyle.paddingVertical2,
              MyStyle.paddingHorizontal6,
              MyStyle.justifyContentCenter,
              MyStyle.alignItemCenterCenter,
              MyStyle.alignSelfCenter,
              MyStyle.backgroundColorEE9846,
              MyStyle.borderRadius10,
              MyStyle.alignItemCenter,
              MyStyle.color255215,
            ]}>
            <Text
              style={[
                MyStyle.fontSize15,
                MyStyle.fontWeight700,
                MyStyle.color0A0808,
              ]}>
              Apply
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={[
            MyStyle.borderWidth1,
            MyStyle.alignSelfCenter,
            MyStyle.paddingVertical10,
            MyStyle.borderRadius10,
            MyStyle.padding8,
            MyStyle.width325,
          ]}>
          <View
            style={[
              MyStyle.flexrow,
              MyStyle.justifyContentSpaceBetween,
              MyStyle.marginBottom8,
            ]}>
            <View style={[MyStyle.marginLeft18]}>
              <Text
                style={[
                  MyStyle.fontSize20,
                  MyStyle.fontWeight700,
                  MyStyle.color000000,
                ]}>
                Payment summary
              </Text>
            </View>
          </View>
          <Divider style={[MyStyle.borderWidth1, MyStyle.marginVertical9]} />

          <View
            style={[
              MyStyle.flexrow,
              MyStyle.justifyContentSpaceBetween,
              MyStyle.marginHorizontal20,
            ]}>
            <Text style={[MyStyle.fontSize15, MyStyle.fontWeight500]}>
              Total Item (8)
            </Text>
            <Text
              style={[
                MyStyle.fontSize10,
                MyStyle.fontWeight700,
                MyStyle.color000000,
              ]}>
              Rs 1500
            </Text>
          </View>
          <View
            style={[
              MyStyle.flexrow,
              MyStyle.justifyContentSpaceBetween,
              MyStyle.marginHorizontal20,
            ]}>
            <Text style={[MyStyle.fontSize15, MyStyle.fontWeight500]}>
              Delivery Fee
            </Text>
            <Text
              style={[
                MyStyle.fontSize10,
                MyStyle.fontWeight700,
                MyStyle.color000000,
              ]}>
              Rs 150
            </Text>
          </View>
          <View
            style={[
              MyStyle.flexrow,
              MyStyle.justifyContentSpaceBetween,
              MyStyle.marginHorizontal20,
            ]}>
            <Text style={[MyStyle.fontSize15, MyStyle.fontWeight500]}>
              Discount
            </Text>
            <Text
              style={[
                MyStyle.fontSize10,
                MyStyle.fontWeight700,
                MyStyle.color000000,
              ]}>
              Rs 1300
            </Text>
          </View>

          <Divider
            style={[
              MyStyle.borderStyleDotted,
              MyStyle.borderWidth1,
              MyStyle.borderWidth1,
              MyStyle.marginVertical9,
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
        {!isKeyboardVisible && (
          <TouchableOpacity
            onPress={() => {}}
            style={[
              MyStyle.flexrow,
              MyStyle.paddingVertical10,
              MyStyle.paddingHorizontal6,
              MyStyle.justifyContentCenter,
              MyStyle.alignSelfCenter,
              MyStyle.backgroundColorEE9846,
              MyStyle.borderRadius10,
              MyStyle.alignItemCenter,
              MyStyle.marginTop18,
              MyStyle.marginBottom10,
              MyStyle.width127,
            ]}>
            <Text
              style={[
                MyStyle.fontSize18,
                MyStyle.fontWeight500,
                MyStyle.colorWhite,
              ]}>
              PLACE ORDER
            </Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </>
  );
};
export default MyCart;
