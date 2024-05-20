import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Movie } from '../interfaces/movieInterface';
import { Detail } from '../screens/Movies/Detail';
import { Home } from '../screens/Movies/Home';

export type RootStackParams = {
  Home: undefined;
  Detail: Movie;
};

const Stack = createStackNavigator<RootStackParams>();

export const MoviesNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};
