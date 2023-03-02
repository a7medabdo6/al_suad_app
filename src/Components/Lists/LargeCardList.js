import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import COLORS from '../../consts/colors';
import font from '../../consts/font';
import NewHomeCard from '../Cards/NewHomeCard';

const LargeCadList = ({data, headText}) => {
  const Item = ({item}) => <NewHomeCard />;
  return (
    <View>
      <Text style={styles.headText}>{headText}</Text>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={Item}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default LargeCadList;

const styles = StyleSheet.create({
  headText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.black,
    marginVertical: font.xl,
    marginHorizontal: font.xl,
  },
});
