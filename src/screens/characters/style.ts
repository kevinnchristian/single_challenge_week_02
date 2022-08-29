import {
  Dimensions,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: Dimensions.get('window').width,
  },
  contentButtonsFilters: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentCards: {
    alignSelf: 'center',
  },
  title: {
    alignSelf: 'center',
    color: '#05F2AF',
    fontSize: 44,
    fontFamily: 'get_schwifty',
    textShadowColor: '#F2D64B',
    textShadowOffset: { width: -2, height: 1.8 },
    textShadowRadius: 4,
    paddingVertical: 24,
  },
  buttonAll: {
    backgroundColor: '#F2D64B',
    borderRadius: 6,
    color: '#02051b',
    marginHorizontal: 5,
    paddingHorizontal: 18,
    paddingVertical: 7,
  },
  buttonFavorites: {
    backgroundColor: '#05F2AF',
    borderRadius: 6,
    color: '#02051b',
    marginHorizontal: 5,
    paddingHorizontal: 18,
    paddingVertical: 7,
  },
  buttonClearFavorites: {
    backgroundColor: '#B65CF2',
    borderRadius: 6,
    color: '#02051b',
    marginHorizontal: 5,
    paddingHorizontal: 18,
    paddingVertical: 7,
  },
  textButtons: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textEmpty: {
    alignSelf: 'center',
    color: '#E5EAEF',
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: (Dimensions.get('window').height / 2) - 100,
  }
});

export default styles;