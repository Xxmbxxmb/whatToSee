import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { AnimePoster } from './AnimePoster';
import { Anime } from '../../interfaces/animeInterface';

interface Props {
  title?: string;
  animes: Anime[];
}

export const HorizontalSlider = ({ title, animes }: Props) => {
  return (
    <View style={{ height: title ? 260 : 220 }}>
      {title && (
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            marginLeft: 10,
            color: 'black',
          }}>
          {title}
        </Text>
      )}

      <FlatList
        data={animes}
        renderItem={({ item }): any => (
          <AnimePoster anime={item} width={140} height={200} />
        )}
        keyExtractor={item => item.mal_id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
