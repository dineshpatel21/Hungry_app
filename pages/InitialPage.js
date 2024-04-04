import React, {useEffect, useState} from 'react';
import {View, Text, Image, Pressable, TouchableOpacity} from 'react-native';
import explorer from '../assets/icons/HUNGRY_EXPLORER.png';
import shops from '../assets/icons/HUNGRY_SHOP.png';
import delivery from '../assets/icons/DELIVERY_BOYS.png';
import styles from '../style';
import {responsiveVertical, responsiveHorizontal} from '../style';

const InitialPage = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {}, 5000);
  }, []);

  const welcomedata = [
    {
      page: 1,
      headline: 'HUNGRY EXPLORER',
      lines: 'Who want to explore and order delicious food.',
    },
    {
      page: 2,
      headline: 'HUNGRY HEROS',
      lines:
        'For businesses or individuals eager to sell their delightful food creations.',
    },
    {
      page: 3,
      headline: 'DELIVERY BOYS',
      lines: 'For individuals keen on becoming delivery partners.',
    },
  ];

  const [pagedata, setPagedata] = useState(welcomedata[0]);

  const nextscreen = async () => {
    if (pagedata.page < 3) {
      let pn = pagedata.page;
      setPagedata(welcomedata[pn]);
    } else {
      navigation.navigate('welcome');
    }
  };

  const prevscreen = () => {
    if (pagedata.page > 1) {
      let pn = pagedata.page;
      setPagedata(welcomedata[pn - 2]);
    }
  };

  return (
    <View
      style={[
        styles.positionRelative,
        styles.justifyContentCenter,
        styles.alignItemCenter,
        styles.flex1,
        styles.backgroundColorFFFFFF,
      ]}
      onTouchStart={e => (this.touchX = e.nativeEvent.pageX)}
      onTouchEnd={e => {
        if (this.touchX - e.nativeEvent.pageX > 20) {
          nextscreen();
        }
        if (this.touchX + 20 < e.nativeEvent.pageX) {
          prevscreen();
        }
      }}>
      <View style={{opacity: 0}}></View>

      <View style={styles.width100}>
        <View
          style={[
            {width: responsiveHorizontal(284)},
            styles.alignItemCenter,
            styles.alignSelfCenter,
          ]}>
          <Image
            style={[
              styles.welcomeimg,
              pagedata.page === 1
                ? {
                    width: responsiveHorizontal(329),
                    height: responsiveVertical(346),
                  }
                : pagedata.page === 2
                ? {
                    width: responsiveHorizontal(401),
                    height: responsiveVertical(409),
                  }
                : {
                    width: responsiveHorizontal(412),
                    height: responsiveVertical(351),
                  },
            ]}
            source={
              pagedata.page === 1
                ? explorer
                : pagedata.page === 2
                ? shops
                : delivery
            }
          />
          <Text style={[{...styles.welcomehead}]}>{pagedata.headline}</Text>
          <Text style={{...styles.welcomepera}}>{pagedata.lines}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.welcomebtn} onPress={nextscreen}>
        {/* <Text style={styles.welcomebtntext}>
            {pagedata.page === 3 ? "Get started" : "Next"}
          </Text> */}
        <Text style={styles.welcomebtntext}>Next</Text>
      </TouchableOpacity>

      <Text
        style={[
          styles.skip,
          styles.fontWeight700,
          styles.fontSize19,
          styles.colorEE9846,
          styles.marginTop13,
        ]}
        onPress={async () => {
          navigation.navigate('welcome');
        }}>
        Skip
      </Text>

      <View style={[styles.width100,styles.alignItemCenter,styles.marginTop18]}>
        <View style={styles.welcomedots}>
          <View
            style={pagedata.page === 1 ? styles.dotactive : styles.dot}></View>
          <View
            style={pagedata.page === 2 ? styles.dotactive : styles.dot}></View>
          <View
            style={pagedata.page === 3 ? styles.dotactive : styles.dot}></View>
        </View>
      </View>
    </View>
  );
};

export default InitialPage;
