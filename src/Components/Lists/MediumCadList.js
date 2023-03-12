import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import COLORS from '../../consts/colors';
import font from '../../consts/font';
import MediumCard from '../Cards/MediumCard';
import {useNavigation} from '@react-navigation/native';

const MediumCadList = ({data, headText}) => {
  const navigation = useNavigation();
  const Item = ({item}) => (
    <MediumCard
      onPress={() => navigation.push('houses')}
      title={item.display_name}
      img={item.bg}
      dec={item.dec}
    />
  );
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

export default MediumCadList;

const styles = StyleSheet.create({
  headText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.black,
    marginVertical: font.xl,
    marginHorizontal: font.xl,
  },
});
