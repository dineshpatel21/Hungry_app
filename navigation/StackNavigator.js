import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import Welcome from '../pages/Welcome';
import InitialPage from '../pages/InitialPage';
import Signup from '../pages/auth/Signup';
import Login from '../pages/auth/Login';
import OtpVerification from '../pages/auth/OtpVerification';
import EditProfile from '../pages/EditProfile';
import FoodPlace from '../pages/FoodPlace';
import ItemDetail from '../pages/ItemDetail';
import OrderHistory from '../pages/OrderHistory';
import MyCart from '../pages/MyCart';
import Home from '../pages/bottomtab/Home';
import Liked from '../pages/bottomtab/Liked';
import Cart from '../pages/bottomtab/Cart';
import Profile from '../pages/bottomtab/Profile';
import NewCategory from '../admin/NewCategory';
import AddNewCategory from '../admin/AddNewCategory';
import AddNewDish from '../admin/AddNewDish';
import MyDishes from '../admin/MyDishes';
import AdHome from '../admin/Home';
import NewOrder from '../admin/NewOrder';
import adCart from '../admin/Cart';
import PersonalDetails from '../admin/PersonalDetails';
import BottomTab from './BottomTab';
import AdminBottomTab from './AdminBottomTab';


import {Image, Text, View} from 'react-native';
import Style, {responsiveHorizontal, responsiveVertical} from '../style';
import React, {useState} from 'react';
import SwitchComponent from '../components/Switch';
const Stack = createStackNavigator();

const StackNavigator = () => {
  const [isAdmin, setIsAdmin] = useState(true);
  return isAdmin ? (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="adminBotton"
          component={AdminBottomTab}
          options={{headerShown: false}}
        />
      <Stack.Screen
          name="adCart"
          component={adCart}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={AdHome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyDishes"
          component={MyDishes}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NewCategory"
          component={NewCategory}
          options={{headerTitle: '', headerShown: false}}
        />
        <Stack.Screen
          name="NewOrder"
          component={NewOrder}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PersonalDetails"
          component={PersonalDetails}
          options={{headerTitleAlign: 'center', headerTintColor: '#000000'}}
        />
        <Stack.Screen
          name="AddNewDish"
          component={AddNewDish}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddNewCategory"
          component={AddNewCategory}
          options={{headerShown: false}}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Initial"
          component={InitialPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyTabs"
          component={BottomTab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ItemDetail"
          component={ItemDetail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FoodPlace"
          component={FoodPlace}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OtpVerification"
          component={OtpVerification}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyCart"
          component={MyCart}
          options={{headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="OrderHistory"
          component={OrderHistory}
          options={{headerTitleAlign: 'center'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
