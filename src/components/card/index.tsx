import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';

import { changeFavoriteState } from '../../store/modules/characters/reducer';

import CardModal from '../cardModal';

import { FontAwesome } from '@expo/vector-icons'
import styles from './style';

type Props = {
  id: number,
  name: string,
  species: string,
  gender: string,
  image: string,
  status: string,
  favorite: boolean,
}

const Card = ({
  id,
  image,
  name,
  gender,
  species,
  status,
  favorite,
}: Props) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <LinearGradient
        style={styles.cardBody}
        colors={['#02051b22', '#b65cf22b', '#B65CF2']}
      >
        <TouchableOpacity style={styles.cardStar}>
          <FontAwesome
            name='star'
            size={44}
            color={favorite ? '#F2D64B' : '#e5eaef90'}
            onPress={() => dispatch(changeFavoriteState(id))}
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
      </LinearGradient>
    </>
  );
}

export default Card;