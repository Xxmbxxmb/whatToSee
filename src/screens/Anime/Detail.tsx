import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { RootStackParams } from '../../navigation/AnimeNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import { AnimeDetail } from '../../components/Anime/AnimeDetails';
import { useAnimeDetail } from '../../hooks/useAnimeDetail';

interface Props extends StackScreenProps<RootStackParams, 'Detail'> {}

const screenHeight = Dimensions.get('screen').height;

export const Detail = ({ route, navigation }: Props) => {
  const anime = route.params;
  const { isLoading, animeFull } = useAnimeDetail(anime.mal_id);

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image
            source={{
              uri: anime.images.jpg.large_image_url,
            }}
            style={styles.image}
          />
        </View>
      </View>

      <View style={styles.marginContainer}>
        <Text style={styles.subTitle}>{anime.title}</Text>
        <Text style={styles.title}>{anime.title_english}</Text>
      </View>

      {isLoading ? (
        <ActivityIndicator size={35} color={'grey'} style={{ marginTop: 20 }} />
      ) : (
        <AnimeDetail animeFull={animeFull!} />
      )}

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Icon name="chevron-back-outline" size={30} color={'grey'} />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  imageContainer: {
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.6,
    color: 'black',
  },
  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  backButton: {
    position: 'absolute',
    top: 25,
    left: 15,
    zIndex: 999,
    elevation: 9,
  },
});
