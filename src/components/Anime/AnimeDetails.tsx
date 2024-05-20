import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AnimeFull } from '../../interfaces/animeInterface';

interface Props {
  animeFull: AnimeFull;
}

export const AnimeDetail = ({ animeFull }: Props) => {
  const { score, genres } = animeFull;
  return (
    <>
      {/* Detalles */}
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: 'black' }}>
            <Icon name="star-outline" size={16} color={'grey'} />
            <Text> {score ? score.toFixed(1) : 'Unrated'}</Text>
            <Text> - {genres.map(g => g.name).join(', ')}</Text>
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
          {animeFull.synopsis}
        </Text>
      </View>
    </>
  );
};
