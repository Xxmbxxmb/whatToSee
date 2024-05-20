import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { TvShow } from '../../interfaces/showInterface';

interface Props {
  serie: TvShow;
  height?: number;
  width?: number;
}

export const TvPoster = ({ serie, height = 420, width = 300 }: Props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Detail' as never, serie as never)}
      activeOpacity={0.6}
      style={{
        width,
        height,
        marginHorizontal: 2,
        paddingBottom: 20,
        paddingHorizontal: 7,
      }}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${serie.poster_path}`,
          }}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 20,
  },
  imageContainer: {
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
});
