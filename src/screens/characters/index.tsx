import {
  ActivityIndicator,
  Dimensions,
  View,
  Text,
  ScrollView,
  Button,
  TouchableOpacity,
} from 'react-native';
import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';

import { changeInitialState, charactersStateData } from '../../store/modules/characters/reducer';

import INFO_PERSON from '../../queries';

import Card from '../../components/card';
import styles from './style';

const Characters = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useQuery(INFO_PERSON);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  function parseData() {
    const resultsQuery = [];
    data && data.characters.results.map((item: any) => {
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
  }

  useEffect(() => {
    parseData();
  }, [data]);

  const character = useSelector(charactersStateData);

  return (
    <ScrollView
      showsVerticalScrollIndicator={true}
      style={styles.container}
    >
      <Text style={styles.title}>Rick Morty Redux</Text>
      {character.length > 0 && (
        <View style={styles.contentButtonsFilters}>
          <TouchableOpacity
            style={styles.buttonAll}
            onPress={() => setShowOnlyFavorites(false)}
          >
            <Text style={styles.textButtons}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonFavorites}
            onPress={() => setShowOnlyFavorites(true)}
          >
            <Text style={styles.textButtons}>Favorites</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonClearFavorites}
            onPress={() => {
              if (character.length > 0) {
                parseData();
                setShowOnlyFavorites(false);
              }
            }}
          >
            <Text style={styles.textButtons}>Clear Favorites</Text>
          </TouchableOpacity>
        </View>
      )}

      {loading && <ActivityIndicator
        size="large"
        color="#E5EAEF"
        style={{ paddingTop: (Dimensions.get('window').height / 2) - 100 }}
      />}

      {error &&
        <Text
          style={{
            color: '#E5EAEF',
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
            paddingTop: (Dimensions.get('window').height / 2) - 100
          }}
        >
          {`Error: ${error.message}`}
        </Text>
      }

      <View style={styles.contentCards}>
        {showOnlyFavorites ? character?.find(item => item.favorite) ?
          character?.map((item, index) => {
            if (item.favorite) {
              return (
                <Card
                  key={index}
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  gender={item.gender == 'unknown' ? 'Unknown' : item.gender}
                  species={item.species == 'unknown' ? 'Unknown' : item.species}
                  status={item.status == 'unknown' ? 'Unknown' : item.status}
                  favorite={item.favorite}
                />)
            }
          })
          :
          (<Text style={styles.textEmpty}>Favorites empty.</Text>)
          :
          character && character?.map((item, index) => (
            <Card
              key={index}
              id={item.id}
              image={item.image}
              name={item.name}
              gender={item.gender == 'unknown' ? 'Unknown' : item.gender}
              species={item.species == 'unknown' ? 'Unknown' : item.species}
              status={item.status == 'unknown' ? 'Unknown' : item.status}
              favorite={item.favorite}
            />))
        }
      </View>
    </ScrollView>
  );
}

export default Characters;