import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  View,
  // StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMovies } from '../../hooks/useMovies';
import Carousel from '@sergiorj/react-native-snap-carousel';
import { MoviePoster } from '../../components/Movies/MoviePoster';
import { HorizontalSlider } from '../../components/Movies/HorizontalSlider';
import { GradientBg } from '../../components/GradientBg';
import { getColors } from '../../helpers/getColors';
import { useAppDispatch } from '../../redux/hooks';
import { setColors } from '../../redux/slices/gradient';

export const Home = () => {
  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const dispatch = useAppDispatch();

  const getPosterColor = async (index: number) => {
    const movie = nowPlaying[index];
    const poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

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
              renderItem={({ item }: any) => <MoviePoster movie={item} />}
              sliderWidth={width}
              itemWidth={300}
              inactiveSlideOpacity={0.9}
              onSnapToItem={index => getPosterColor(index)}
            />
          </View>

          {/* Populares */}
          <HorizontalSlider title="Popular" movies={popular} />
          {/* TopRated */}
          <HorizontalSlider title="Top Rated" movies={topRated} />
          {/* Upcoming */}
          <HorizontalSlider title="Upcoming" movies={upcoming} />
        </View>
      </ScrollView>
    </GradientBg>
  );
};

// const styles = StyleSheet.create({
//   image: {
//     width: 150,
//     height: 200,
//     borderRadius: 25,
//   },
// });
