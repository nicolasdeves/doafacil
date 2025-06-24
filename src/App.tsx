import { View } from 'react-native';
import { styles } from './styles/styles';
import { useEffect } from 'react';
import analytics from '@react-native-firebase/analytics';
import { addUser } from './services/user/user.service';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import { Icon } from 'react-native-vector-icons/Icon';

function App() {
  useEffect(() => {
    analytics().logEvent('app_opened');
    addUser({
      name: 'Nicolas Deves',
      username: 'nicolasdeves',
    });
  }, []);

  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
}

export default App;
