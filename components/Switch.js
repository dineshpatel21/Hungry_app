import {View, Text, Switch} from 'react-native';
import React, {useState} from 'react';
import {MyStyle} from '../style';

const SwitchComponent = () => {
  const [isOn, setIsOn] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={[MyStyle.alignItemCenter]}>
      <Switch
        trackColor={{
          false: 'rgba(242, 61, 43, 0.33)',
          true: 'rgba(110, 153, 87, 0.33)',
        }}
        thumbColor={isEnabled ? '#42833D' : '#FF0000'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text
        style={[
          MyStyle.fontSize15,
          MyStyle.fontWeight700,
          {color: isEnabled ? '#42833D' : '#FF0000'},
        ]}>
        {isEnabled ? 'Online' : 'Offline'}
      </Text>
    </View>
  );
};

export default SwitchComponent;
