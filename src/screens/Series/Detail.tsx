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
import { RootStackParams } from '../../navigation/TvNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import { useShowDetail } from '../../hooks/useShowDetail';
import { TvDetail } from '../../components/Tv/TvDetail';

interface Props extends StackScreenProps<RootStackParams, 'Detail'> {}

const screenHeight = Dimensions.get('screen').height;

export const Detail = ({ route, navigation }: Props) => {
  const serie = route.params;
  const { isLoading, cast, showFull } = useShowDetail(serie.id);

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${serie.poster_path}`,
            }}
            style={styles.image}
          />
        </View>
      </View>

      <View style={styles.marginContainer}>
        <Text style={styles.subTitle}>{serie.name}</Text>
        <Text style={styles.title}>{serie.original_name}</Text>
      </View>

      {isLoading ? (
        <ActivityIndicator size={35} color={'grey'} style={{ marginTop: 20 }} />
      ) : (
        <TvDetail serieFull={showFull!} cast={cast} />
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
