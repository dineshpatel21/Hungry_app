import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Keyboard,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import MenuManagement from '../components/MenuManagement';
import {
  responsiveVertical,
  responsiveHorizontal,
  MyStyle,
  vw,
  vh,
} from '../style';
import {Divider} from 'react-native-paper';

const Cart = () => {
  const [DATA, SETDATA] = useState([{isSelected: false}, {isSelected: false}]);
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
    <ScrollView style={[MyStyle.flex1]}>
      <View style={[{flex: 0.4}, MyStyle.marginBottom10]}>
        <View
          style={[MyStyle.marginBottom15, MyStyle.marginTop8, MyStyle.height2]}
        />
        <View style={[MyStyle.marginHorizontal20]}>
          <Text
            style={[
              MyStyle.welcomebtntext,
              MyStyle.color000000,
              MyStyle.fontWeight500,
              MyStyle.fontSize16,
            ]}>
            Place order for customer
          </Text>
        </View>
        <TextInput
          label="Mobile"
          mode="outlined"
          placeholder="Customer Name"
          style={[
            MyStyle.backgroundColorFFFFFF,
            MyStyle.marginHorizontal20,
            MyStyle.marginTop8,
            MyStyle.borderRadius10,
            MyStyle.borderWidth1,
            MyStyle.paddingHorizontal14,
          ]}
          // value={text}
          // onChangeText={text => setText(text)}
        />

        <TextInput
          label="Mobile"
          mode="outlined"
          placeholder="Customer Phone no."
          style={[
            MyStyle.backgroundColorFFFFFF,
            MyStyle.marginTop8,
            MyStyle.marginHorizontal20,
            MyStyle.borderRadius10,
            MyStyle.borderWidth1,
            MyStyle.paddingHorizontal14,
          ]}
          // value={text}
          // onChangeText={text => setText(text)}
        />
      </View>

      <View style={{flex: 0.6}}>
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
                MyStyle.paddingVertical25,
              ]}
              key={index}>
              <TouchableOpacity
                style={[
                  MyStyle.positionAbsolute,
                  MyStyle.right10,
                  MyStyle.icon20,
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
                  {left: responsiveHorizontal(17)},
                ]}>
                <Image
                  source={require('../assets/icons/check-mark.png')}
                  style={[MyStyle.icon20]}
                />
              </View>
              <View
                style={[
                  MyStyle.marginLeft18,
                  MyStyle.borderWidth1,
                  MyStyle.marginRight20,
                  MyStyle.borderRadius10,
                  MyStyle.borderColorA61A1,
                  MyStyle.marginLeft45,
                  MyStyle.icon121,
                ]}>
                <Image
                  source={require('../assets/icons/food.png')}
                  style={[MyStyle.icon121]}
                />
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
                  MyStyle.positionAbsolute,MyStyle.alignItemCenter,
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
                    style={[MyStyle.icon17]}
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
                    style={[MyStyle.icon17]}
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
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
                {color: 'rgba(202, 1, 1, 1)'},
              ]}>
              Rs 1300
            </Text>
          </View>

          <Divider
            style={{borderWidth: 1}}
            style={[
              MyStyle.borderWidth1,
              MyStyle.borderStyleDotted,
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
          <View
            style={[
              MyStyle.width100,
              MyStyle.justifyContentCenter,
              MyStyle.marginBottom8,
            ]}>
            <TouchableOpacity
              style={[
                MyStyle.welcomebtn,
                MyStyle.alignItemCenter,
                MyStyle.justifyContentCenter,
                MyStyle.alignSelfCenter,
                MyStyle.width155,
              ]}
              onPress={() => {}}>
              <Text
                style={[
                  MyStyle.welcomebtntext,
                  MyStyle.colorWhite,
                  MyStyle.fontWeight400,
                  MyStyle.fontSize24,
                ]}>
                Done
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default Cart;
