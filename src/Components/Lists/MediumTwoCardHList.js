import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import MediumTwoCardH from '../Cards/MediumTwoCardH';
import COLORS from '../../consts/colors';
import font from '../../consts/font';

const MediumTwoCardHList = ({data, onPressViewAll, headText, viewAll}) => {
  const Item = ({item}) => <MediumTwoCardH data={item} />;
  return (
    <View>
      <TouchableOpacity onPress={onPressViewAll} style={styles.container}>
        <Text style={styles.headText}>{headText}</Text>
        {viewAll && <Text style={styles.moreView}>View All</Text>}
      </TouchableOpacity>
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

export default MediumTwoCardHList;

const styles = StyleSheet.create({
  headText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.black,
    marginVertical: font.xl,
    marginHorizontal: font.xl,
  },
  top: {width: 10},
  moreView: {
    color: COLORS.blue,
    fontSize: 12,
    marginHorizontal: 15,
  },
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
