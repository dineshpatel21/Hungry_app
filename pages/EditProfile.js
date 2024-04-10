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
import {responsiveVertical, responsiveHorizontal, MyStyle} from '../style';
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
          style={[
            MyStyle.icon111,
            MyStyle.borderWidth1,
            MyStyle.alignItemCenter,
            MyStyle.alignSelfCenter,
            MyStyle.borderColor00025,
            MyStyle.backcolor243233,
            MyStyle.positionRelative,
            MyStyle.borderRadius111,
            MyStyle.marginTop28,
            MyStyle.justifyContentCenter,
          ]}>
          <Image
            source={require('../assets/icons/user.png')}
            style={[MyStyle.icon58, MyStyle.marginLeft6]}
          />
          <TouchableOpacity
            style={[
              MyStyle.positionAbsolute,
              MyStyle.backgroundColorFFFFFF,
              MyStyle.right10,
              MyStyle.borderRadius12,
              MyStyle.padding5,
              MyStyle.bottom0,
              MyStyle.elevation10,
            ]}>
            <Image
              source={require('../assets/icons/edit.png')}
              style={[MyStyle.icon12]}
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
              MyStyle.borderRadius10,
              MyStyle.width245,
              MyStyle.borderRadius10,
              MyStyle.bottom55,
              MyStyle.marginRight18,
              MyStyle.height116,
              MyStyle.zIndex100,
            ]}>
            <View
              style={[MyStyle.paddingVertical17, MyStyle.paddingHorizontal14]}>
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
          <Text style={[MyStyle.fontSize17, MyStyle.fontWeight500]}>
            {gender}
          </Text>
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
              style={[MyStyle.width2518]}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {!isKeyboardVisible && (
        <Button
          mode="outlined"
          style={[
            MyStyle.alignSelfCenter,
            MyStyle.positionAbsolute,
            MyStyle.width273,
            MyStyle.bottom30,
          ]}
          onPress={() => console.log('Pressed')}>
          Done
        </Button>
      )}
    </View>
  );
};

export default EditProfile;
