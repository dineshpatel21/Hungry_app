import React from 'react';
import {View, Text, Image} from 'react-native';
import Style, {
  responsiveVertical,
  responsiveHorizontal,
  responsiveFonts,
} from '../../style';
import ProfileContent from '../../components/ProfileContent';
import Divide from '../../components/Divide';
import {Divider} from 'react-native-paper';

const Profile = ({navigation}) => {
  return (
    <View style={[Style.flex1, Style.backgroundColorFFFFFF]}>
      <View style={[Style.paddingHorizontal20]}>
        <View
          style={[
            Style.flexrow,
            Style.alignItemCenter,
            Style.justifyContentSpaceBetween,
            Style.marginTop13,
            Style.marginBottom10,

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
              Style.alignSelfCenter,
              Style.justifyContentCenter,
              Style.alignItemCenter,
              Style.borderWidth1,
              Style.positionRelative,
            ]}>
            <Image
              source={require('../../assets/icons/user.png')}
              style={{
                width: responsiveHorizontal(58),
                height: responsiveHorizontal(58),
                marginLeft: 6,
              }}
            />
          </View>
          <Divider
            horizontalInset={true}
            style={[
              {borderWidth: 0.5, height: '100%', borderColor: '#EEA967'},
              Style.marginHorizontal20,
            ]}
          />
          <View>
            <Text
              style={[
                Style.fontSize20,
                Style.fontWeight400,
                Style.color000000,
              ]}>
              Name
            </Text>
            <Text
              style={[
                Style.fontSize12,
                Style.fontWeight400,
                Style.colorEE9846,
                Style.marginTop4
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
