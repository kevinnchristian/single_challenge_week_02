import {
  View,
  Text,
  FlatList,
} from 'react-native';
import { useQuery } from '@apollo/client';

import INFO_PERSON from '../../queries';

import Card from '../../components/card';
import styles from './style';

const Characters = () => {
  const { loading, error, data } = useQuery(INFO_PERSON);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rick Morty Redux</Text>
      {loading && <Text>Loading...</Text>}
      {error && <Text>Error.</Text>}
      {data &&
        < FlatList
          data={data.characters.results}
          renderItem={({ item }) => <Card
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            gender={item.gender == 'unknown' ? 'Unknown' : item.gender}
            species={item.species == 'unknown' ? 'Unknown' : item.species}
            status={item.status == 'unknown' ? 'Unknown' : item.status}
          />}
          keyExtractor={item => item.id}
        />
      }
    </View>
  );
}

export default Characters;