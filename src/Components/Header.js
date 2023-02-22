import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import COLORS from '../consts/colors';
const Header = ({title, back = false}) => {
  return (
    <View style={styles.container}>
      {back && <Icon name="chevron-back" size={20} />}

      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingBottom: 10,
  },
  title: {fontWeight: 'bold', fontSize: 15, color: 'black'},
});
