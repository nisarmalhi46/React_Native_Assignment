import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import styles from '../styles';

export const InputField = props => {
  let {
    value,
    onChangeText,
    placeholder,
    placeholderTextColor,
    secureTextEntry,
    key,
    editable,
  } = props;
  return (
    <View style={styles.authStyles.fullWidth}>
      <TextInput
        style={styles.authStyles.textInput}
        value={value}
        editable={editable}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default InputField;
