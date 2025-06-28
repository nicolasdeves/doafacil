/* eslint-disable @typescript-eslint/no-unused-vars */
import { styles } from './styles/styles';
import { useEffect } from 'react';
import analytics from '@react-native-firebase/analytics';
import { addUser } from './services/user/user.service';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryScreen from './screens/CategoryScreen/CategoryScreen';
import { RootStackParamList } from './navigation/types';
import SearchScreen from './screens/SearchScreen/SearchScreen';

// Cria o Stack Navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

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
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }} // Oculta o nome da tela
        >
          {/* Para registrar as rotas, basta adicionar uma tag abaixo destas */}
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Category" component={CategoryScreen} />
          <Stack.Screen name="Search" component={SearchScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
