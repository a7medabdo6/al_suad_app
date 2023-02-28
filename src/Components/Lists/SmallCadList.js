import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SmallCard from '../Cards/SmallCard';

const SmallCadList = ({data}) => {
  const Item = ({item}) => (
    <SmallCard title={item.title} img={item.image} dec={item.dec} />
  );
  return (
    <View>
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

export default SmallCadList;

const styles = StyleSheet.create({});
