import {StyleSheet} from 'react-native';
import * as util from '../utilities/index';

export default StyleSheet.create({
  mainView: {
    flex: 1,
    padding: util.WP(5),
    backgroundColor: util.colors.white,
  },
  homeView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: util.WP(3),
    alignItems: 'center',
  },
  boldText: {
    fontSize: util.WP(8),
    fontWeight: 'bold',
    color: util.colors.black,
  },
  addProductsText: {
    color: util.colors.blue,
    fontSize: util.WP(5),
    fontWeight: '600',
  },
  contentWrapper: {
    marginLeft: util.WP(3),
  },
  sharedWithContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomColor: util.colors.lightGrey,
    borderBottomWidth: util.WP(0.25),
    paddingVertical: util.WP(3),
    width: '100%',
  },
  scrollViewStyle: {
    marginEnd: util.WP(3),
    paddingLeft: util.WP(3),
  },
  addNewSharedWith: {
    backgroundColor: util.colors.grey,
    height: util.WP(5),
    width: util.WP(5),
    borderRadius: util.WP(2.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  sharedImageMargin: {
    marginLeft: util.WP(2),
  },
  flatListContainer: {height: util.HP(100)},
  sharedWithImage: {
    height: util.WP(5),
    width: util.WP(5),
    borderRadius: util.WP(2.5),
  },
  categoryContainer: {
    marginTop: util.WP(3),
  },
  categoryName: {
    fontSize: util.WP(3),
    fontWeight: '700',
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingEnd: util.WP(3),
    paddingVertical: util.WP(3),
    alignItems: 'center',
    borderBottomWidth: util.WP(0.25),
    borderBottomColor: util.colors.lightGrey,
  },
  productDescription: {
    fontSize: util.WP(2),
    color: util.colors.grey,
    marginTop: util.WP(0.25),
  },
  quantityWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '20%',
  },
  price: {
    flex: 1,
    textAlign: 'right',
    color: util.colors.grey,
  },
});
