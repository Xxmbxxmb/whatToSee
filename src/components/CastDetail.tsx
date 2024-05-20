import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Cast } from '../interfaces/castInterface';

interface Props {
  actor: Cast;
}

export const CastDetail = ({ actor }: Props) => {
  return (
    <View style={styles.container}>
      {actor.profile_path && (
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${actor.profile_path}`,
          }}
          style={{ width: 50, height: 50, borderRadius: 10 }}
        />
      )}

      <View style={{ marginLeft: 10 }}>
        <Text style={styles.name}>{actor.name}</Text>
        <Text style={styles.character}>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: 'white',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
    marginRight: 5,
    paddingRight: 10,
    borderRadius: 10,
    marginLeft: 20,
  },
  name: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  character: { color: 'black', fontSize: 16, fontWeight: 'bold', opacity: 0.7 },
});
