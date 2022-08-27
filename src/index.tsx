import {
  ActivityIndicator,
  Dimensions,
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { useFonts } from 'expo-font';

import Characters from './screens/characters';

const AppStartup = () => {
  const [fontsLoaded] = useFonts({
    'get_schwifty': require('./assets/fonts/get_schwifty.ttf')
  });

  return (
    <SafeAreaView>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <View style={styles.container}>
        {
          fontsLoaded ?
            <Characters />
            :
            <ActivityIndicator
              size="large"
              color="#E5EAEF"
              style={{ paddingTop: Dimensions.get('window').height / 2 }}
            />
        }
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#160A40',
    paddingTop: 24,
  }
});

export default AppStartup;