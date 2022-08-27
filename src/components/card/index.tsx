import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useState } from 'react';

import { ICharacter } from '../../types';
import CardModal from '../cardModal';

import { FontAwesome } from '@expo/vector-icons'
import styles from './style';

const Card = ({
  id,
  image,
  name,
  gender,
  species,
  status,
  favorite,
}: ICharacter) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.cardBody}>
      <TouchableOpacity>
        <FontAwesome
          name='star'
          size={32}
          color={favorite ? '#F2D64B' : '#e5eaef97'}
        />
      </TouchableOpacity>

      <Image
        style={styles.cardImage}
        source={{ uri: image }}
      />

      <View style={styles.cardTextBox}>
        <Text
          style={styles.cardTextName}
          numberOfLines={1}
        >{name}</Text>
        <Text style={styles.cardText}> {gender} </Text>

        <TouchableOpacity
          style={styles.cardDetailsButton}
          onPress={() => setShowModal(!showModal)}
        >
          <Text style={styles.cardTextDetailsButton}>Details</Text>
        </TouchableOpacity>
      </View>

      <CardModal
        id={id}
        image={image}
        name={name}
        gender={gender}
        species={species}
        status={status}
        showModalCard={showModal}
        callbackShowModalCard={(value: boolean) => setShowModal(value)}
      />
    </View >
  );
}

export default Card;