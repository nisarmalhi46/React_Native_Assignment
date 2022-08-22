import React, {Component} from 'react';
import {View, StatusBar} from 'react-native';
import {connect} from 'react-redux';
import AppContainer from './navigation/appNavigation';
import styles from './styles/rootContainerStyles';

class RootContainer extends Component {
  render() {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle="dark-content" />
        <AppContainer />
      </View>
    );
  }
}

export default connect(null, null)(RootContainer);
