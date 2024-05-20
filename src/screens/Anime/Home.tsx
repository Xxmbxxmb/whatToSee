import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  View,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from '@sergiorj/react-native-snap-carousel';
import { HorizontalSlider } from '../../components/Anime/HorizontalSlider';
import { GradientBg } from '../../components/GradientBg';
import { getColors } from '../../helpers/getColors';
import { useAppDispatch } from '../../redux/hooks';
import { setColors } from '../../redux/slices/gradient';
import { useAnimes } from '../../hooks/useAnime';
import { AnimePoster } from '../../components/Anime/AnimePoster';

export const Home = () => {
  const { nowPlaying, popular, upcoming, isLoading } = useAnimes();
  const { top } = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const dispatch = useAppDispatch();

  const getPosterColor = async (index: number) => {
    const serie = nowPlaying[index];
    const poster = serie.images.jpg.large_image_url;

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
              renderItem={({ item }: any) => <AnimePoster anime={item} />}
              sliderWidth={width}
              itemWidth={300}
              inactiveSlideOpacity={0.9}
              onSnapToItem={index => getPosterColor(index)}
            />
          </View>

          {/* Populares */}
          <HorizontalSlider title="Popular" animes={popular} />

          {/* Upcoming */}
          <HorizontalSlider title="Upcoming" animes={upcoming} />
        </View>
      </ScrollView>
    </GradientBg>
  );
};
