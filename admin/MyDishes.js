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

 
  return (
    <View style={[MyStyle.flex1]}>
      <View style={[MyStyle.flex09, MyStyle.backgroundColorFFFFFF]}>
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

              MyStyle.height2,
            ]}
          />
          <Searchbar
            placeholder="Search The Dishes"
            style={[
              MyStyle.marginBottom10,
              MyStyle.alignItemCenter,
              MyStyle.marginTop13,
              MyStyle.marginHorizontal20,
              MyStyle.borderColor000022,
            ]}
            icon={({color, size}) => (
              <Image
                source={require('../assets/icons/search.png')}
                style={[MyStyle.icon20, MyStyle.marginRight3]}
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
                    MyStyle.borderColorEEA967,
                  ]}>
                  <TouchableOpacity
                    style={[
                      MyStyle.positionAbsolute,
                      MyStyle.icon20,
                      MyStyle.right10,
                      MyStyle.top105,
                    ]}>
                    <Image
                      source={require('../assets/icons/trash.png')}
                      style={[MyStyle.icon20]}
                    />
                  </TouchableOpacity>
                  <View style={[MyStyle.flexrow, MyStyle.alignItemCenter]}>
                    <Image
                      source={require('../assets/icons/categoryImage.png')}
                      style={[
                       MyStyle.width125,MyStyle.height108,
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
                          MyStyle.marginTop4,
                          MyStyle.alignItemCenter,
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
                            style={[MyStyle.icon20]}
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
                            style={[MyStyle.icon20]}
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
                        MyStyle.marginRight24,MyStyle.backgroundColorD2FFD7
                        
                      ]}>
                      <Text style={[MyStyle.color42833D]}>Dish Available</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[
                        MyStyle.backgroundColor42833D,
                        MyStyle.paddingVertical7,
                        MyStyle.paddingHorizontal6,
                        MyStyle.borderWidth1,
                        MyStyle.borderRadius10,
                        MyStyle.backgroundColorFF37374D,
                      ]}>
                      <Text style={[MyStyle.colorA90303]}>
                        Dish Unavailable
                      </Text>
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
                style={[MyStyle.Search]}
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
            MyStyle.flex01,
            MyStyle.bottom0,
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
