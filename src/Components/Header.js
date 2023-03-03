import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import COLORS from '../consts/colors';
import {useNavigation} from '@react-navigation/native';

const Header = ({title, back = false, style}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
      style={[styles.container, {paddingHorizontal: back ? 0 : 15, ...style}]}>
      {back && (
        <Icon
          name="chevron-back"
          size={20}
          color={'black'}
          style={styles.back}
        />
      )}

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
  },
  title: {fontWeight: 'bold', fontSize: 15, color: 'black'},
  back: {marginHorizontal: 10},
});
