import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { MovieFull } from '../../interfaces/movieInterface';
import { Cast } from '../../interfaces/castInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import { CastDetail } from '../CastDetail';
import { currencyFormat } from '../../helpers/currencyFormater';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({ movieFull, cast }: Props) => {
  return (
    <>
      {/* Detalles */}
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: 'black' }}>
            <Icon name="star-outline" size={16} color={'grey'} />
            <Text> {movieFull.vote_average.toFixed(1)}</Text>
            <Text> - {movieFull.genres.map(g => g.name).join(', ')}</Text>
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
          {movieFull.overview}
        </Text>
        <Text
          style={{
            fontSize: 23,
            marginTop: 12,
            color: 'black',
            fontWeight: 'bold',
          }}>
          Presupuesto
        </Text>
        <Text style={{ color: 'black' }}>
          {currencyFormat(movieFull.budget)}
        </Text>

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
