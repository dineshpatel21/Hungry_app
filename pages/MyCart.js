import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  ScrollView, Keyboard,
} from 'react-native';
import Carousel from '../components/Carousel';
import Style, {
  responsiveHorizontal,
  responsiveVertical,
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
      <ScrollView style={[Style.flex1, Style.backgroundColorFFFFFF]}>
        {/* <View
        style={[
          Style.flexrow,
          Style.justifyContentCenternter,
          Style.marginHorizontal20,
          Style.justifyContentSpaceBetween,
          Style.borderRadius10,
          Style.marginTop18,
          Style.marginBottom15,
          Style.borderColorA61A1,
          {padding: 6},
        ]}>
        <View style={[Style.flexrow, Style.alignItemCenter]}>
          <Text style={[Style.fontSize15, Style.fontWeight400]}>
            Delivery Location
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            //navigation.navigate('MyCart');
          }}
          style={[
            Style.flexrow,
            Style.paddingVertical2,
            Style.paddingHorizontal6,
            Style.justifyContentCenter,
            Style.alignItemCenterCenter,
            Style.alignSelfCenter,
            Style.borderWidth1,
            Style.borderRadius10,
            Style.alignItemCenter,
            {borderColor: '#EE9846'},
          ]}>
          <Text
            style={[Style.fontSize9, Style.fontWeight400, {color: '#EE9846'}]}>
            Chanage location
          </Text>
        </TouchableOpacity>
      </View> */}

        {DATA.map((item, index) => {
          return (
            <View
              style={[
                Style.flexrow,
                Style.alignItemCenter,
                Style.positionRelative,
                Style.backgroundColorFFFFFF,
                Style.borderWidth1,
                Style.marginHorizontal20,
                Style.marginBottom15,
                Style.borderRadius10,
                {
                  paddingVertical: responsiveVertical(25),
                  borderColor: '#EE9846',
                },
              ]}
              key={index}>
              <TouchableOpacity
                style={[
                  {
                    width: responsiveHorizontal(20),
                    height: responsiveVertical(20),
                    bottom: responsiveVertical(13),
                    right: 10,
                  },
                  Style.positionAbsolute,
                ]}>
                <Image
                  source={require('../assets/icons/trash.png')}
                  style={[
                    {
                      width: responsiveHorizontal(20),
                      height: responsiveVertical(20),
                    },
                  ]}
                />
              </TouchableOpacity>
              <View
                style={[
                  Style.backgroundColorEE9846,
                  Style.positionAbsolute,
                  {left: responsiveHorizontal(17)},
                ]}>
                <Image
                  source={require('../assets/icons/check-mark.png')}
                  style={[
                    {
                      width: responsiveHorizontal(20),
                      height: responsiveVertical(20),
                    },
                  ]}
                />
              </View>
              <View
                style={[
                  Style.marginLeft18,
                  Style.borderWidth1,
                  Style.marginRight20,
                  Style.borderRadius10,
                  Style.borderColorA61A1,
                  {
                    marginLeft: 18,
                    width: responsiveHorizontal(122),
                    height: responsiveVertical(121),
                    marginLeft: responsiveHorizontal(45),
                  },
                ]}>
                <Image
                  source={require('../assets/icons/food.png')}
                  style={{
                    width: responsiveHorizontal(122),
                    height: responsiveVertical(121),
                  }}
                />
                <TouchableOpacity
                  style={[
                    Style.borderWidth1,
                    Style.alignItemCenter,
                    Style.positionAbsolute,
                    Style.justifyContentCenter,
                    Style.alignSelfCenter,
                    Style.backgroundColorEE9846,
                    {
                      width: responsiveHorizontal(58),
                      height: responsiveVertical(27),
                      borderRadius: 7,
                      bottom: -10,
                      borderColor: '#A6A1A1',
                    },
                  ]}>
                  <Text
                    style={[
                      Style.fontSize12,
                      Style.fontWeight700,
                      Style.colorWhite,
                    ]}>
                    Add
                  </Text>
                  <Image
                    source={require('../assets/icons/+.png')}
                    style={[
                      {
                        width: responsiveHorizontal(9),
                        height: responsiveVertical(8),
                        top: 4,
                        right: 4,
                      },
                      Style.positionAbsolute,
                    ]}
                  />
                </TouchableOpacity>
              </View>

              <View>
                <View style={[Style.flexrow, Style.alignItemCenter]}>
                  <Text
                    style={[
                      Style.fontSize15,
                      Style.fontWeight700,
                      Style.color000000,
                      Style.marginRight9,
                    ]}>
                    Name
                  </Text>
                  <TouchableOpacity
                    style={[
                      {
                        width: responsiveHorizontal(20),
                        height: responsiveVertical(20),
                      },
                    ]}>
                    <Image
                      source={
                        item.isSelected
                          ? require('../assets/icons/green.png')
                          : require('../assets/icons/ungreen.png')
                      }
                      style={[
                        {
                          width: responsiveHorizontal(20),
                          height: responsiveVertical(20),
                        },
                      ]}
                    />
                  </TouchableOpacity>
                </View>

                <Text
                  style={[
                    Style.fontSize15,
                    Style.fontWeight400,
                    Style.colorEE9846,
                  ]}>
                  Rs 150
                </Text>
              </View>

              <View
                style={[
                  Style.flexrow,
                  Style.alignSelfCenter,
                  Style.positionAbsolute,

                  {bottom: 15, left: vw / 2 - 10},
                ]}>
                <TouchableOpacity
                  onPress={() => {
                    if (item != 0) {
                      //   setItem(item - 1);
                    }
                  }}
                  style={[
                    {padding: 3},
                    Style.borderWidth1,
                    Style.borderColorA61A1,
                    Style.marginRight20,
                    Style.borderRadius50,
                  ]}>
                  <Image
                    source={require('../assets/icons/-.png')}
                    style={{
                      width: responsiveHorizontal(17),
                      height: responsiveHorizontal(17),
                    }}
                  />
                </TouchableOpacity>
                <Text
                  style={[
                    Style.fontSize17,
                    Style.fontWeight700,
                    Style.marginRight20,
                  ]}>
                  4
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    // setItem(item + 1);
                  }}
                  style={[
                    Style.borderWidth1,
                    Style.borderRadius10,
                    Style.borderColorA61A1,
                    Style.marginRight20,
                    Style.borderRadius50,
                    {padding: 3},
                  ]}>
                  <Image
                    source={require('../assets/icons/additem.png')}
                    style={{
                      width: responsiveHorizontal(17),
                      height: responsiveHorizontal(17),
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        })}

        <View
          style={[
            Style.flexrow,
            Style.alignItemCenter,
            Style.marginHorizontal20,
            Style.alignSelfCenter,
            Style.marginTop8,
            Style.marginBottom10,
          ]}>
          <Image
            source={require('../assets/icons/stopwatch.png')}
            style={[
              {
                width: responsiveHorizontal(21),
                height: responsiveVertical(22),
                marginRight: responsiveHorizontal(7),
              },
            ]}
          />
          <Text style={[Style.fontSize15, Style.fontWeight300]}>
            Delivery in{' '}
          </Text>
          <Text style={[Style.fontSize15, Style.fontWeight700]}>30-35 Min</Text>
        </View>

        <View
          style={[
            Style.flexrow,
            Style.justifyContentCenternter,
            Style.borderWidth1,
            Style.marginHorizontal20,
            Style.justifyContentSpaceBetween,
            Style.borderRadius10,
            Style.marginTop18,
            Style.marginBottom10,
            {padding: 6, borderColor: '#D9D9D9'},
          ]}>
          <View style={[Style.flexrow, Style.alignItemCenter]}>
            <Image
              source={require('../assets/icons/discount.png')}
              style={[
                {
                  width: responsiveHorizontal(29),
                  height: responsiveVertical(30),
                  marginRight: responsiveHorizontal(16),
                },
              ]}
            />
            <TextInput placeholder="Promo Code" />
          </View>
          <TouchableOpacity
            onPress={() => {
              //navigation.navigate('MyCart');
            }}
            style={[
              Style.flexrow,
              Style.paddingVertical2,
              Style.paddingHorizontal6,
              Style.justifyContentCenter,
              Style.alignItemCenterCenter,
              Style.alignSelfCenter,
              Style.backgroundColorEE9846,
              Style.borderRadius10,
              Style.alignItemCenter,
              {backgroundColor: 'rgba(255, 215, 215, 1)'},
            ]}>
            <Text
              style={[
                Style.fontSize15,
                Style.fontWeight700,
                {color: '#0A0808'},
              ]}>
              Apply
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={[
            {width: responsiveHorizontal(325)},
            Style.borderWidth1,
            Style.alignSelfCenter,
            Style.paddingVertical10,
            Style.borderRadius10,
            Style.padding8,
          ]}>
          <View
            style={[
              Style.flexrow,
              Style.justifyContentSpaceBetween,
              Style.marginBottom8,
            ]}>
            <View style={[Style.marginLeft18]}>
              <Text
                style={[
                  Style.fontSize20,
                  Style.fontWeight700,
                  Style.color000000,
                ]}>
                Payment summary
              </Text>
            </View>
          </View>
          <Divider style={[Style.borderWidth1, Style.marginVertical9]} />

          <View
            style={[
              Style.flexrow,
              Style.justifyContentSpaceBetween,
              Style.marginHorizontal20,
            ]}>
            <Text style={[Style.fontSize15, Style.fontWeight500]}>
              Total Item (8)
            </Text>
            <Text
              style={[
                Style.fontSize10,
                Style.fontWeight700,
                Style.color000000,
              ]}>
              Rs 1500
            </Text>
          </View>
          <View
            style={[
              Style.flexrow,
              Style.justifyContentSpaceBetween,
              Style.marginHorizontal20,
            ]}>
            <Text style={[Style.fontSize15, Style.fontWeight500]}>
              Delivery Fee
            </Text>
            <Text
              style={[
                Style.fontSize10,
                Style.fontWeight700,
                Style.color000000,
              ]}>
              Rs 150
            </Text>
          </View>
          <View
            style={[
              Style.flexrow,
              Style.justifyContentSpaceBetween,
              Style.marginHorizontal20,
            ]}>
            <Text style={[Style.fontSize15, Style.fontWeight500]}>
              Discount
            </Text>
            <Text
              style={[
                Style.fontSize10,
                Style.fontWeight700,
                Style.color000000,
              ]}>
              Rs 1300
            </Text>
          </View>

          <Divider
            style={{borderWidth: 1}}
            style={[
              {
                borderStyle: 'dotted',
                marginVertical: responsiveVertical(9),
                //marginHorizontal: responsiveHorizontal(14),
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
        {!isKeyboardVisible&&<TouchableOpacity
        onPress={() => {}}
        style={[
          Style.flexrow,
          Style.paddingVertical10,
          Style.paddingHorizontal6,
          Style.justifyContentCenter,
        
          Style.alignSelfCenter,
          Style.backgroundColorEE9846,
          Style.borderRadius10,
          Style.alignItemCenter,
         Style.marginTop18,Style.marginBottom10,
          {width: responsiveHorizontal(127), },
        ]}>
        <Text style={[Style.fontSize18, Style.fontWeight500, Style.colorWhite]}>
          PLACE ORDER
        </Text>
      </TouchableOpacity>}
      </ScrollView>
      
    </>
  );
};
export default MyCart;
