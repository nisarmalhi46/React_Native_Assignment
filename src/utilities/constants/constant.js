import * as util from '../../utilities';

export const constants = {
  BASEURL: '', // Base URL here
  backgroundImage: require('../../assets/BG.png'),
  authImage: require('../../assets/login.png'),
};

export const sharedWith = [
  {image: require('../../assets/1.jpg')},
  {image: require('../../assets/2.png')},
  {image: require('../../assets/3.jpg')},
];

export const productsData = [
  {
    id: 0,
    title: 'Coffee, Tea & Cocoa',
    products: [
      {
        name: 'Matcha tea',
        count: '',
        description: '',
        price: '',
        disable: false,
      },
    ],
    color: util.colors.purple,
  },
  {
    id: 1,
    title: 'Dairy',
    products: [
      {
        name: 'Yogurt',
        count: 2,
        description: 'Activia',
        price: '',
        disable: false,
      },
    ],
    color: util.colors.yellow,
  },
  {
    id: 2,
    title: 'Fruits',
    products: [
      {
        name: 'Apples',
        count: 5,
        description: '',
        price: '',
        disable: false,
      },
      {
        name: 'Avocado',
        count: 2,
        description: 'Hass',
        price: '$4.20',
        disable: false,
      },
    ],
    color: util.colors.green,
  },
  {
    id: 3,
    title: 'Personal Care & Beauty',
    products: [
      {
        name: 'Facial tissues',
        count: '',
        description: '',
        price: '',
        disable: false,
      },
      {
        name: 'Foundation',
        count: 1,
        description: 'Lancome Teint Idole Ultra Wear, shade 140',
        price: '',
        disable: true,
      },
    ],
    color: util.colors.meron,
  },
  {
    id: 4,
    title: 'Pharmacy',
    products: [
      {
        name: 'Aspirin',
        count: '',
        description: '',
        price: '',
        disable: true,
      },
    ],
    color: util.colors.red,
  },
];
