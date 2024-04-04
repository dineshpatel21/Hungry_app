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
import MyStyle from '../style';
import Colors from '../style';
import Fonts from '../style';
import Style, {
  responsiveVertical,
  responsiveHorizontal,
  responsiveFonts,
} from '../style';
import {Divider} from 'react-native-paper';
import Category from '../components/Category';

const Home = ({navigation}) => {
  const [isOnline, setIsOnline] = useState(false);
  return (
    <View style={[MyStyle.flex1, MyStyle.backgroundColorFFFFFF]}>
      <View
        style={[
          {width: responsiveHorizontal(321), height: responsiveVertical(205)},
          MyStyle.borderWidth1,
          MyStyle.alignSelfCenter,
          MyStyle.marginTop30,
          MyStyle.borderRadius10,
          MyStyle.borderColorA61A1,
          MyStyle.alignItemCenter,
          MyStyle.justifyContentCenter,
          {backgroundColor: '#D9D9D9'},
        ]}>
        <Text style={[Fonts.fontSize20, Fonts.fontWeight700]}>
          shop photo or logo
        </Text>
      </View>
      <View
        style={{
          marginBottom: responsiveVertical(22),
          marginHorizontal: responsiveHorizontal(10),
          marginTop: responsiveVertical(31),
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
          Fonts.fontSize15,
          Fonts.fontWeight700,
          {color:"#1F1F1F"}
        ]}>
        You are { isOnline?"online":"offline"}.
      </Text>
      <Text
        style={[
          MyStyle.alignSelfCenter,
          Fonts.fontSize13,
          Fonts.fontWeight500,
        ]}>
        Waiting for new orders.
      </Text>

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
            bottom: responsiveVertical(100),
            backgroundColor: '#32B43F',
            width: responsiveHorizontal(298),
          },
        ]}>
        <Text
          style={[Fonts.fontSize17, Colors.colorWhite, MyStyle.marginRight9]}>
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
            style={[Fonts.fontSize17, Fonts.fontWeight400, Colors.colorWhite]}>
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
          MyStyle.positionAbsolute,
          MyStyle.flexrow,
          MyStyle.width100,
          MyStyle.borderRadius10,
          MyStyle.alignItemCenter,
          MyStyle.justifyContentSpaceBetween,
          {bottom: 0, height: responsiveVertical(90)},
          {backgroundColor: '#E69343'},
        ]}>
        <TouchableOpacity style={{marginLeft: responsiveHorizontal(67)}}>
          <Image
            source={require('../assets/icons/menu.png')}
            style={[
              {
                width: responsiveHorizontal(31),
                height: responsiveVertical(31),
              },
            ]}
          />
          <Text
            style={[Fonts.fontSize15, Fonts.fontWeight500, Colors.colorWhite]}>
            Home
          </Text>
        </TouchableOpacity>
        <Divider
          horizontalInset={true}
          style={[
            {borderWidth: 0.5, height: '80%', borderColor: '#ffffff'},
            Style.marginHorizontal20,
          ]}
        />
        <TouchableOpacity
          style={[MyStyle.flexrow, {marginRight: responsiveHorizontal(40)}]}>
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
                Fonts.fontSize15,
                Fonts.fontWeight500,
                Colors.colorWhite,
              ]}>
              Insight
            </Text>
            <Text style={[{color: '#3C8B44'}, Fonts.fontSize17]}>
              +1200 Orders
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;