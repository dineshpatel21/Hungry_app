import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Switch} from 'react-native-switch';

const SwitchComponent = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <Switch
      value={isOn}
      onValueChange={val => setIsOn(val)}
      //disabled={false}
      activeText={'Online'}
      inActiveText={'Offline'}
      circleSize={52}
      barHeight={48}
      circleBorderWidth={3}
      backgroundActive={'rgba(110, 153, 87, 0.33)'}
      backgroundInactive={'rgba(242, 61, 43, 0.33)'}
      circleActiveColor={'#42833D'}
      circleInActiveColor={'#F40000'}
      //renderInsideCircle={() => <CustomComponent />}
      changeValueImmediately={true}
      innerCircleStyle={{alignItems: 'center', justifyContent: 'center'}}
      outerCircleStyle={{}}
      // renderActiveText={false}
      // renderInActiveText={false}
      switchLeftPx={2}
      switchRightPx={2}
      switchWidthMultiplier={2}
      switchBorderRadius={30}
    />
  );
};

export default SwitchComponent;
