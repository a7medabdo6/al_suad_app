import {Dimensions} from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const WHITE = 'white';
const GREY = '#EEEEEE';
const RADIUS = 16;
const BLUE = '#185894';
const DARKGREY = '#969494';
const OREANGE = '#E9612F';

export default {
  WIDTH,
  HEIGHT,
  isSmallDevice: WIDTH < 375,
  GREY,
  WHITE,
  BLUE,
  RADIUS,
  DARKGREY,
  OREANGE,
};
