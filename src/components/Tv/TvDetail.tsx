import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Cast } from '../../interfaces/castInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import { CastDetail } from '../CastDetail';
import { ShowFull } from '../../interfaces/showInterface';

interface Props {
  serieFull: ShowFull;
  cast: Cast[];
}

export const TvDetail = ({ serieFull, cast }: Props) => {
  return (
    <>
      {/* Detalles */}
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: 'black' }}>
            <Icon name="star-outline" size={16} color={'grey'} />
            <Text> {serieFull.vote_average.toFixed(1)}</Text>
            <Text> - {serieFull.genres.map(g => g.name).join(', ')}</Text>
          </Text>
        </View>

        {/* Historia */}
        <Text
          style={{
            fontSize: 23,
            marginTop: 12,
            color: 'black',
            fontWeight: 'bold',
          }}>
          Historia
        </Text>
        <Text style={{ color: 'black', fontSize: 16 }}>
          {serieFull.overview}
        </Text>
        {/* <Text
          style={{
            fontSize: 23,
            marginTop: 12,
            color: 'black',
            fontWeight: 'bold',
          }}>
          Presupuesto
        </Text>
        <Text style={{ color: 'black' }}>
          {currencyFormatter.format(serieFull.budget, { code: 'USD' })}
        </Text> */}

        {/* Casting */}
      </View>
      <View style={{ marginTop: 10, marginBottom: 100 }}>
        <Text
          style={{
            fontSize: 23,
            marginTop: 10,
            fontWeight: 'bold',
            color: 'black',
            marginHorizontal: 20,
          }}>
          Actores
        </Text>
        <FlatList
          style={{ marginVertical: 10, height: 70 }}
          data={cast}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <CastDetail actor={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </>
  );
};
