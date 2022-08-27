import {
  Dimensions,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  cardBody: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width - 150,
    borderRadius: 10,
    marginVertical: 20,
    paddingHorizontal: 5,
    paddingTop: 5,
    paddingBottom: 10,
    position: 'relative',
  },
  cardStar: {
    elevation: 10,
    position: 'absolute',
    top: -2,
    right: 6,
    zIndex: 5,
  },
  cardImage: {
    height: 185,
    width: 185,
    borderRadius: 100,
    elevation: 10,
  },
  cardTextBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15
  },
  cardTextName: {
    color: '#F4F4F6',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  cardText: {
    color: '#F2D64B',
    fontSize: 15,
    fontWeight: '500',
  },
  cardDetailsButton: {
    backgroundColor: '#05F2AF',
    borderRadius: 4,
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 6
  },
  cardTextDetailsButton: {
    color: '#0C1440',
    fontSize: 13,
    fontWeight: 'bold'
  },
});

export default styles;