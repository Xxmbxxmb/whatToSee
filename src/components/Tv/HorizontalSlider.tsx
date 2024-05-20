import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { TvPoster } from './TvPoster';
import { TvShow } from '../../interfaces/showInterface';

interface Props {
  title?: string;
  series: TvShow[];
}

export const HorizontalSlider = ({ title, series }: Props) => {
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
        data={series}
        renderItem={({ item }): any => (
          <TvPoster serie={item} width={140} height={200} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
