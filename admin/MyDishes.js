import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Keyboard,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {responsiveVertical, responsiveHorizontal, MyStyle} from '../style';
import MenuManagement from '../components/MenuManagement';
import SwitchComponent from '../components/Switch';
import {CategorySearch} from './NewCategory';
import {Divider, Searchbar} from 'react-native-paper';

const MyDishes = ({navigation}) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [category, setCategory] = useState('');
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [dishesOptions, setDishesOptions] = useState([
    {id: 1},
    {id: 2},
    {id: 3},
    // {id: 1},
    // {id: 2},
    // {id: 3},
  ]);
  const [checked, setChecked] = useState('first');

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

  const _renderDishes = ({item, index}) => {
    return (
      <View
        style={[
          MyStyle.marginBottom10,
          MyStyle.borderWidth1,
          MyStyle.paddingVertical7,
          MyStyle.paddingHorizontal6,
          MyStyle.marginHorizontal20,
          MyStyle.borderRadius10,
          {borderColor: '#EE9846'},
        ]}>
        <TouchableOpacity
          style={[
            {
              width: responsiveHorizontal(20),
              height: responsiveVertical(20),
              bottom: responsiveVertical(13),
              right: 10,
              top: 105,
            },
            MyStyle.positionAbsolute,
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
        <View style={[MyStyle.flexrow, MyStyle.alignItemCenter]}>
          <Image
            source={require('../assets/icons/categoryImage.png')}
            style={[
              {
                width: responsiveHorizontal(125),
                height: responsiveHorizontal(108),
              },
              MyStyle.marginRight18,
            ]}
          />

          <View>
            <View>
              <View style={[MyStyle.flexrow, MyStyle.alignItemCenter]}>
                <Text
                  style={[
                    MyStyle.fontSize20,
                    MyStyle.fontWeight700,
                    MyStyle.color000000,
                    MyStyle.marginRight9,
                  ]}>
                  Dishes Name
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
                MyStyle.marginTop4,
              ]}>
              <TouchableOpacity
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
                    width: responsiveHorizontal(15),
                    height: responsiveVertical(15),
                  }}
                />
              </TouchableOpacity>
              <Text
                style={[
                  MyStyle.fontSize25,
                  MyStyle.fontWeight700,
                  MyStyle.marginRight20,
                ]}>
                4
              </Text>
              <TouchableOpacity
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
                    width: responsiveHorizontal(17),
                    height: responsiveHorizontal(17),
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Divider style={[MyStyle.marginBottom8, MyStyle.marginTop8]} />
        <View
          style={[
            MyStyle.flexrow,
            MyStyle.alignItemCenter,
            MyStyle.justifyContentCenter,
          ]}>
          <TouchableOpacity
            style={[
              MyStyle.backgroundColor42833D,
              MyStyle.paddingVertical7,
              MyStyle.paddingHorizontal6,
              MyStyle.borderWidth1,
              MyStyle.borderRadius10,
              MyStyle.marginRight24,
              {backgroundColor: '#D2FFD7'},
            ]}>
            <Text style={{color: '#42833D'}}>Dish Available</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              MyStyle.backgroundColor42833D,
              MyStyle.paddingVertical7,
              MyStyle.paddingHorizontal6,
              MyStyle.borderWidth1,
              MyStyle.borderRadius10,
              {backgroundColor: '#FF37374D'},
            ]}>
            <Text style={{color: '#A90303'}}>Dish Unavailable</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={[MyStyle.flex1]}>
      <View style={[{flex: 0.9}, MyStyle.backgroundColorFFFFFF]}>
        <View>
          <View
            style={[
              MyStyle.marginHorizontal20,
              MyStyle.marginTop13,
              MyStyle.flexrow,
              MyStyle.justifyContentSpaceBetween,
            ]}>
            <MenuManagement />
            <SwitchComponent />
          </View>
          <View
            style={[
              MyStyle.marginBottom15,
              MyStyle.marginTop8,
              MyStyle.borderWidth1,
              //   MyStyle.backgroundColorD9D9D9,
              MyStyle.height2,
            ]}
          />
          <Searchbar
            placeholder="Search The Dishes"
            style={[
              {
                borderColor: 'rgba(0, 0, 0, 0.22)',
              },
              MyStyle.marginBottom10,
              MyStyle.alignItemCenter,
              MyStyle.marginTop13,
              MyStyle.marginHorizontal20,
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
        </View>

        <ScrollView style={[MyStyle.marginBottom29]}>
          {dishesOptions.length != 0 ? (
            dishesOptions.map((item, index) => {
              return (
                <View
                  style={[
                    MyStyle.marginBottom10,
                    MyStyle.borderWidth1,
                    MyStyle.paddingVertical7,
                    MyStyle.paddingHorizontal6,
                    MyStyle.marginHorizontal20,
                    MyStyle.borderRadius10,
                    {borderColor: '#EE9846'},
                  ]}>
                  <TouchableOpacity
                    style={[
                      {
                        width: responsiveHorizontal(20),
                        height: responsiveVertical(20),
                        bottom: responsiveVertical(13),
                        right: 10,
                        top: 105,
                      },
                      MyStyle.positionAbsolute,
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
                  <View style={[MyStyle.flexrow, MyStyle.alignItemCenter]}>
                    <Image
                      source={require('../assets/icons/categoryImage.png')}
                      style={[
                        {
                          width: responsiveHorizontal(125),
                          height: responsiveHorizontal(108),
                        },
                        MyStyle.marginRight18,
                      ]}
                    />

                    <View>
                      <View>
                        <View
                          style={[MyStyle.flexrow, MyStyle.alignItemCenter]}>
                          <Text
                            style={[
                              MyStyle.fontSize20,
                              MyStyle.fontWeight700,
                              MyStyle.color000000,
                              MyStyle.marginRight9,
                            ]}>
                            Dishes Name
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
                          MyStyle.marginTop4,
                        ]}>
                        <TouchableOpacity
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
                              width: responsiveHorizontal(15),
                              height: responsiveVertical(15),
                            }}
                          />
                        </TouchableOpacity>
                        <Text
                          style={[
                            MyStyle.fontSize25,
                            MyStyle.fontWeight700,
                            MyStyle.marginRight20,
                          ]}>
                          4
                        </Text>
                        <TouchableOpacity
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
                              width: responsiveHorizontal(17),
                              height: responsiveHorizontal(17),
                            }}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                  <Divider
                    style={[MyStyle.marginBottom8, MyStyle.marginTop8]}
                  />
                  <View
                    style={[
                      MyStyle.flexrow,
                      MyStyle.alignItemCenter,
                      MyStyle.justifyContentCenter,
                    ]}>
                    <TouchableOpacity
                      style={[
                        MyStyle.backgroundColor42833D,
                        MyStyle.paddingVertical7,
                        MyStyle.paddingHorizontal6,
                        MyStyle.borderWidth1,
                        MyStyle.borderRadius10,
                        MyStyle.marginRight24,
                        {backgroundColor: '#D2FFD7'},
                      ]}>
                      <Text style={{color: '#42833D'}}>Dish Available</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[
                        MyStyle.backgroundColor42833D,
                        MyStyle.paddingVertical7,
                        MyStyle.paddingHorizontal6,
                        MyStyle.borderWidth1,
                        MyStyle.borderRadius10,
                        {backgroundColor: '#FF37374D'},
                      ]}>
                      <Text style={{color: '#A90303'}}>Dish Unavailable</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })
          ) : (
            <View
              style={[MyStyle.alignItemCenter, MyStyle.justifyContentCenter]}>
              <Image
                source={require('../assets/icons/search2.png')}
                style={{
                  width: responsiveHorizontal(216),
                  height: responsiveVertical(232),
                }}
              />
            </View>
          )}
        </ScrollView>
      </View>
      {!isKeyboardVisible && (
        <View
          style={[
            MyStyle.backgroundColorFFFFFF,
            MyStyle.positionAbsolute,
            MyStyle.width100,
            MyStyle.justifyContentCenter,
            {bottom: 0, flex: 0.1},
          ]}>
          <TouchableOpacity
            style={[
              MyStyle.welcomebtn,
              MyStyle.alignItemCenter,
              MyStyle.justifyContentCenter,
              MyStyle.alignSelfCenter,
            ]}
            onPress={() => {
              navigation.navigate('AddNewDish');
            }}>
            <Text
              style={[
                MyStyle.welcomebtntext,
                MyStyle.colorWhite,
                MyStyle.fontWeight400,
                MyStyle.fontSize25,
              ]}>
              + Add new dish
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default MyDishes;
