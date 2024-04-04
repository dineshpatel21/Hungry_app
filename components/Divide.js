import React from 'react';
import {View, Text} from 'react-native';
import Style, {
  responsiveVertical,
  responsiveHorizontal,
  responsiveFonts,
} from '../style';

import {Divider} from 'react-native-paper';

const Divide = ({wid, color}) => {
  return (
    <Divider style={{width: responsiveHorizontal(wid), borderColor: color,marginVertical:responsiveHorizontal(10)}} />
  );
};
export default Divide;
