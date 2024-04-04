import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../pages/bottomtab/Home';
import Liked from '../pages/bottomtab/Liked';
import Cart from '../pages/bottomtab/Cart';
import Profile from '../pages/bottomtab/Profile';
import Style, {responsiveHorizontal, responsiveVertical} from '../style';
import {Text, View,Image} from 'react-native';
const Tab = createBottomTabNavigator();
const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: [
          {
            // borderTopWidth: 0,
            height: responsiveVertical(85),
          },
          Style.paddingHorizontal20,
          Style.paddingVertical10,
        ],
      }}
      inactiveColor="#292D32"
      activeColor="#4D4DFF"
      barStyle={[
        {
          backgroundColor: '#FFFFFF',
          paddingVertical: 20,
          paddingHorizontal: 20,
        },
      ]}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={[
                Style.bottomIconStyle,
                {tintColor: focused ? '#EE9846' : '#000000'},
              ]}
              source={require('../assets/icons/home.png')}
            />
          ),
          tabBarLabel: ({focused}) => {
            return (
              <Text
                style={[
                  focused ? Style.colorEE9846 : Style.color000000,
                  Style.fontSize10,
                  Style.fontWeight600,
                  Style.marginBottom15,
                  Style.marginTop4,
                ]}></Text>
            );
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Liked"
        component={Liked}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={[
                Style.bottomIconStyle,
                {
                  tintColor: focused ? '#EE9846' : '#000000',
                  width: responsiveHorizontal(32),
                  height: responsiveVertical(32),
                },
              ]}
              source={require('../assets/icons/heart.png')}
            />
          ),
          tabBarLabel: ({focused}) => {
            return (
              <Text
                style={[
                  focused ? Style.colorEE9846 : Style.color000000,
                  Style.fontSize10,
                  Style.fontWeight600,
                  Style.marginBottom15,
                  Style.marginTop4,
                ]}></Text>
            );
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={[
                Style.bottomIconStyle,
                {
                  tintColor: focused ? '#EE9846' : '#000000',
                  width: responsiveHorizontal(32),
                  height: responsiveVertical(28),
                },
              ]}
              source={require('../assets/icons/shopping.png')}
            />
          ),
          tabBarLabel: ({focused}) => {
            return (
              <Text
                style={[
                  focused ? Style.colorEE9846 : Style.color000000,
                  Style.fontSize10,
                  Style.fontWeight600,
                  Style.marginBottom15,
                  Style.marginTop4,
                ]}></Text>
            );
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={[
                Style.bottomIconStyle,
                {tintColor: focused ? '#EE9846' : '#000000'},
              ]}
              source={require('../assets/icons/user.png')}
            />
          ),
          tabBarLabel: ({focused}) => {
            return (
              <Text
                style={[
                  focused ? Style.colorEE9846 : Style.color000000,
                  Style.fontSize10,
                  Style.fontWeight600,
                  Style.marginBottom15,
                  Style.marginTop4,
                ]}></Text>
            );
          },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
