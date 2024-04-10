import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Keyboard,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import MenuManagement from '../components/MenuManagement';
import {
  responsiveVertical,
  responsiveHorizontal,
  responsiveFonts,
  MyStyle,
} from '../style';
import {RadioButton} from 'react-native-paper';
import SwitchComponent from '../components/Switch';
const AddNewDish = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [category, setCategory] = useState('');
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [categoryOptions, setCategoryOptions] = useState([
    {id: 1, category: 'Category 1'},
    {id: 2, category: 'Category 2'},
    {id: 3, category: 'Category 3'},
    {id: 1, category: 'Category 1'},
    {id: 2, category: 'Category 2'},
    {id: 3, category: 'Category 3'},
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
    <>
      <ScrollView style={[MyStyle.flex1]} keyboardShouldPersistTaps="always">
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
          style={[MyStyle.marginBottom15, MyStyle.marginTop8, MyStyle.height2]}
        />
        <View style={[MyStyle.marginHorizontal20]}>
          <Text
            style={[
              MyStyle.welcomebtntext,
              MyStyle.color000000,
              MyStyle.fontWeight700,
              MyStyle.fontSize20,
            ]}>
            + Add new dish
          </Text>
        </View>

        <View
          style={[
            MyStyle.dish_name,
            MyStyle.borderWidth1,
            MyStyle.alignSelfCenter,
            MyStyle.marginTop30,
            MyStyle.borderRadius10,
            MyStyle.borderColorA61A1,
          ]}>
          <View style={[MyStyle.marginHorizontal20, MyStyle.marginTop18]}>
            <TextInput
              placeholder="Dish name *"
              textDecorationLine="Underline"
              style={[
                MyStyle.welcomebtntext,
                MyStyle.color000000,
                MyStyle.fontWeight400,
                MyStyle.fontSize15,
              ]}
            />
          </View>

          <View style={[MyStyle.marginHorizontal20]}>
            <TextInput
              placeholder="Dish quantity *"
              textDecorationLine="Underline"
              style={[
                MyStyle.welcomebtntext,
                MyStyle.color000000,
                MyStyle.fontWeight400,
                MyStyle.fontSize15,
              ]}
            />
          </View>

          <View style={[MyStyle.marginHorizontal20]}>
            <TextInput
              placeholder="Dish quantity *"
              textDecorationLine="Underline"
              style={[
                MyStyle.welcomebtntext,
                MyStyle.color000000,
                MyStyle.fontWeight400,
                MyStyle.fontSize15,
              ]}
            />
          </View>

          <View
            style={[
              MyStyle.marginHorizontal20,
              MyStyle.flexrow,
              MyStyle.alignItemCenter,
            ]}>
            <Text
              style={[
                MyStyle.fontWeight400,
                MyStyle.fontSize15,
                MyStyle.marginRight18,
              ]}>
              Select *
            </Text>

            <RadioButton
              value="first"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')}
              style={[MyStyle.marginRight9]}
            />
            <RadioButton
              value="second"
              status={checked === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('second')}
            />
          </View>

          <View
            style={[
              MyStyle.flexrow,
              MyStyle.borderRadius10,
              MyStyle.justifyContentSpaceBetween,
              MyStyle.borderWidth1,
              MyStyle.marginTop16,
              MyStyle.paddingHorizontal6,
              MyStyle.marginHorizontal20,
              MyStyle.paddingVertical7,
              MyStyle.alignItemCenter,
            ]}>
            <Text style={[MyStyle.fontSize17, MyStyle.fontWeight500]}>
              {category}
            </Text>
            <TouchableOpacity
              onPress={() => {
                setIsDropDownOpen(!isDropDownOpen);
              }}>
              <Image
                source={
                  !isDropDownOpen
                    ? require('../assets/icons/bottom_arrow.png')
                    : require('../assets/icons/arrowhead-up.png')
                }
                style={[MyStyle.icon24]}
              />
            </TouchableOpacity>
          </View>

          {isDropDownOpen && (
            <View
              style={[
                MyStyle.borderWidth1,
                MyStyle.positionAbsolute,
                MyStyle.backgroundColorFFFFFF,
                MyStyle.marginHorizontal20,
                MyStyle.alignSelfCenter,
                MyStyle.zIndex100,
                MyStyle.borderRadius10,
                MyStyle.width250,
                MyStyle.height120,
                MyStyle.bottom34,
              ]}>
              <ScrollView
                nestedScrollEnabled
                style={[MyStyle.paddingVertical7, MyStyle.paddingHorizontal14]}>
                {categoryOptions.map((item, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => {
                        setCategory(item.category);
                        setIsDropDownOpen(false);
                      }}>
                      <Text
                        style={[
                          MyStyle.fontSize17,
                          MyStyle.color000000,
                          MyStyle.marginBottom8,
                        ]}>
                        {item.category}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
          )}

          <View style={[MyStyle.marginHorizontal20, MyStyle.marginTop13]}>
            <Text style={[MyStyle.fontWeight400, MyStyle.fontSize15]}>
              Upload dish image*
            </Text>
          </View>

          <TouchableOpacity
            style={[
              MyStyle.alignSelfCenter,
              MyStyle.marginTop18,
              MyStyle.justifyContentCenter,
              MyStyle.alignItemCenter,
              MyStyle.borderRadius10,
              MyStyle.backD9D9D9,
              MyStyle.select_img,
            ]}>
            <Image
              source={require('../assets/icons/selectimage.png')}
              style={[MyStyle.icon30]}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {!isKeyboardVisible && (
        <View
          style={[
            MyStyle.positionAbsolute,
            MyStyle.width100,
            MyStyle.justifyContentCenter,
            MyStyle.bottom34,
            MyStyle.flex01,
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
                MyStyle.fontSize30,
              ]}>
              Add
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default AddNewDish;
