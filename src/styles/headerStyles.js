import {StyleSheet} from 'react-native';
import * as util from '../utilities/index';

export default StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: util.WP(3),
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    color: util.colors.blue,
    fontSize: util.WP(4),
  },
  optionButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: util.colors.lightGrey,
    borderRadius: util.WP(3.5),
    padding: util.WP(1),
    height: util.WP(7),
    width: util.WP(7),
  },
});
