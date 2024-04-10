import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {responsiveVertical, responsiveHorizontal, MyStyle} from '../style';
import ProfileContent from '../components/ProfileContent';
import Divide from '../components/Divide';
import {Divider} from 'react-native-paper';

const Profile = ({navigation}) => {
  return (
    <View style={[MyStyle.flex1, MyStyle.backgroundColorFFFFFF]}>
      <View style={[MyStyle.paddingHorizontal20]}>
        <View
          style={[
            MyStyle.flexrow,
            MyStyle.alignItemCenter,
            MyStyle.justifyContentSpaceBetween,
            MyStyle.marginTop13,
            MyStyle.marginBottom10,
            MyStyle.width250,
          ]}>
          <View
            style={[
              MyStyle.alignSelfCenter,
              MyStyle.justifyContentCenter,
              MyStyle.alignItemCenter,
              MyStyle.borderWidth1,
              MyStyle.positionRelative,
              MyStyle.borderColor00025,
              MyStyle.backgroundColor243233,
              MyStyle.icon111,
              MyStyle.borderRadius111,
            ]}>
            <Image
              source={require('../assets/icons/user.png')}
              style={[MyStyle.icon58, MyStyle.marginRight5]}
            />
          </View>
          <Divider
            horizontalInset={true}
            style={[MyStyle.dividerStyle, MyStyle.marginHorizontal20]}
          />
          <View>
            <Text
              style={[
                MyStyle.fontSize20,
                MyStyle.fontWeight400,
                MyStyle.color000000,
              ]}>
              Name
            </Text>
            <Text
              style={[
                MyStyle.fontSize12,
                MyStyle.fontWeight400,
                MyStyle.colorEE9846,
                MyStyle.marginTop4,
              ]}>
              address
            </Text>
          </View>
        </View>

        <ProfileContent
          heading="Personal Details"
          icon={require('../assets/icons/edit.png')}
          navigation={navigation}
          nextScreen="PersonalDetails"
        />

        <Divide wid={271} color="#EE9846" />

        <ProfileContent
          heading="Dishes"
          icon={require('../assets/icons/bag.png')}
          navigation={navigation}
          nextScreen="MyDishes"
        />

        <Divide wid={271} color="#EE9846" />

        <ProfileContent
          heading="Dishes Category"
          icon={require('../assets/icons/contact.png')}
          navigation={navigation}
          nextScreen="NewCategory"
        />

        <Divide wid={271} color="#EE9846" />
        <View
          style={[
            MyStyle.flexrow,
            MyStyle.borderRadius10,
            MyStyle.alignItemCenter,
            //MyStyle.justifyContentCenter,
            // MyStyle.marginHorizontal20,
            // MyStyle.backgroundColorEE9846,
            // MyStyle.flex01,
          ]}>
          <TouchableOpacity style={[MyStyle.flexrow]}>
            <Image
              source={require('../assets/icons/analyzing.png')}
              style={[
                MyStyle.icon32,
                MyStyle.marginRight18,
                MyStyle.tintColorEE9846,
              ]}
            />

            <View
              style={[
                MyStyle.justifyContentSpaceBetween,
                MyStyle.flexrow,
                MyStyle.width245,
               MyStyle.alignItemCenter
              ]}>
              <Text
                style={[
                  MyStyle.fontSize15,
                  MyStyle.fontWeight500,
                  MyStyle.color3C8B44,
                ]}>
                Insight
              </Text>
              <Text style={[MyStyle.fontSize17, MyStyle.colorEE9846]}>
                +1200 Orders
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <Divide wid={271} color="#EE9846" />

        <ProfileContent
          heading="Contact Us"
          icon={require('../assets/icons/call.png')}
          navigation={navigation}
          nextScreen=""
        />

        <Divide wid={271} color="#EE9846" />

        <ProfileContent
          heading="Report An Issue"
          icon={require('../assets/icons/danger.png')}
          navigation={navigation}
          nextScreen=""
        />

        <Divide wid={271} color="#EE9846" />

        <ProfileContent
          heading="Log Out"
          icon={require('../assets/icons/logout.png')}
          navigation={navigation}
          nextScreen=""
        />
      </View>
    </View>
  );
};
export default Profile;
