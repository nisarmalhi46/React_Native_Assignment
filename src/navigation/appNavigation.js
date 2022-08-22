import * as React from 'react';
import {navigationRef} from '../utilities/navigation/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import register from '../pages/auth/register';
import login from '../pages/auth/login';
import home from '../pages/home/home';
import {connect} from 'react-redux';

const Stack = createStackNavigator();
class AppContainer extends React.Component {
  render() {
    let {response} = this.props;
    return (
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          initialRouteName={response.data != null ? 'home' : 'login'}>
          <Stack.Screen
            name="register"
            component={register}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="login"
            component={login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="home"
            component={home}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
const mapStateToProps = ({auth}) => {
  return {
    response: auth.response,
  };
};

export default connect(mapStateToProps, null)(AppContainer);
