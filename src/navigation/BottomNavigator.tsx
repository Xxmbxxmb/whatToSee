import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MoviesNavigator } from './MoviesNavigator';
import { Platform } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { TvNavigator } from './TvNavigator';
import { AnimeNavigator } from './AnimeNavigator';

export const Tabs = () => {
  return Platform.OS === 'ios' ? (
    <BottomTabNavigatorIOS />
  ) : (
    <BottomTabNavigatorAndroid />
  );
};

const BottomTabAndroid = createMaterialBottomTabNavigator();
const BottomTabNavigatorAndroid = () => {
  return (
    <BottomTabAndroid.Navigator barStyle={{ backgroundColor: 'white' }}>
      <BottomTabAndroid.Screen
        name="MoviesNavigator"
        component={MoviesNavigator}
        options={{
          title: 'Movies',
          tabBarIcon: props => (
            <FontAwesome5Icon name="film" color={props.color} size={18} />
          ),
        }}
      />
      <BottomTabAndroid.Screen
        name="TvNavigator"
        component={TvNavigator}
        options={{
          title: 'TV Shows',
          tabBarIcon: props => (
            <FontAwesome5Icon name="tv" color={props.color} size={18} />
          ),
        }}
      />
      <BottomTabAndroid.Screen
        name="AnimeNavigator"
        component={AnimeNavigator}
        options={{
          title: 'Anime',
          tabBarIcon: props => (
            <FontAwesome5Icon name="user-ninja" color={props.color} size={18} />
          ),
        }}
      />
    </BottomTabAndroid.Navigator>
  );
};

const BottomTabIOS = createBottomTabNavigator();
const BottomTabNavigatorIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{ backgroundColor: 'white' }}
      screenOptions={{
        headerShown: false,
        tabBarStyle: { borderTopColor: 'red', borderTopWidth: 0, elevation: 0 },
      }}>
      <BottomTabIOS.Screen
        name="MoviesNavigator"
        options={{
          title: 'Movies',
          tabBarIcon: props => (
            <FontAwesome5Icon name="film" color={props.color} />
          ),
        }}
        component={MoviesNavigator}
      />
      <BottomTabIOS.Screen
        name="TvNavigator"
        options={{
          title: 'TV Shows',
          tabBarIcon: props => (
            <FontAwesome5Icon name="tv" color={props.color} />
          ),
        }}
        component={TvNavigator}
      />
      <BottomTabIOS.Screen
        name="AnimeNavigator"
        options={{
          title: 'Anime',
          tabBarIcon: props => (
            <FontAwesome5Icon name="user-ninja" color={props.color} />
          ),
        }}
        component={AnimeNavigator}
      />
    </BottomTabIOS.Navigator>
  );
};
