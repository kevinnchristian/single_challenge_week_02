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
    paddingVertical: 20,
  }
});

export default styles;