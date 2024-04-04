import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Categories = () => {
  const items = [
    {
      id: '1',
      name: 'Preparing (0)',
    },
    {
      id: '2',
      name: 'Ready (0)',
    },
    {
      id: '3',
      name: 'Picked up (0)',
    },
    {
      id: '4',
      name: 'cuisines',
    },
   
    
  ];
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={items}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              marginTop: 5,
              borderColor: '#EE9846',
              borderWidth: 1,
              marginRight: 11,
              borderRadius:10,
              backgroundColor:'#ffffff'
            }}>
            <View
              style={{
                marginHorizontal: 10,
                marginVertical: 5,
                padding: 5,
                backgroundColor: 'white',
                borderRadius: 4,
              }}>
              <Text
                style={{
                  paddingHorizontal: 5,
                  color: '#00000087',
                  fontWeight: '500',
                  fontSize: 15,
                }}>
                {item?.name}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({});
