import React from 'react';
import {View, Text, Image} from 'react-native';
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
            {width: responsiveHorizontal(250)},
          ]}>
          <View
            style={[
              {
                width: responsiveHorizontal(111),
                height: responsiveHorizontal(111),
                borderRadius: responsiveHorizontal(111),
                backgroundColor: 'rgba(243, 233, 222, 1)',
                borderColor: 'rgba(0, 0, 0, 0.25)',
              },
              MyStyle.alignSelfCenter,
              MyStyle.justifyContentCenter,
              MyStyle.alignItemCenter,
              MyStyle.borderWidth1,
              MyStyle.positionRelative,
            ]}>
            <Image
              source={require('../assets/icons/user.png')}
              style={{
                width: responsiveHorizontal(58),
                height: responsiveHorizontal(58),
                marginLeft: 6,
              }}
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
