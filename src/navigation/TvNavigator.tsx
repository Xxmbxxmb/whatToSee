import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Detail } from '../screens/Series/Detail';
import { Home } from '../screens/Series/Home';
import { TvShow } from '../interfaces/showInterface';

export type RootStackParams = {
  Series: undefined;
  Detail: TvShow;
};

const Stack = createStackNavigator<RootStackParams>();

export const TvNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Series" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};
