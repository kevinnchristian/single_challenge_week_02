import {
  ActivityIndicator,
  Dimensions,
  View,
  Text,
  ScrollView,
} from 'react-native';
import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';

import { changeInitialState, charactersStateData } from '../../store/modules/characters/reducer';

import INFO_PERSON from '../../queries';

import Card from '../../components/card';
import styles from './style';

const Characters = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useQuery(INFO_PERSON);

  useEffect(() => {
    let resultsQuery = [];
    data && data.characters.results.map(item => {
      let newObject = {
        id: item.id,
        name: item.name,
        image: item.image,
        gender: item.gender,
        species: item.species,
        status: item.status,
        favorite: false,
      };

      resultsQuery.push(newObject);
    });

    resultsQuery && dispatch(changeInitialState(resultsQuery));
  }, [data]);

  const character = useSelector(charactersStateData);

  return (
    <ScrollView
      showsVerticalScrollIndicator={true}
      style={styles.container}
    >
      <Text style={styles.title}>Rick Morty Redux</Text>
      {loading && <ActivityIndicator
        size="large"
        color="#E5EAEF"
        style={{ paddingTop: (Dimensions.get('window').height / 2) - 100 }}
      />}
      {error && <Text style={{ color: '#E5EAEF' }}>Error.</Text>}
      <View style={styles.contentCards}>
        {character && character.map((item, index) => (
          <Card
            key={index}
            id={item.id}
            image={item.image}
            name={item.name}
            gender={item.gender == 'unknown' ? 'Unknown' : item.gender}
            species={item.species == 'unknown' ? 'Unknown' : item.species}
            status={item.status == 'unknown' ? 'Unknown' : item.status}
            favorite={item.favorite}
          />
        ))}
      </View>
    </ScrollView>
  );
}

export default Characters;