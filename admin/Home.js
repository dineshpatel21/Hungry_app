import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Keyboard,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import MenuManagement from '../components/MenuManagement';
import {
  MyStyle,
  responsiveHorizontal,
  responsiveVertical,
  vw,
  vh,
} from '../style';
import {Divider} from 'react-native-paper';
import Category from '../components/Category';
import SwitchComponent from '../components/Switch';

const Home = ({navigation}) => {
  const [isOnline, setIsOnline] = useState(false);
  return (
    <View style={[MyStyle.flex1, MyStyle.backgroundColorFFFFFF]}>
      {/* <LanguageSelect/> */}
      <View
        style={[
          MyStyle.marginTop13,
          MyStyle.flexrow,
          MyStyle.justifyContentSpaceBetween,
          MyStyle.marginHorizontal20,
          MyStyle.flex01,
        ]}>
        <View style={[MyStyle.flexrow, MyStyle.alignItemCenter]}>
          <Image
            source={require('../assets/icons/user.png')}
            style={[MyStyle.icon35, MyStyle.marginRight3]}
          />
          <View>
            <Text style={[MyStyle.fontSize20, MyStyle.fontWeight700]}>
              Shop name
            </Text>
            <Text style={[MyStyle.fontSize15, MyStyle.fontWeight400]}>
              Address
            </Text>
          </View>
        </View>
        <SwitchComponent />
      </View>

      <View style={{flex: 0.8}}>
        <View
          style={[
            MyStyle.borderWidth1,
            MyStyle.alignSelfCenter,
            MyStyle.marginTop8,
            MyStyle.borderRadius10,
            MyStyle.borderColorA61A1,
            MyStyle.alignItemCenter,
            MyStyle.justifyContentCenter,
            MyStyle.backgroundColorD9D9D9,
            MyStyle.width344,
            MyStyle.height156,
          ]}>
          <Text style={[MyStyle.fontSize20, MyStyle.fontWeight700]}>
            shop photo or logo
          </Text>
        </View>
        <View
          style={[
            MyStyle.marginBottom22,
            MyStyle.marginTop10,
            MyStyle.marginHorizontal10,
          ]}>
          <Category />
        </View>

        <Image
          source={require('../assets/icons/HomePage.png')}
          style={[MyStyle.icon180, MyStyle.alignSelfCenter]}
        />

        <Text
          style={[
            MyStyle.alignSelfCenter,
            MyStyle.fontSize15,
            MyStyle.fontWeight700,
            MyStyle.color1F1F1F,
          ]}>
          You are {isOnline ? 'online' : 'offline'}.
        </Text>
        <Text
          style={[
            MyStyle.alignSelfCenter,
            MyStyle.fontSize13,
            MyStyle.fontWeight500,
          ]}>
          Waiting for new orders.
        </Text>
      </View>

      <View
        style={[
          MyStyle.flexrow,
          MyStyle.positionAbsolute,
          MyStyle.alignItemCenter,
          MyStyle.alignSelfCenter,
          MyStyle.justifyContentSpaceBetween,
          MyStyle.paddingHorizontal20,
          MyStyle.paddingVertical7,
          MyStyle.borderRadius10,
          MyStyle.backcolor32B43F,
          MyStyle.bottom13,
          MyStyle.width298,
        ]}>
        <Text
          style={[
            MyStyle.fontSize17,
            MyStyle.colorWhite,
            MyStyle.marginRight9,
          ]}>
          1 New order alert
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('NewOrder');
          }}
          style={[
            MyStyle.borderRadius10,
            MyStyle.marginRight18,
            MyStyle.backcolor3C8B44,
            MyStyle.padding5,
          ]}>
          <Text
            style={[
              MyStyle.fontSize17,
              MyStyle.fontWeight400,
              MyStyle.colorWhite,
            ]}>
            View
          </Text>
        </TouchableOpacity>
        <Image
          source={require('../assets/icons/ghanta.png')}
          style={[MyStyle.icon35]}
        />
      </View>

    
    </View>
  );
};

export default Home;
