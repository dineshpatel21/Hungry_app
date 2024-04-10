import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {responsiveVertical, responsiveHorizontal, MyStyle} from '../style';
import {Searchbar} from 'react-native-paper';

import MenuManagement from '../components/MenuManagement';
import SwitchComponent from '../components/Switch';
import {Divider} from 'react-native-paper';

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
        <Text style={[MyStyle.fontSize20, MyStyle.fontWeight700]}>
          Categroy
        </Text>
        <Text style={[MyStyle.fontSize15, MyStyle.fontWeight500]}>
          (Select the Category)
        </Text>
      </View>
      <Image
        source={require('../assets/icons/search.png')}
        style={[MyStyle.width27, MyStyle.height30]}
      />
    </View>
  );
};

const CategoryList = ({categoryName, data, setData, item, index}) => {
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
          style={[MyStyle.marginRight18, MyStyle.icon60]}
        />
        <Text style={[MyStyle.fontWeight700, MyStyle.fontSize20]}>
          {categoryName}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          onClickDot(item, index, data, setData);
        }}>
        <Image
          source={require('../assets/icons/dots.png')}
          style={[MyStyle.icon28]}
        />
      </TouchableOpacity>
      {item.opened && (
        <View style={[MyStyle.positionAbsolute]}>
          <View style={[MyStyle.flexrow, MyStyle.alignItemCenter]}>
            <Image
              source={require('../assets/icons/unavailable.png')}
              style={[MyStyle.icon20, MyStyle.marginRight4]}
            />
            <Text style={[MyStyle.fontSize11, MyStyle.fontWeight400]}>
              Category unavailable
            </Text>
          </View>

          <Divider style={[MyStyle.marginVertical5]} />
          <View style={[MyStyle.flexrow, MyStyle.alignItemCenter]}>
            <Image
              source={require('../assets/icons/trash.png')}
              style={[MyStyle.icon20, MyStyle.marginRight4]}
            />
            <Text style={[MyStyle.fontSize11, MyStyle.fontWeight400]}>
              Delete category
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

const _headerComponent = () => {
  return (
    <View style={[MyStyle.backgroundColorFFFFFF]}>
      <MenuManagement />
      <View
        style={[
          MyStyle.marginBottom15,
          MyStyle.marginTop8,
          MyStyle.height2,
          MyStyle.backgroundColorD9D9D9,
        ]}
      />
      <CategorySearch />
    </View>
  );
};

const NewCategory = ({navigation}) => {
  const [data, setData] = useState([
    {opened: false},
    {opened: false},
    {opened: false},
    {opened: false},
    {opened: false},
    {opened: false},
  ]);

  const onClickDot = (item, index, data, setData) => {
    let newData = data.map((it, idx) => {
      if (index == idx) {
        it.opened = it.opened ? false : true;
      } else {
        it.opened = false;
      }
      return it;
    });
    setData(newData);
  };
  return (
    <View style={[MyStyle.flex1, MyStyle.backgroundColorFFFFFF]}>
      <View style={[MyStyle.flex09]}>
        <View style={[MyStyle.backgroundColorFFFFFF]}>
          <View
            style={[
              MyStyle.marginHorizontal20,
              MyStyle.marginTop13,
              MyStyle.flexrow,
              MyStyle.justifyContentSpaceBetween,
            ]}>
            <MenuManagement />
            <SwitchComponent />
          </View>
          <View
            style={[
              MyStyle.marginBottom15,
              MyStyle.marginTop8,
              MyStyle.borderWidth1,

              MyStyle.height2,
            ]}
          />
          <Searchbar
            placeholder="Search The Category"
            style={[
              MyStyle.marginBottom10,
              MyStyle.alignItemCenter,
              MyStyle.marginTop13,
              MyStyle.marginHorizontal20,
              MyStyle.borderColor000022,
            ]}
            icon={({color, size}) => (
              <Image
                source={require('../assets/icons/search.png')}
                style={[MyStyle.icon20, MyStyle.marginRight3]}
              />
            )}
            // onChangeText={}
            // value={}
          />
        </View>

        <ScrollView>
          {data.length != 0 ? (
            data.map((item, index) => {
              return (
                <View
                  style={[
                    MyStyle.alignItemCenter,
                    MyStyle.flexrow,
                    MyStyle.justifyContentSpaceBetween,
                    MyStyle.marginBottom10,
                    MyStyle.borderRadius10,
                    MyStyle.borderWidth1,
                    MyStyle.marginHorizontal10,
                    MyStyle.paddingVertical7,
                    MyStyle.paddingHorizontal16,
                  ]}>
                  <View style={[MyStyle.flexrow, MyStyle.alignItemCenter]}>
                    <Image
                      source={require('../assets/icons/categoryImage.png')}
                      style={[MyStyle.icon60, MyStyle.marginRight18]}
                    />
                    <Text style={[MyStyle.fontWeight700, MyStyle.fontSize20]}>
                      Category Name
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      onClickDot(item, index, data, setData);
                    }}>
                    <Image
                      source={require('../assets/icons/dots.png')}
                      style={[MyStyle.icon28]}
                    />
                  </TouchableOpacity>
                  {item.opened && (
                    <View
                      style={[
                        MyStyle.positionAbsolute,
                        MyStyle.backgroundColorFFFFFF,
                        MyStyle.padding8,
                        MyStyle.borderRadius10,
                        MyStyle.elevation10,
                        MyStyle.zIndex100,
                        MyStyle.right35,
                        MyStyle.bottomM25,
                      ]}>
                      <TouchableOpacity
                        style={[MyStyle.flexrow, MyStyle.alignItemCenter]}
                        onPress={() => {
                          onClickDot(item, index, data, setData);
                        }}>
                        <Image
                          source={require('../assets/icons/unavailable.png')}
                          style={[MyStyle.icon20, MyStyle.marginRight4]}
                        />
                        <Text
                          style={[MyStyle.fontSize11, MyStyle.fontWeight400]}>
                          Category unavailable
                        </Text>
                      </TouchableOpacity>

                      <Divider style={[MyStyle.marginVertical5]} />
                      <TouchableOpacity
                        style={[MyStyle.flexrow, MyStyle.alignItemCenter]}
                        onPress={() => {
                          onClickDot(item, index, data, setData);
                        }}>
                        <Image
                          source={require('../assets/icons/trash.png')}
                          style={[MyStyle.icon20, MyStyle.marginRight4]}
                        />
                        <Text
                          style={[MyStyle.fontSize11, MyStyle.fontWeight400]}>
                          Delete category
                        </Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              );
            })
          ) : (
            <View
              style={[MyStyle.alignItemCenter, MyStyle.justifyContentCenter]}>
              <Image
                source={require('../assets/icons/search2.png')}
                style={[MyStyle.width216, MyStyle.height232]}
              />
            </View>
          )}
        </ScrollView>
      </View>
      <View
        style={[
          MyStyle.backgroundColorFFFFFF,
          MyStyle.positionAbsolute,
          MyStyle.width100,
          MyStyle.justifyContentCenter,
          MyStyle.bottom0,
          MyStyle.flex01,
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
              MyStyle.colorWhite,
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
