import React from 'react';
import {View, Text, Image} from 'react-native';
import Style, {responsiveVertical, responsiveHorizontal,responsiveFonts} from '../style';
const Header = () => {
  return (
    <View style={[Style.flexrow,Style.alignItemCenter, {justifyContent: 'space-between',marginTop:20}]}>
      <View style={[Style.flexrow,Style.alignItemCenter]}>
        <Image
          source={require('../assets/icons/location.png')}
          style={{
            width: responsiveHorizontal(32),
            height: responsiveHorizontal(32),
            marginRight:responsiveHorizontal(9)
          }}
        />
        <View>
          <Text style={[{fontSize:responsiveFonts(10),},Style.fontWeight400]}>Delivering to</Text>
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
