import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';

import styles from './style';

type Props = {
  id: number,
  image: string,
  name: string,
  gender: string,
  species: string,
  status: string,
  showModalCard: boolean,
  callbackShowModalCard: any,
}

const CardModal = ({
  id,
  image,
  name,
  gender,
  species,
  status,
  showModalCard,
  callbackShowModalCard
}: Props) => {
  return (
    <View>
      <Modal
        animationType='slide'
        visible={showModalCard}
        transparent={true}
        onRequestClose={() => callbackShowModalCard(!showModalCard)}
      >
        <View style={styles.modalBackgroud}>
          <Image
            style={styles.modalImage}
            source={{ uri: image }}
          />

          <View>
            <Text style={styles.modalTextDetails}>Name:
              <Text style={styles.modalTextDetailsInternal}>
                {' ' + name}
              </Text>
            </Text>
            <Text style={styles.modalTextDetails}>Gender:
              <Text style={styles.modalTextDetailsInternal}>
                {' ' + gender}
              </Text>
            </Text>
            <Text style={styles.modalTextDetails}>Species:
              <Text style={styles.modalTextDetailsInternal}>
                {' ' + species}
              </Text>
            </Text>
            <Text style={styles.modalTextDetails}>Status:
              <Text style={styles.modalTextDetailsInternal}>
                {' ' + status}
              </Text>
            </Text>
          </View>

          <TouchableOpacity
            style={styles.modalCloseButton}
            onPress={() => callbackShowModalCard(!showModalCard)}
          >
            <Text
              style={styles.modalCloseButtonText}
            >Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

export default CardModal;