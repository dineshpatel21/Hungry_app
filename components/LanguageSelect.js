import React, { useContext } from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import MyStyle, {
  responsiveVertical,
  responsiveHorizontal,
  responsiveFonts,
} from '../style';


const { width, height } = Dimensions.get("window");

const LangaugeSelect = () => {
  
  const animation = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: animation.value }],
    };
  });
  return (
    <TouchableOpacity
      style={[MyStyle.languageSelect]}
      onPress={() => {
        if (currentLanguage === "en") {
          changeLanguage("hi");
        } else {
          changeLanguage("en");
        }

        if (animation.value == 0) {
          setSharedValue(responsiveWidth(30) * width);
          animation.value = withTiming(responsiveWidth(30) * width, {
            duration: 500,
          });
        } else {
          setSharedValue(0);
          animation.value = withTiming(0, { duration: 500 });
        }
      }}
    >
      <Animated.View
        style={[
          MyStyle.languageSelectItem,
          
          animatedStyle,
        ]}
      >
        <Text
         
        >
          online
        </Text>
      </Animated.View>
    </TouchableOpacity>
  );
};
export default LangaugeSelect;
