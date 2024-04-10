import React from 'react';
import {View, Text, Image} from 'react-native';
import {responsiveVertical, responsiveHorizontal, MyStyle} from '../../style';
import ProfileContent from '../../components/ProfileContent';
import Divide from '../../components/Divide';
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
              MyStyle.backcolor243233,
              MyStyle.borderColor00025,
              MyStyle.icon111,
              MyStyle.borderRadius111,
            ]}>
            <Image
              source={require('../../assets/icons/user.png')}
              style={[MyStyle.marginLeft6, MyStyle.icon58]}
            />
          </View>
          <Divider
            horizontalInset={true}
            style={[
              MyStyle.marginHorizontal20,
              MyStyle.height100,
              MyStyle.bw12,
              MyStyle.borderColorEEA967,
            ]}
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
          heading="Edit Profile"
          icon={require('../../assets/icons/edit.png')}
          navigation={navigation}
          nextScreen="EditProfile"
        />

        <Divide wid={271} color="#EE9846" />

        <ProfileContent
          heading="Your Orders"
          icon={require('../../assets/icons/bag.png')}
          navigation={navigation}
          nextScreen="OrderHistory"
        />

        <Divide wid={271} color="#EE9846" />

        <ProfileContent
          heading="About Us"
          icon={require('../../assets/icons/contact.png')}
          navigation={navigation}
          nextScreen=""
        />

        <Divide wid={271} color="#EE9846" />

        <ProfileContent
          heading="Contact Us"
          icon={require('../../assets/icons/call.png')}
          navigation={navigation}
          nextScreen=""
        />

        <Divide wid={271} color="#EE9846" />

        <ProfileContent
          heading="Report An Issue"
          icon={require('../../assets/icons/danger.png')}
          navigation={navigation}
          nextScreen=""
        />

        <Divide wid={271} color="#EE9846" />

        <ProfileContent
          heading="Log Out"
          icon={require('../../assets/icons/logout.png')}
          navigation={navigation}
          nextScreen=""
        />
      </View>
    </View>
  );
};
export default Profile;
