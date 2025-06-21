import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { styles } from './styles/styles';
import { useEffect } from 'react';
import analytics from '@react-native-firebase/analytics';
import { addUser } from './services/user/user.service';

function App() {

  useEffect(() => {
    analytics().logEvent('app_opened');
    addUser({
      name: 'Nicolas Deves',
      username: 'nicolasdeves'
    })
  }, []);

  return (
    <View style={styles.container}>
      <Text> eeeeeeeeeeeee</Text>
    </View>
  );
}



export default App;
