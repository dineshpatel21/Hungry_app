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
import {MyStyle,responsiveHorizontal,responsiveVertical,vw,vh} from '../style';
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
          {flex: 0.1},
        ]}>
        <View style={[MyStyle.flexrow, MyStyle.alignItemCenter]}>
          <Image
            source={require('../assets/icons/user.png')}
            style={[
              {
                width: responsiveHorizontal(35),
                height: responsiveVertical(35),
                marginRight: responsiveHorizontal(3),
              },
            ]}
          />
          <View>
            <Text style={[MyStyle.fontSize20, MyStyle.fontWeight700]}>
              Shop name
            </Text>
            <Text style={[MyStyle.fontSize15, MyStyle.fontWeight400]}>Address</Text>
          </View>
        </View>
        <SwitchComponent />
      </View>

      <View style={{flex: 0.8}}>
        <View
          style={[
            {width: responsiveHorizontal(344), height: responsiveVertical(156)},
            MyStyle.borderWidth1,
            MyStyle.alignSelfCenter,
            MyStyle.marginTop8,
            MyStyle.borderRadius10,
            MyStyle.borderColorA61A1,
            MyStyle.alignItemCenter,
            MyStyle.justifyContentCenter,
            {backgroundColor: '#D9D9D9'},
          ]}>
          <Text style={[MyStyle.fontSize20, MyStyle.fontWeight700]}>
            shop photo or logo
          </Text>
        </View>
        <View
          style={{
            marginBottom: responsiveVertical(22),
            marginHorizontal: responsiveHorizontal(10),
            marginTop: responsiveVertical(10),
          }}>
          <Category />
        </View>

        <Image
          source={require('../assets/icons/HomePage.png')}
          style={[
            {
              width: responsiveHorizontal(280),
              height: responsiveVertical(200),
            },
            MyStyle.alignSelfCenter,
          ]}
        />

        <Text
          style={[
            MyStyle.alignSelfCenter,
            MyStyle.fontSize15,
            MyStyle.fontWeight700,
            {color: '#1F1F1F'},
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
          {
            bottom: responsiveVertical(80),
            backgroundColor: '#32B43F',
            width: responsiveHorizontal(298),
          },
        ]}>
        <Text
          style={[MyStyle.fontSize17, MyStyle.colorWhite, MyStyle.marginRight9]}>
          1 New order alert
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('NewOrder');
          }}
          style={[
            {backgroundColor: '#3C8B44', padding: 5},
            MyStyle.borderRadius10,
            MyStyle.marginRight18,
          ]}>
          <Text
            style={[MyStyle.fontSize17, MyStyle.fontWeight400, MyStyle.colorWhite]}>
            View
          </Text>
        </TouchableOpacity>
        <Image
          source={require('../assets/icons/ghanta.png')}
          style={[
            {
              width: responsiveHorizontal(35),
              height: responsiveVertical(35),
            },
          ]}
        />
      </View>

      <View
        style={[
          MyStyle.flexrow,
          MyStyle.borderRadius10,
          MyStyle.alignItemCenter,
          MyStyle.justifyContentCenter,
          MyStyle.marginHorizontal20,
          MyStyle.backgroundColorEE9846,
          {flex: 0.1},
        ]}>
       
       
        <TouchableOpacity
          style={[MyStyle.flexrow]}>
          <Image
            source={require('../assets/icons/analyzing.png')}
            style={[
              {
                width: responsiveHorizontal(31),
                height: responsiveVertical(31),
                marginRight: responsiveHorizontal(3),
              },
            ]}
          />

          <View style={[MyStyle.justifyContentCenter]}>
            <Text
              style={[
                MyStyle.fontSize15,
                MyStyle.fontWeight500,
                MyStyle.colorWhite,
              ]}>
              Insight
            </Text>
            <Text style={[{color: '#3C8B44'}, MyStyle.fontSize17]}>
              +1200 Orders
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
