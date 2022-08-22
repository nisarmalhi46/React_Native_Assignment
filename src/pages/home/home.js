import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  FlatList,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import Header from '../../components/header';
import styles from '../../styles';
import * as util from '../../utilities';
import Ionicons from 'react-native-vector-icons/Ionicons';
import components from '../../components';

const home = props => {
  const [products, setProducts] = useState(util.productsData);
  const [sharedWith, setsharedWith] = useState(util.sharedWith);

  const renderItem = ({item}) => {
    debugger;
    return (
      <View style={styles.home.categoryContainer}>
        {item?.title && (
          <Text
            style={[
              styles.home.categoryName,
              {
                color: item.color,
              },
            ]}>
            {item.title}
          </Text>
        )}
        {item?.products.map(innerItem => {
          return (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                console.warn(`${innerItem?.name} clicked`);
              }}>
              <View style={styles.home.productContainer}>
                <View>
                  {innerItem?.name && (
                    <Text
                      style={{
                        color: innerItem.disable
                          ? util.colors.grey
                          : util.colors.black,
                      }}>
                      {innerItem.name}
                    </Text>
                  )}

                  {innerItem?.description && (
                    <Text style={styles.home.productDescription}>
                      {innerItem.description}
                    </Text>
                  )}
                </View>
                <View style={styles.home.quantityWrapper}>
                  {innerItem?.price && (
                    <Text style={styles.home.price}>{innerItem.price}</Text>
                  )}
                  {innerItem?.count && (
                    <Text
                      style={[
                        styles.home.price,
                        {
                          color: innerItem.disable
                            ? util.colors.grey
                            : util.colors.black,
                        },
                      ]}>
                      {innerItem.count}
                    </Text>
                  )}
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.home.mainView}>
      <components.Header />
      <View style={styles.home.homeView}>
        <Text style={styles.home.boldText}>To buy later</Text>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => console.warn('Add product clicked')}>
          <Text style={styles.home.addProductsText}>Add product</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.home.contentWrapper}>
        <View style={styles.home.sharedWithContainer}>
          <Text style={{color: util.colors.grey}}>Share with</Text>
          <View>
            <ScrollView
              style={styles.home.scrollViewStyle}
              horizontal
              contentContainerStyle={{alignContent: 'center'}}
              showsHorizontalScrollIndicator={false}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => console.warn('Add new share with clicked')}
                style={styles.home.addNewSharedWith}>
                <Ionicons
                  name="add"
                  size={util.WP(4)}
                  color={util.colors.white}
                />
              </TouchableOpacity>
              {sharedWith.map(shareItem => {
                return (
                  <TouchableOpacity
                    style={[
                      styles.home.addNewSharedWith,
                      styles.home.sharedImageMargin,
                    ]}>
                    <Image
                      style={styles.home.sharedWithImage}
                      source={shareItem.image}
                    />
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        </View>
        <FlatList
          data={products}
          keyExtractor={item => `${item.id}`}
          contentContainerStyle={styles.home.flatListContainer}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};
const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, null)(home);
