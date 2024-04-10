import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../pages/bottomtab/Home';
import Liked from '../pages/bottomtab/Liked';
import Cart from '../pages/bottomtab/Cart';
import Profile from '../pages/bottomtab/Profile';
import {
  responsiveVertical,
  responsiveHorizontal,
  MyStyle,
  vw,
  vh,
} from '../style';
import {Text, View, Image} from 'react-native';

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
          MyStyle.paddingHorizontal20,
          MyStyle.paddingVertical10,
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
                MyStyle.bottomIconStyle,
                {tintColor: focused ? '#EE9846' : '#000000'},
              ]}
              source={require('../assets/icons/home.png')}
            />
          ),
          tabBarLabel: ({focused}) => {
            return (
              <Text
                style={[
                  focused ? MyStyle.colorEE9846 : MyStyle.color000000,
                  MyStyle.fontSize10,
                  MyStyle.fontWeight600,
                  MyStyle.marginBottom15,
                  MyStyle.marginTop4,
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
                MyStyle.bottomIconStyle,
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
                  focused ? MyStyle.colorEE9846 : MyStyle.color000000,
                  MyStyle.fontSize10,
                  MyStyle.fontWeight600,
                  MyStyle.marginBottom15,
                  MyStyle.marginTop4,
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
                MyStyle.bottomIconStyle,
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
                  focused ? MyStyle.colorEE9846 : MyStyle.color000000,
                  MyStyle.fontSize10,
                  MyStyle.fontWeight600,
                  MyStyle.marginBottom15,
                  MyStyle.marginTop4,
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
                MyStyle.bottomIconStyle,
                {tintColor: focused ? '#EE9846' : '#000000'},
              ]}
              source={require('../assets/icons/user.png')}
            />
          ),
          tabBarLabel: ({focused}) => {
            return (
              <Text
                style={[
                  focused ? MyStyle.colorEE9846 : MyStyle.color000000,
                  MyStyle.fontSize10,
                  MyStyle.fontWeight600,
                  MyStyle.marginBottom15,
                  MyStyle.marginTop4,
                ]}>Profile</Text>
            );
          },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
