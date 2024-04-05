import React from 'react';
import {View, Text, Image} from 'react-native';
import  {
  responsiveVertical,
  responsiveHorizontal,
  responsiveFonts,
  MyStyle,
} from '../style';
const Header = () => {
  return (
    <View style={[MyStyle.flexrow,MyStyle.alignItemCenter, {justifyContent: 'space-between',marginTop:20}]}>
      <View style={[MyStyle.flexrow,MyStyle.alignItemCenter]}>
        <Image
          source={require('../assets/icons/location.png')}
          style={{
            width: responsiveHorizontal(32),
            height: responsiveHorizontal(32),
            marginRight:responsiveHorizontal(9)
          }}
        />
        <View>
          <Text style={[{fontSize:responsiveFonts(10),},MyStyle.fontWeight400]}>Delivering to</Text>
          <Text style={{color:'rgba(238, 152, 70, 1)',fontSize:15}}>Raipur</Text>
        </View>
      </View>
      <View>
        <Image
          source={require('../assets/icons/Noti.png')}
          style={{
            width: responsiveHorizontal(26),
            height: responsiveHorizontal(26),
          }}
        />
      </View>
    </View>
  );
};
export default Header;
