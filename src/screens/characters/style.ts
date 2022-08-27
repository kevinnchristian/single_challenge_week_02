import {
  Dimensions,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
  },
  title: {
    color: '#05F2AF',
    fontSize: 42,
    fontFamily: 'get_schwifty',
    textShadowColor: '#F2D64B',
    textShadowOffset: { width: -2, height: 1.8 },
    textShadowRadius: 6,
    paddingVertical: 20,
  }
});

export default styles;