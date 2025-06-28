import { styles } from './styles/styles';
import { useEffect } from 'react';
import analytics from '@react-native-firebase/analytics';
import { addUser } from './services/user/user.service';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import { SafeAreaView } from 'react-native-safe-area-context';

function App() {
  useEffect(() => {
    analytics().logEvent('app_opened');
    addUser({
      name: 'Nicolas Deves',
      username: 'nicolasdeves',
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
    </SafeAreaView>
  );
}

export default App;
