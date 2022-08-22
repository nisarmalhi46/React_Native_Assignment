import {StyleSheet} from 'react-native';
import * as util from '../utilities/index';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: util.WP(5),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: util.colors.white,
  },
  container: {
    paddingBottom: util.WP(5),
  },
  backgroundWrapper: {
    height: util.HP(100),
    width: util.WP(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  authImage: {
    height: util.WP(30),
    width: util.WP(30),
    position: 'absolute',
    top: util.WP(30),
  },
  button: {
    alignSelf: 'center',
    backgroundColor: util.colors.purple,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    marginVertical: 10,
    borderRadius: 20,
  },
  textInput: {
    alignSelf: 'center',
    borderRadius: 20,
    borderColor: util.colors.purple,
    borderWidth: 1,
    height: 50,
    width: '80%',
    marginVertical: 10,
    paddingHorizontal: 20,
    color: util.colors.white,
  },
  headingText: {
    fontSize: 20,
    top: util.WP(10),
    position: 'absolute',
    color: util.colors.white,
  },
  fullWidth: {width: '100%'},
  registerSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
});
