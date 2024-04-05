import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import  {
  responsiveVertical,
  responsiveHorizontal,
  MyStyle,
} from '../style';


import {Divider} from 'react-native-paper';

const NewOrder = () => {
  return (
    <ScrollView style={[MyStyle.flex1, MyStyle.backgroundColorFFFFFF]}>
      <View
        style={[
          MyStyle.flexrow,
          MyStyle.width100,
          MyStyle.alignItemCenter,
          {height: responsiveVertical(90), backgroundColor: '#E69343'},
        ]}>
        <Text
          style={[
            MyStyle.fontSize28,
            MyStyle.fontWeight500,
            MyStyle.marginHorizontal20,
            {color: '#FFFFFF'},
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
            {marginHorizontal: responsiveHorizontal(14)},
          ]}>
          <Text
            style={[MyStyle.fontSize15, MyStyle.fontWeight700, {color: '#0093FE'}]}>
            10th order by Vishal Chauhan
          </Text>
          <Text style={[MyStyle.fontSize15, MyStyle.fontWeight700]}>1:00 PM</Text>
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
                MyStyle.marginRight18,
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
                MyStyle.fontSize15,
                MyStyle.fontWeight700,
                MyStyle.color000000,
                MyStyle.marginRight9,
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
                MyStyle.marginRight18,
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
                MyStyle.fontSize15,
                MyStyle.fontWeight700,
                MyStyle.color000000,
                MyStyle.marginRight9,
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
            MyStyle.borderWidth1,
          ]}
        />
        <View
          style={[
            MyStyle.flexrow,
            MyStyle.alignItemCenter,
            MyStyle.justifyContentSpaceBetween,
            {marginHorizontal: responsiveHorizontal(14)},
          ]}>
          <Text style={[MyStyle.fontSize12, MyStyle.fontWeight400]}>
            Total Bill
          </Text>
          <Text style={[MyStyle.fontSize12, MyStyle.fontWeight400]}>Rs200</Text>
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
            style={[MyStyle.fontSize15, MyStyle.fontWeight400, {color: '#FF0000'}]}>
            Paid
          </Text>
        </View>

        <Text
          style={[
            MyStyle.fontSize14,
            MyStyle.fontWeight500,
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
                MyStyle.fontSize17,
              ]}>
              -
            </Text>
          </TouchableOpacity>
          <Divider
            horizontalInset={true}
            style={[
              {borderWidth: 0.5, height: '100%'},
              MyStyle.marginHorizontal20,
            ]}
          />
          <Text>20 Mins</Text>
          <Divider
            horizontalInset={true}
            style={[
              {borderWidth: 0.5, height: '100%'},
              MyStyle.marginHorizontal20,
            ]}
          />
          <TouchableOpacity>
            <Text
              style={[
                {marginRight: responsiveHorizontal(50)},
                MyStyle.fontSize17,
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
                MyStyle.fontSize20,
                MyStyle.fontWeight500,
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
              style={[MyStyle.fontSize20, MyStyle.fontWeight500, MyStyle.colorWhite]}>
              Accept
            </Text>
          </TouchableOpacity>
        </View>
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
            {marginHorizontal: responsiveHorizontal(14)},
          ]}>
          <Text
            style={[MyStyle.fontSize15, MyStyle.fontWeight700, {color: '#0093FE'}]}>
            10th order by Vishal Chauhan
          </Text>
          <Text style={[MyStyle.fontSize15, MyStyle.fontWeight700]}>1:00 PM</Text>
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
                MyStyle.marginRight18,
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
                MyStyle.fontSize15,
                MyStyle.fontWeight700,
                MyStyle.color000000,
                MyStyle.marginRight9,
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
                MyStyle.marginRight18,
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
                MyStyle.fontSize15,
                MyStyle.fontWeight700,
                MyStyle.color000000,
                MyStyle.marginRight9,
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
            MyStyle.borderWidth1,
          ]}
        />
        <View
          style={[
            MyStyle.flexrow,
            MyStyle.alignItemCenter,
            MyStyle.justifyContentSpaceBetween,
            {marginHorizontal: responsiveHorizontal(14)},
          ]}>
          <Text style={[MyStyle.fontSize12, MyStyle.fontWeight400]}>
            Total Bill
          </Text>
          <Text style={[MyStyle.fontSize12, MyStyle.fontWeight400]}>Rs200</Text>
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
            style={[MyStyle.fontSize15, MyStyle.fontWeight400, {color: '#FF0000'}]}>
            Paid
          </Text>
        </View>

        <View
          style={[
            {
              backgroundColor: '#4BABCA',
              width: responsiveHorizontal(84),
              marginHorizontal: responsiveHorizontal(14),
              alignSelf: 'flex-end',
            },
            MyStyle.borderRadius10,
            MyStyle.marginRight18,
            MyStyle.alignItemCenter,
            MyStyle.justifyContentCenter,
            MyStyle.marginTop4,
          ]}>
          <Text
            style={[MyStyle.fontSize15, MyStyle.fontWeight400, {color: '#FFFFFF'}]}>
            Preparing
          </Text>
        </View>

        <View
          style={[
            MyStyle.flexrow,
            MyStyle.borderWidth1,
            MyStyle.alignItemCenter,
            MyStyle.borderRadius10,
            MyStyle.marginTop16,
            MyStyle.marginLeft18,
            {height: responsiveVertical(40)},
          ]}>
          <Image
            source={require('../assets/icons/ridding.png')}
            style={[
              {
                width: responsiveHorizontal(50),
                height: responsiveVertical(42),
              },
            ]}
          />

          <Text
            style={[
              MyStyle.fontSize14,
              MyStyle.fontWeight500,
              {marginHorizontal: responsiveHorizontal(14)},
            ]}>
            Assigning nearby riders shortly.
          </Text>
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
              {backgroundColor: '#E69343'},
            ]}>
            <Text
              style={[MyStyle.fontSize20, MyStyle.fontWeight500, MyStyle.colorWhite]}>
              Order Ready (15:30)
            </Text>
          </TouchableOpacity>
        </View>
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
            {marginHorizontal: responsiveHorizontal(14)},
          ]}>
          <Text
            style={[MyStyle.fontSize15, MyStyle.fontWeight700, {color: '#0093FE'}]}>
            10th order by Vishal Chauhan
          </Text>
          <Text style={[MyStyle.fontSize15, MyStyle.fontWeight700]}>1:00 PM</Text>
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
                MyStyle.marginRight18,
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
                MyStyle.fontSize15,
                MyStyle.fontWeight700,
                MyStyle.color000000,
                MyStyle.marginRight9,
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
                MyStyle.marginRight18,
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
                MyStyle.fontSize15,
                MyStyle.fontWeight700,
                MyStyle.color000000,
                MyStyle.marginRight9,
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
            MyStyle.borderWidth1,
          ]}
        />
        <View
          style={[
            MyStyle.flexrow,
            MyStyle.alignItemCenter,
            MyStyle.justifyContentSpaceBetween,
            {marginHorizontal: responsiveHorizontal(14)},
          ]}>
          <Text style={[MyStyle.fontSize12, MyStyle.fontWeight400]}>
            Total Bill
          </Text>
          <Text style={[MyStyle.fontSize12, MyStyle.fontWeight400]}>Rs200</Text>
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
            style={[MyStyle.fontSize15, MyStyle.fontWeight400, {color: '#FF0000'}]}>
            Paid
          </Text>
        </View>

        <View
          style={[
            {
              backgroundColor: '#4BABCA',
              width: responsiveHorizontal(84),
              marginHorizontal: responsiveHorizontal(14),
              alignSelf: 'flex-end',
            },
            MyStyle.borderRadius10,
            MyStyle.marginRight18,
            MyStyle.alignItemCenter,
            MyStyle.justifyContentCenter,
            MyStyle.marginTop4,
          ]}>
          <Text
            style={[MyStyle.fontSize15, MyStyle.fontWeight400, {color: '#FFFFFF'}]}>
            Preparing
          </Text>
        </View>

        <View
          style={[
            // MyStyle.flexrow,
            MyStyle.borderWidth1,
            MyStyle.alignItemCenter,
            MyStyle.borderRadius10,
            MyStyle.marginTop16,
          ]}>
          <View style={[MyStyle.flexrow, MyStyle.marginVertical9]}>
            <View
              style={[
                {
                  width: responsiveHorizontal(50),
                  height: responsiveVertical(50),
                  backgroundColor: 'rgba(217, 217, 217, 1)',
                },
                MyStyle.borderWidth1,
                MyStyle.alignItemCenter,
                MyStyle.justifyContentCenter,
                MyStyle.borderRadius50,
              ]}>
              <Text style={[{fontSize: 11}]}>DRIVER PHOTO</Text>
            </View>
            <Text
              style={[
                MyStyle.fontSize14,
                MyStyle.fontWeight500,
                {marginHorizontal: responsiveHorizontal(14)},
              ]}>
              Suraj is on the way
            </Text>
            <TouchableOpacity
              style={[
                {
                  width: responsiveHorizontal(20),
                  height: responsiveVertical(20),
                },
                MyStyle.marginRight18,
              ]}>
              <Image
                source={require('../assets/icons/call.png')}
                style={[
                  {
                    width: responsiveHorizontal(20),
                    height: responsiveVertical(20),
                    marginLeft: responsiveHorizontal(20),
                  },
                  MyStyle.marginTop8,
                ]}
              />
            </TouchableOpacity>
          </View>
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
              {backgroundColor: '#E69343'},
            ]}>
            <Text
              style={[MyStyle.fontSize20, MyStyle.fontWeight500, MyStyle.colorWhite]}>
              Order Ready (15:30)
            </Text>
          </TouchableOpacity>
        </View>
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
            {marginHorizontal: responsiveHorizontal(14)},
          ]}>
          <Text
            style={[MyStyle.fontSize15, MyStyle.fontWeight700, {color: '#0093FE'}]}>
            10th order by Vishal Chauhan
          </Text>
          <Text style={[MyStyle.fontSize15, MyStyle.fontWeight700]}>1:00 PM</Text>
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
                MyStyle.marginRight18,
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
                MyStyle.fontSize15,
                MyStyle.fontWeight700,
                MyStyle.color000000,
                MyStyle.marginRight9,
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
                MyStyle.marginRight18,
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
                MyStyle.fontSize15,
                MyStyle.fontWeight700,
                MyStyle.color000000,
                MyStyle.marginRight9,
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
            MyStyle.borderWidth1,
          ]}
        />
        <View
          style={[
            MyStyle.flexrow,
            MyStyle.alignItemCenter,
            MyStyle.justifyContentSpaceBetween,
            {marginHorizontal: responsiveHorizontal(14)},
          ]}>
          <Text style={[MyStyle.fontSize12, MyStyle.fontWeight400]}>
            Total Bill
          </Text>
          <Text style={[MyStyle.fontSize12, MyStyle.fontWeight400]}>Rs200</Text>
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
            style={[MyStyle.fontSize15, MyStyle.fontWeight400, {color: '#FF0000'}]}>
            Paid
          </Text>
        </View>

        <View
          style={[
            {
              backgroundColor: '#4BABCA',
              width: responsiveHorizontal(84),
              marginHorizontal: responsiveHorizontal(14),
              alignSelf: 'flex-end',
            },
            MyStyle.borderRadius10,
            MyStyle.marginRight18,
            MyStyle.alignItemCenter,
            MyStyle.justifyContentCenter,
            //MyStyle.marginTop4,
          ]}>
          <Text
            style={[MyStyle.fontSize15, MyStyle.fontWeight400, {color: '#FFFFFF'}]}>
            Preparing
          </Text>
        </View>

        <View
          style={[
            MyStyle.flexrow,
            MyStyle.borderWidth1,
            MyStyle.alignItemCenter,
            MyStyle.borderRadius10,
            MyStyle.marginTop16,
            MyStyle.marginLeft18,
            {height: responsiveVertical(40)},
          ]}>
          <Image
            source={require('../assets/icons/ridding.png')}
            style={[
              {
                width: responsiveHorizontal(50),
                height: responsiveVertical(42),
              },
            ]}
          />

          <Text
            style={[
              MyStyle.fontSize14,
              MyStyle.fontWeight500,
              {marginHorizontal: responsiveHorizontal(14)},
            ]}>
            Assigning nearby riders shortly.
          </Text>
          <TouchableOpacity
            style={[
              {
                width: responsiveHorizontal(20),
                height: responsiveVertical(20),
              },
              MyStyle.marginRight18,
            ]}></TouchableOpacity>
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
              {backgroundColor: '#E69343'},
            ]}>
            <Text
              style={[MyStyle.fontSize20, MyStyle.fontWeight500, MyStyle.colorWhite]}>
              Order Ready (15:30)
            </Text>
          </TouchableOpacity>
        </View>
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
            {marginHorizontal: responsiveHorizontal(14)},
          ]}>
          <Text
            style={[MyStyle.fontSize15, MyStyle.fontWeight700, {color: '#0093FE'}]}>
            10th order by Vishal Chauhan
          </Text>
          <Text style={[MyStyle.fontSize15, MyStyle.fontWeight700]}>1:00 PM</Text>
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
                MyStyle.marginRight18,
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
                MyStyle.fontSize15,
                MyStyle.fontWeight700,
                MyStyle.color000000,
                MyStyle.marginRight9,
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
                MyStyle.marginRight18,
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
                MyStyle.fontSize15,
                MyStyle.fontWeight700,
                MyStyle.color000000,
                MyStyle.marginRight9,
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
            MyStyle.borderWidth1,
          ]}
        />
        <View
          style={[
            MyStyle.flexrow,
            MyStyle.alignItemCenter,
            MyStyle.justifyContentSpaceBetween,
            {marginHorizontal: responsiveHorizontal(14)},
          ]}>
          <Text style={[MyStyle.fontSize12, MyStyle.fontWeight400]}>
            Total Bill
          </Text>
          <Text style={[MyStyle.fontSize12, MyStyle.fontWeight400]}>Rs200</Text>
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
            style={[MyStyle.fontSize15, MyStyle.fontWeight400, {color: '#FF0000'}]}>
            Paid
          </Text>
        </View>

        <View
          style={[
            {
              backgroundColor: '#4BABCA',
              width: responsiveHorizontal(84),
              marginHorizontal: responsiveHorizontal(14),
              alignSelf: 'flex-end',
            },
            MyStyle.borderRadius10,
            MyStyle.marginRight18,
            MyStyle.alignItemCenter,
            MyStyle.justifyContentCenter,
            //MyStyle.marginTop4,
          ]}>
          <Text
            style={[MyStyle.fontSize15, MyStyle.fontWeight400, {color: '#FFFFFF'}]}>
            READY
          </Text>
        </View>

        <View
          style={[
            // MyStyle.flexrow,
            MyStyle.borderWidth1,
            MyStyle.alignItemCenter,
            MyStyle.borderRadius10,
            MyStyle.marginTop16,
          ]}>
          <View style={[MyStyle.flexrow, MyStyle.marginVertical9]}>
            <View
              style={[
                {
                  width: responsiveHorizontal(50),
                  height: responsiveVertical(50),
                  backgroundColor: 'rgba(217, 217, 217, 1)',
                },
                MyStyle.borderWidth1,
                MyStyle.alignItemCenter,
                MyStyle.justifyContentCenter,
                MyStyle.borderRadius50,
              ]}>
              <Text style={[{fontSize: 11}]}>DRIVER PHOTO</Text>
            </View>
            <Text
              style={[
                MyStyle.fontSize14,
                MyStyle.fontWeight500,
                {marginHorizontal: responsiveHorizontal(14)},
              ]}>
              Suraj is on the way
            </Text>
            <TouchableOpacity
              style={[
                {
                  width: responsiveHorizontal(20),
                  height: responsiveVertical(20),
                },
                MyStyle.marginRight18,
              ]}>
              <Image
                source={require('../assets/icons/call.png')}
                style={[
                  {
                    width: responsiveHorizontal(20),
                    height: responsiveVertical(20),
                    marginLeft: responsiveHorizontal(20),
                  },
                  MyStyle.marginTop8,
                ]}
              />
            </TouchableOpacity>
          </View>
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
              {backgroundColor: '#E69343'},
            ]}>
            <Text
              style={[MyStyle.fontSize20, MyStyle.fontWeight500, MyStyle.colorWhite]}>
              Order Ready (15:30)
            </Text>
          </TouchableOpacity>
        </View>
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
            {marginHorizontal: responsiveHorizontal(14)},
          ]}>
          <Text
            style={[MyStyle.fontSize15, MyStyle.fontWeight700, {color: '#0093FE'}]}>
            10th order by Vishal Chauhan
          </Text>
          <Text style={[MyStyle.fontSize15, MyStyle.fontWeight700]}>1:00 PM</Text>
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
                MyStyle.marginRight18,
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
                MyStyle.fontSize15,
                MyStyle.fontWeight700,
                MyStyle.color000000,
                MyStyle.marginRight9,
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
                MyStyle.marginRight18,
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
                MyStyle.fontSize15,
                MyStyle.fontWeight700,
                MyStyle.color000000,
                MyStyle.marginRight9,
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
            MyStyle.borderWidth1,
          ]}
        />
        <View
          style={[
            MyStyle.flexrow,
            MyStyle.alignItemCenter,
            MyStyle.justifyContentSpaceBetween,
            {marginHorizontal: responsiveHorizontal(14)},
          ]}>
          <Text style={[MyStyle.fontSize12, MyStyle.fontWeight400]}>
            Total Bill
          </Text>
          <Text style={[MyStyle.fontSize12, MyStyle.fontWeight400]}>Rs200</Text>
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
            style={[MyStyle.fontSize15, MyStyle.fontWeight400, {color: '#FF0000'}]}>
            Paid
          </Text>
        </View>

        <View
          style={[
            {
              backgroundColor: '#4BABCA',
              width: responsiveHorizontal(84),
              marginHorizontal: responsiveHorizontal(14),
              alignSelf: 'flex-end',
            },
            MyStyle.borderRadius10,
            MyStyle.marginRight18,
            MyStyle.alignItemCenter,
            MyStyle.justifyContentCenter,
            //MyStyle.marginTop4,
          ]}>
          <Text
            style={[MyStyle.fontSize15, MyStyle.fontWeight400, {color: '#FFFFFF'}]}>
            PICKED UP
          </Text>
        </View>

        <View
          style={[
            // MyStyle.flexrow,
            MyStyle.borderWidth1,
            MyStyle.alignItemCenter,
            MyStyle.borderRadius10,
            MyStyle.marginTop16,
            MyStyle.paddingHorizontal6,
          ]}>
          <View>
            <Text style={[MyStyle.fontSize13, MyStyle.fontWeight700]}>
              Order was prepared in time
            </Text>
            <Text style={[MyStyle.fontSize13, MyStyle.fontWeight400]}>
              Timely delivery to the customer
            </Text>
          </View>
          <Divider
            style={{marginVertical: 8, borderWidth: 0.5, width: '100%'}}
          />
          <View style={[MyStyle.flexrow]}>
            <View
              style={[
                {
                  width: responsiveHorizontal(50),
                  height: responsiveVertical(50),
                  backgroundColor: 'rgba(217, 217, 217, 1)',
                },
                MyStyle.borderWidth1,
                MyStyle.alignItemCenter,
                MyStyle.justifyContentCenter,
                MyStyle.borderRadius50,
              ]}>
              <Text style={[{fontSize: 11}]}>DRIVER PHOTO</Text>
            </View>
            <Text
              style={[
                MyStyle.fontSize14,
                MyStyle.fontWeight500,
                {marginHorizontal: responsiveHorizontal(14)},
              ]}>
              Suraj picked up the food
            </Text>
            <TouchableOpacity
              style={[
                {
                  width: responsiveHorizontal(20),
                  height: responsiveVertical(20),
                },
                MyStyle.marginRight18,
              ]}>
              <Image
                source={require('../assets/icons/call.png')}
                style={[
                  {
                    width: responsiveHorizontal(20),
                    height: responsiveVertical(20),
                    marginLeft: responsiveHorizontal(20),
                  },
                  MyStyle.marginTop8,
                ]}
              />
            </TouchableOpacity>
          </View>
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
              {backgroundColor: '#E69343'},
            ]}>
            <Text
              style={[MyStyle.fontSize20, MyStyle.fontWeight500, MyStyle.colorWhite]}>
              Order Ready (15:30)
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default NewOrder;
