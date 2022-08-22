import React, {useEffect, useState, useRef} from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  ImageBackground,
  Image,
} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import styles from '../../styles';
import {signUpUser} from '../../store/actions/authActions';
import components from '../../components';
// import {handleChange} from '../../utilities/helpers/helper';
import * as util from '../../utilities';

const Register = props => {
  const [credentials, setCredentials] = useState({
    Name: '',
    Email: '',
    Password: '',
    'Confirm Password': '',
  });
  const dispatch = useDispatch();

  return (
    <View style={styles.authStyles.mainContainer}>
      <ImageBackground
        style={styles.authStyles.backgroundWrapper}
        source={util.constants.backgroundImage}>
        <Text style={styles.authStyles.headingText}>Create your account</Text>
        <Image
          style={styles.authStyles.authImage}
          source={util.constants.authImage}
          resizeMode="contain"
        />
        {Object.keys(credentials).map((key, index) => (
          <components.InputField
            placeholder={key}
            placeholderTextColor={util.colors.white}
            value={credentials[key]}
            secureTextEntry={
              key.toLowerCase() == 'password' ||
              key.toLowerCase() == 'confirm password'
                ? true
                : false
            }
            onChangeText={value => {
              setCredentials(credentials => ({
                ...credentials,
                ...util.handleChange(value, key, credentials),
              }));
            }}
          />
        ))}
        <components.Button
          title={'Sign Up'}
          onPress={() => dispatch(signUpUser(credentials))}
        />
        <View style={styles.authStyles.registerSection}>
          <Text style={{color: util.colors.white}}>Already have account? </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => util.navigate('login')}>
            <Text style={{color: util.colors.purple}}>Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
const mapStateToProps = state => {
  return {
    response: state.auth.response,
    loading: state.ui.isLoading,
  };
};

export default connect(mapStateToProps, null)(Register);
