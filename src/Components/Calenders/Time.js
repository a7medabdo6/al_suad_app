import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import COLORS from '../../consts/colors';

const Time = ({bgcolor}) => {
  return (
    <View style={{...styles.timeBox, backgroundColor: bgcolor}}>
      <Text style={styles.time}>11:00 am</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  time: {
    color: COLORS.dark,
    fontWeight: 'bold',
  },
  timeBox: {
    paddingHorizontal: 15,
    borderColor: COLORS.grey,
    borderRadius: 10,
    paddingVertical: 10,
    margin: 5,
  },
});
export default Time;
