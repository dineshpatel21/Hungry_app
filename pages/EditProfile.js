import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  Keyboard,
} from 'react-native';
import  {
  responsiveVertical,
  responsiveHorizontal,
  MyStyle,
} from '../style';
import {TextInput, Button} from 'react-native-paper';
const EditProfile = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [gender, setGender] = useState('Gender');
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [genderOptions, setGenderOptions] = useState([
    {id: 1, gender: 'Male'},
    {id: 2, gender: 'Female'},
    {id: 3, gender: 'Other'},
  ]);

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

  const checkkeyboard = () => {
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

    //   return () => {
    //     keyboardDidHideListener.remove();
    //     keyboardDidShowListener.remove();
    //   };
  };
  return (
    <View style={[MyStyle.flex1, MyStyle.backgroundColorFFFFFF]}>
      <ScrollView style={[MyStyle.flex1, MyStyle.paddingHorizontal20]}>
        <View
          style={{
            alignSelf: 'center',
            width: responsiveHorizontal(111),
            height: responsiveHorizontal(111),
            borderWidth: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 28,
            borderRadius: responsiveHorizontal(111),
            position: 'relative',
            backgroundColor: 'rgba(243, 233, 222, 1)',
            borderColor: 'rgba(0, 0, 0, 0.25)',
          }}>
          <Image
            source={require('../assets/icons/user.png')}
            style={{
              width: responsiveHorizontal(58),
              height: responsiveHorizontal(58),
              marginLeft: 6,
            }}
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              bottom: 0,
              right: 10,
              // borderWidth: 1,
              padding: 5,
              borderRadius: 12,
              backgroundColor: 'white',
              elevation: 10,
            }}>
            <Image
              source={require('../assets/icons/edit.png')}
              style={{
                width: responsiveHorizontal(12),
                height: responsiveHorizontal(12),
              }}
            />
          </TouchableOpacity>
        </View>
        <TextInput
          label="Name"
          mode="outlined"
          style={[MyStyle.backgroundColorFFFFFF, MyStyle.marginTop30]}
          // value={text}
          // onChangeText={text => setText(text)}
        />
        <TextInput
          label="Email"
          mode="outlined"
          style={[MyStyle.backgroundColorFFFFFF, MyStyle.marginTop30]}
          // value={text}
          // onChangeText={text => setText(text)}
        />
        <TextInput
          label="Mobile"
          mode="outlined"
          style={[MyStyle.backgroundColorFFFFFF, MyStyle.marginTop30]}
          // value={text}
          // onChangeText={text => setText(text)}
        />
        <TextInput
          placeholder="dd/mm/yyyy"
          mode="outlined"
          style={[
            MyStyle.backgroundColorFFFFFF,
            MyStyle.marginTop30,
            MyStyle.borderRadius10,
          ]}
          // value={text}
          // onChangeText={text => setText(text)}
        />
        {isDropDownOpen && (
          <View
            style={[
              MyStyle.borderWidth1,
              MyStyle.positionAbsolute,
              MyStyle.backgroundColorFFFFFF,
              {
                width: responsiveHorizontal(245),
                height: responsiveVertical(116),
                borderRadius: 10,
                right: 18,
                bottom: responsiveVertical(55),
                zIndex: 100,
              },
            ]}>
            <View style={[MyStyle.paddingVertical17, MyStyle.paddingHorizontal14]}>
              {genderOptions.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      setGender(item.gender);
                      setIsDropDownOpen(false);
                    }}>
                    <Text
                      style={[
                        MyStyle.fontSize17,
                        MyStyle.color000000,
                        MyStyle.marginBottom8,
                      ]}>
                      {item.gender}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        )}

        <View
          style={[
            MyStyle.flexrow,
            MyStyle.borderRadius10,
            MyStyle.justifyContentSpaceBetween,
            MyStyle.borderWidth1,
            MyStyle.marginTop30,
            MyStyle.paddingVertical17,
            MyStyle.paddingHorizontal18,
          ]}>
          <Text style={[MyStyle.fontSize17, MyStyle.fontWeight500]}>{gender}</Text>
          <TouchableOpacity
            onPress={() => {
              setIsDropDownOpen(!isDropDownOpen);
            }}>
            <Image
              source={
                !isDropDownOpen
                  ? require('../assets/icons/bottom.png')
                  : require('../assets/icons/up.png')
              }
              style={{
                width: responsiveHorizontal(25),
                height: responsiveHorizontal(18),
              }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {!isKeyboardVisible && (
        <Button
          mode="outlined"
          style={{
            width: responsiveHorizontal(273),
            position: 'absolute',
            bottom: 30,
            // height: responsiveVertical(55),
            alignSelf: 'center',
          }}
          onPress={() => console.log('Pressed')}>
          Done
        </Button>
      )}
    </View>
  );
};

export default EditProfile;
