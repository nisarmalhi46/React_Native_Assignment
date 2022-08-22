import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from '../styles';

export const Button = props => {
  let {title, onPress} = props;
  return (
    <View style={{width: '100%'}}>
      <TouchableOpacity
        style={styles.authStyles.button}
        delayPressIn={0}
        onPress={onPress}>
        <Text style={{color: 'white', fontSize: 15}}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
