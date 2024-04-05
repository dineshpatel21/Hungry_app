import {StyleSheet, Dimensions, PixelRatio} from 'react-native';
import Colors from './Colors'

let vw = Dimensions.get('window').width;
let vh = Dimensions.get('window').height;
let scaledRatio = PixelRatio.getFontScale();

export const responsiveFonts = value => {
  return value * scaledRatio;
};

export const responsiveVertical = value => {
  const res = vw / (375 / value);
  return res;
};

export const responsiveHorizontal = value => {
  const res = (value / 375) * vw;
  return res;
};

const styles = StyleSheet.create({
  flex1: {flex: 1},
  height2:{height:responsiveVertical(2)},
  alignItemCenter: {alignItems: 'center'},
  justifyContentCenter: {justifyContent: 'center'},
  positionRelative: {position: 'relative'},
  backgroundColorEE9846: {backgroundColor: '#EE9846'},
  backgroundColorFFFFFF: {backgroundColor: '#ffffff'},
  fontSize19: {fontSize: responsiveFonts(19)},
  colorEE9846: {color: '#EE9846'},
  marginTop13: {marginTop: responsiveVertical(13)},
  width100: {width: '100%'},
  welcomeimg: {
    width: 284,
    height: 260,
  },
  welcomehead: {
    color: '#000000',
    fontSize: responsiveFonts(22),
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 10,
    letterSpacing: 0.01,
  },
  welcomepera: {
    textAlign: 'center',
    color: '#000000',
    fontSize: responsiveFonts(15),
  },
  welcomedots: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: '5%',
  },
  dot: {
    width: 10,
    height: 10,
    margin: 5,
    backgroundColor: '#C9C9C9',
    borderRadius: 50,
  },
  dotactive: {
    width: 12,
    height: 12,
    margin: 5,
    backgroundColor: '#EE9846',
    borderRadius: 50,
  },
  welcomebtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: responsiveHorizontal(302),
    height: responsiveVertical(54),
    backgroundColor: 'rgba(238, 189, 142, 1)',
    borderRadius: 15,
    marginTop: responsiveVertical(15),
  },
  welcomebtntext: {
    color: 'rgba(163, 0, 0, 1)',
    fontSize: responsiveFonts(22),
    fontWeight: '700',
  },
 

  marginTop18: {marginTop: responsiveVertical(18)},
  alignItems: {
    alignItems: 'center',
  },
  justifyContent: {justifyContent: 'center'},
  flexrow: {flexDirection: 'row'},
  positionAbsolute: {position: 'absolute'},
  bgWhite: {backgroundColor: '#FFFFFF'},
  backD9D9D9: {backgroundColor: '#D9D9D9'},
  paddingVertical10: {paddingVertical: responsiveVertical(10)},
  marginRight18: {marginRight: responsiveHorizontal(18)},
  fontSize20: {fontSize: responsiveFonts(20)},
  fontSize26: {fontSize: responsiveFonts(26)},
  fontSize15: {fontSize: responsiveFonts(15)},
  fontSize30: {fontSize: responsiveFonts(30)},
  fontSize28: {fontSize: responsiveFonts(28)},
  fontSize17: {fontSize: responsiveFonts(17)},
  fontSize13: {fontSize: responsiveFonts(13)},
  fontSize12: {fontSize: responsiveFonts(12)},
  fontSize25: {fontSize: responsiveFonts(25)},
  fontSize35: {fontSize: responsiveFonts(35)},
  fontSize9: {fontSize: responsiveFonts(9)},
  fontWeight400: {fontWeight: '400'},
  fontWeight500: {fontWeight: '500'},
  fontWeight700: {fontWeight: '700'},
  fontWeight300: {fontWeight: '300'},
  alignSelfFlexEnd: {alignSelf: 'flex-end'},
  alignSelfCenter: {alignSelf: 'center'},
  color000000: {color: '#000000'},
  colorEE9846: {color: '#EE9846'},
  colorWhite: {color: '#ffffff'},
  colorffebeb: {color: '#FFEBEB'},
  colorD18741: {color: '#D18741'},
  color101FA2: {color: 'rgba(16, 31, 162, 1)'},
  lineHeight: {lineHeight: responsiveVertical(19.95)},
  fontWeightBold: {fontWeight: 'bold'},
  flex1: {flex: 1},
  paddingHorizontal20: {paddingHorizontal: responsiveHorizontal(20)},
  fontStyleItalic: {fontStyle: 'italic'},
  borderWidth1: {borderWidth: 1},
  borderRadius10: {borderRadius: 10},
  justifyContentSpaceBetween: {justifyContent: 'space-between'},
  paddingVertical17: {paddingVertical: responsiveVertical(17)},
  paddingVertical7: {paddingVertical: responsiveVertical(7)},
  paddingVertical2: {paddingVertical: responsiveVertical(2)},
  paddingHorizontal14: {paddingHorizontal: responsiveHorizontal(14)},
  paddingHorizontal18: {paddingHorizontal: responsiveHorizontal(18)},
  paddingHorizontal16: {paddingHorizontal: responsiveHorizontal(16)},
  paddingHorizontal10: {paddingHorizontal: responsiveHorizontal(10)},
  paddingHorizontal6: {paddingHorizontal: responsiveHorizontal(6)},
  marginBottom8: {marginBottom: responsiveVertical(8)},
  marginBottom26: {marginBottom: responsiveVertical(26)},
  marginTop30: {marginTop: responsiveVertical(30)},
  marginTop28: {marginTop: responsiveVertical(28)},
  marginTop8: {marginTop: responsiveVertical(8)},
  marginTop17: {marginTop: responsiveVertical(17)},
  borderColorBlack: {borderColor: 'black'},
  borderRadius10: {borderRadius: 15},
  borderRadius6: {borderRadius: 6},
  borderRadius50: {borderRadius: 50},
  marginLeft18: {marginLeft: responsiveHorizontal(18)},
  borderColorA61A1: {borderColor: '#A6A1A1'},
  marginRight20: {marginRight: responsiveHorizontal(20)},
  marginRight24: {marginRight: responsiveHorizontal(24)},
  marginRight9: {marginRight: responsiveHorizontal(9)},
  marginLeft49: {marginLeft: responsiveHorizontal(49)},
  marginLeft24: {marginLeft: responsiveHorizontal(24)},
  marginBottom29: {marginBottom: responsiveVertical(29)},
  marginBottom15: {marginBottom: responsiveVertical(15)},
  marginBottom10: {marginBottom: responsiveVertical(10)},
  marginTop16: {marginTop: responsiveHorizontal(16)},
  marginTop4: {marginTop: responsiveHorizontal(4)},
  marginHorizontal20: {marginHorizontal: responsiveHorizontal(20)},
  marginVertical9:{marginVertical:responsiveVertical(9)},
  padding8: {padding: 8},
  padding6:{padding:responsiveHorizontal(6)},
  otp: {
    width: responsiveHorizontal(53),
    height: responsiveVertical(60),
    borderWidth: 1,
    borderColor: '#E4E4E4',
  },
  bottomIconStyle: {
    width: responsiveHorizontal(30),
    height: responsiveVertical(30),
  },
 
  languageSelect: {
    width: responsiveWidth(70) * width,
    borderRadius: 0.0666 * width,
    padding: 0.01111 * width,
    backgroundColor: "#4D4DFF",
  },
  languageSelectItem: {
    width: 30,
    height: 30,
    backgroundColor: "#FFFFFF",
    borderRadius: 45,
  },
});

export default styles;
export {vw, vh};
