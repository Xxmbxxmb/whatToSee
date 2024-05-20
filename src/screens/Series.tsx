import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from '@sergiorj/react-native-snap-carousel';
import { TvPoster } from '../components/Tv/TvPoster';
import { HorizontalSlider } from '../components/Tv/HorizontalSlider';
import { GradientBg } from '../components/GradientBg';
import { getColors } from '../helpers/getColors';
import { useAppDispatch } from '../redux/hooks';
import { setColors } from '../redux/slices/gradient';
import { useSeries } from '../hooks/useSeries';

export const Series = () => {
  const { nowPlaying, popular, topRated, isLoading } = useSeries();
  const { top } = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const dispatch = useAppDispatch();

  const getPosterColor = async (index: number) => {
    const serie = nowPlaying[index];
    const poster = `https://image.tmdb.org/t/p/w500${serie.poster_path}`;

    const [primary = 'green', secondary = 'orange'] = await getColors(poster);
    dispatch(setColors({ primary, secondary }));
  };

  useEffect(() => {
    if (nowPlaying.length > 0) {
      getPosterColor(0);
    }
  }, [nowPlaying]);

  if (isLoading === true) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator color={'grey'} size={40} />
      </View>
    );
  }

  return (
    <GradientBg>
      <ScrollView>
        <View style={{ marginTop: top + 20 }}>
          {/* Carousel */}
          <View style={{ height: 440 }}>
            <Carousel
              data={nowPlaying}
              renderItem={({ item }: any) => <TvPoster serie={item} />}
              sliderWidth={width}
              itemWidth={300}
              inactiveSlideOpacity={0.9}
              onSnapToItem={index => getPosterColor(index)}
            />
          </View>

          {/* Populares */}
          <HorizontalSlider title="Popular" series={popular} />
          {/* TopRated */}
          <HorizontalSlider title="Top Rated" series={topRated} />
        </View>
      </ScrollView>
    </GradientBg>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 200,
    borderRadius: 25,
  },
});
