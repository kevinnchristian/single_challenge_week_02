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
    backgroundColor: '#B65CF2',
    borderRadius: 10,
    margin: 12,
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
  cardImage: {
    height: 200,
    width: 220,
    borderRadius: 4
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
    marginTop: 15,
    marginBottom: 5,
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