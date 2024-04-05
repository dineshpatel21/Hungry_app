import {StyleSheet, Dimensions, PixelRatio} from 'react-native';

let vw = Dimensions.get('window').width;
let vh = Dimensions.get('window').height;

let scaledRatio = PixelRatio.getFontScale();

const responsiveFonts = value => {
  return value * scaledRatio;
};

const FontsSize = StyleSheet.create({
  {
    fontSize20: {fontsize:responsiveFonts(20)};
    fontSize26: {fontsize:responsiveFonts(26)};
    fontSize15: {fontsize:responsiveFonts(15)};
    fontSize30: {fontsize:responsiveFonts(30)};
    fontSize28: {fontsize:responsiveFonts(28)};
    fontSize17: {fontsize:responsiveFonts(17)};
    fontSize18: {fontsize:responsiveFonts(18)};
    fontSize13: {fontsize:responsiveFonts(13)};
    fontSize12: {fontsize:responsiveFonts(12)};
    fontSize11: {fontsize:responsiveFonts(11)};
    fontSize25: {fontsize:responsiveFonts(25)};
    fontSize35: {fontsize:responsiveFonts(35)};
    fontSize9: {fontsize:responsiveFonts(9);}
    
    fontWeight400: {fontWeight:'400'};
    fontWeight500: {fontWeight:'500'};
    fontWeight700: {fontWeight:'700'};
    fontWeight300: {fontWeight:'300'};
  }
});



export default FontsStyle
