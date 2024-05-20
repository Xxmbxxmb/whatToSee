/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { useEffect } from 'react';
import { useFade } from '../hooks/useFade';
import { setPrevColors } from '../redux/slices/gradient';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const GradientBg = ({ children }: Props) => {
  const { colors, prevColors } = useAppSelector(state => state.gradient);
  const { opacity, fadeIn, fadeOut } = useFade();
  const dispatch = useAppDispatch();

  useEffect(() => {
    fadeIn(() => {
      dispatch(setPrevColors(colors));
      fadeOut(200);
    });
  }, [colors]);

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={[prevColors.primary, prevColors.secondary, 'white']}
        style={{ ...StyleSheet.absoluteFillObject }}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 0.6, y: 0.6 }}
      />

      <Animated.View
        style={{
          ...StyleSheet.absoluteFillObject,
          opacity: opacity,
        }}>
        <LinearGradient
          colors={[colors.primary, colors.secondary, 'white']}
          style={{ ...StyleSheet.absoluteFillObject }}
          start={{ x: 0.1, y: 0.1 }}
          end={{ x: 0.6, y: 0.6 }}
        />
      </Animated.View>
      {children}
    </View>
  );
};
