import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from '../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as util from '../utilities';

const Header = props => {
  return (
    <View style={styles.headerStyles.headerContainer}>
      <TouchableOpacity
        style={styles.headerStyles.backButton}
        onPress={() => util.back()}>
        <Ionicons
          name="chevron-back-outline"
          size={util.WP(8)}
          color={util.colors.blue}
        />
        <Text style={styles.headerStyles.backText}>Back</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.headerStyles.optionButton}
        onPress={() => {}}>
        <Ionicons
          name="ellipsis-horizontal-sharp"
          size={util.WP(5)}
          color={util.colors.blue}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
