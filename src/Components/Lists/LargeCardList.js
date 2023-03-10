import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import COLORS from '../../consts/colors';
import font from '../../consts/font';
import NewHomeCard from '../Cards/NewHomeCard';

const LargeCadList = ({
  data,
  headText,
  viewAll = false,
  onPressViewAll,
  horizontal = true,
  isFav,
  spaceDown = false,
  ListFooterComponent,
}) => {
  const Item = ({item}) => (
    <NewHomeCard data={item} horizontal={horizontal} isFav={isFav} />
  );
  return (
    <View>
      <TouchableOpacity onPress={onPressViewAll} style={styles.container}>
        <Text style={styles.headText}>{headText}</Text>
        {viewAll && <Text style={styles.moreView}>View All</Text>}
      </TouchableOpacity>

      <FlatList
        data={data}
        horizontal={horizontal}
        ItemSeparatorComponent={() => (
          <View style={{marginTop: horizontal ? 0 : 10}} />
        )}
        ListHeaderComponent={() => <View style={styles.top} />}
        showsHorizontalScrollIndicator={false}
        renderItem={Item}
        ListFooterComponent={ListFooterComponent}
        keyExtractor={item => item.id}
      />
      {spaceDown && <View style={styles.down} />}
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
  down: {height: font.height * 0.18},
});
