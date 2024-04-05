import {PixelRatio} from 'react-native';

let scaledRatio = PixelRatio.getFontScale();

const responsiveFonts = value => {
  return value * scaledRatio;
};

const FontsStyle = {
  fontSize20: responsiveFonts(20),
  fontSize26: responsiveFonts(26),
  fontSize15: responsiveFonts(15),
  fontSize30: responsiveFonts(30),
  fontSize28: responsiveFonts(28),
  fontSize17: responsiveFonts(17),
  fontSize18: responsiveFonts(18),
  fontSize13: responsiveFonts(13),
  fontSize12: responsiveFonts(12),
  fontSize11: responsiveFonts(11),
  fontSize25: responsiveFonts(25),
  fontSize35: responsiveFonts(35),
  fontSize9: responsiveFonts(9),
  fontWeight400: '400',
  fontWeight500: '500',
  fontWeight700: '700',
  fontWeight300: '300',
};

export default FontsStyle;
export {responsiveFonts};
