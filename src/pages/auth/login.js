import React, {useEffect, useState, useRef} from 'react';
import {Text, SafeAreaView, ImageBackground, View, Image} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import styles from '../../styles';
import {loginUser} from '../../store/actions/authActions';
import components from '../../components';
import * as util from '../../utilities';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Login = props => {
  const [credentials, setCredentials] = useState({
    Email: '',
    Password: '',
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if (props.response.code == 0 && props.response.data != null) {
      util.showAlert(props.response.message);
      props.navigation.navigate('home');
    }
  }, [props.response]);
  return (
    <View style={styles.authStyles.mainContainer}>
      <ImageBackground
        style={styles.authStyles.backgroundWrapper}
        source={util.constants.backgroundImage}>
        <Text style={styles.authStyles.headingText}>Login</Text>
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
            secureTextEntry={key.toLowerCase() == 'password' ? true : false}
            onChangeText={value => {
              setCredentials(credentials => ({
                ...credentials,
                ...util.handleChange(value, key, credentials),
              }));
            }}
          />
        ))}
        <components.Button
          title={'Login'}
          onPress={() => {
            dispatch(loginUser(credentials));
          }}
        />
        <View style={styles.authStyles.registerSection}>
          <Text style={{color: util.colors.white}}>Don't have account? </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => util.navigate('register')}>
            <Text style={{color: util.colors.purple}}>Register</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    response: state.auth.response,
  };
};

export default connect(mapStateToProps, null)(Login);
