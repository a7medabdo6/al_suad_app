import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import COLORS from '../../consts/colors';
import font from '../../consts/font';
import NewHomeCard from '../Cards/NewHomeCard';

const LargeCadList = ({data, headText, viewAll = false, onPressViewAll}) => {
  const Item = ({item}) => <NewHomeCard data={item} />;
  return (
    <View >
      <TouchableOpacity onPress={onPressViewAll} style={styles.container}>
        <Text style={styles.headText}>{headText}</Text>
        {viewAll && <Text style={styles.moreView}>View All</Text>}
      </TouchableOpacity>

      <FlatList
        data={data}
        horizontal
        ListHeaderComponent={() => <View style={styles.top} />}
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
