import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Detail } from '../screens/Anime/Detail';
import { Home } from '../screens/Anime/Home';
import { Anime } from '../interfaces/animeInterface';

export type RootStackParams = {
  Animes: undefined;
  Detail: Anime;
};

const Stack = createStackNavigator<RootStackParams>();

export const AnimeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Animes" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};
