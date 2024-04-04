import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import MyStyle from '../style';
import Colors from '../style';
import Style, {
  responsiveVertical,
  responsiveHorizontal,
  responsiveFonts,
} from '../style';

import MenuManagement from '../components/MenuManagement';

export const CategorySearch = () => {
  return (
    <View
      style={[
        MyStyle.flexrow,
        MyStyle.alignItemCenter,
        MyStyle.justifyContentSpaceBetween,
        MyStyle.paddingHorizontal20,
        MyStyle.marginBottom8,
      ]}>
      <View>
        <Text style={[MyStyle.fontSize20, MyStyle.fontWeight700]}>Categroy</Text>
        <Text style={[MyStyle.fontSize15, MyStyle.fontWeight500]}>
          (Select the Category)
        </Text>
      </View>
      <Image
        source={require('../assets/icons/search.png')}
        style={[
          {
            width: responsiveHorizontal(27),
            height: responsiveHorizontal(30),
          },
        ]}
      />
    </View>
  );
};

const CategoryList = ({categoryName}) => {
  return (
    <View
      style={[
        MyStyle.alignItemCenter,
        MyStyle.flexrow,
        MyStyle.justifyContentSpaceBetween,
        MyStyle.marginBottom15,
        MyStyle.borderRadius10,
        MyStyle.borderWidth1,
        {
          paddingVertical: responsiveVertical(7),
          paddingHorizontal: responsiveHorizontal(16),
          marginHorizontal: responsiveHorizontal(10),
        },
      ]}>
      <View style={[MyStyle.flexrow, MyStyle.alignItemCenter]}>
        <Image
          source={require('../assets/icons/categoryImage.png')}
          style={[
            {
              width: responsiveHorizontal(60),
              height: responsiveHorizontal(61),
            },
            MyStyle.marginRight18,
          ]}
        />
        <Text style={[MyStyle.fontWeight700, MyStyle.fontSize20]}>
          {categoryName}
        </Text>
      </View>
      <TouchableOpacity>
        <Image
          source={require('../assets/icons/dots.png')}
          style={[
            {
              width: responsiveHorizontal(28),
              height: responsiveHorizontal(28),
            },
          ]}
        />
      </TouchableOpacity>
    </View>
  );
};

const _headerComponent = () => {
  return (
    <View style={[MyStyle.backgroundColorFFFFFF]}>
      <MenuManagement />
      <View
        style={[
          {backgroundColor: '#D9D9D9', height: 2},
          MyStyle.marginBottom15,
          MyStyle.marginTop8,
        ]}
      />
      <CategorySearch />
    </View>
  );
};

const NewCategory = ({navigation}) => {
  const [data, setData] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}]);

  return (
    <View style={[MyStyle.flex1]}>
      <View style={[MyStyle.backgroundColorFFFFFF, {flex: 0.2}]}>
        <MenuManagement />
        <View
          style={[
            MyStyle.marginBottom15,
            MyStyle.marginTop8,
            Colors.backgroundColorD9D9D9,
            MyStyle.height2,
          ]}
        />
        <CategorySearch />
      </View>

      <View style={{flex: 0.7}}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            return <CategoryList categoryName="Category Name" />;
          }}
        />
      </View>

      <View
        style={[
          MyStyle.backgroundColorFFFFFF,
          MyStyle.positionAbsolute,
          MyStyle.width100,
          MyStyle.justifyContentCenter,
          {bottom: 0, flex: 0.1},
        ]}>
        <TouchableOpacity
          style={[
            MyStyle.welcomebtn,
            MyStyle.alignItemCenter,
            MyStyle.justifyContentCenter,
            MyStyle.alignSelfCenter,
          ]}
          onPress={() => {
            navigation.navigate('AddNewCategory');
          }}>
          <Text
            style={[
              MyStyle.welcomebtntext,
             Colors.colorWhite,
              MyStyle.fontWeight400,
              MyStyle.fontSize25,
            ]}>
            + Add new category
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewCategory;
