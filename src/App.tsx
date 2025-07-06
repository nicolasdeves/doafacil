/* eslint-disable @typescript-eslint/no-unused-vars */
import { styles } from './styles/styles';
import { useEffect } from 'react';
import analytics from '@react-native-firebase/analytics';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryScreen from './screens/CategoryScreen/CategoryScreen';
import { RootStackParamList } from './navigation/types';
import SearchScreen from './screens/SearchScreen/SearchScreen';
import Login from './screens/login/Login';
import CreateCampaign from './screens/Campaign/CreateCapaign';
import MyCampaigns from './screens/MyCampaigns/MyCampaigns';
import Map from './screens/Map/Map';
import ApproveCampaign from './screens/ApproveCampaign/ApproveCampaign';
import Favorite from './screens/Favorites/Favorites';

// Cria o Stack Navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  useEffect(() => {
    analytics().logEvent('app_opened');
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
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="CreateCampaign" component={CreateCampaign} />
          <Stack.Screen name="MyCampaigns" component={MyCampaigns} />
          <Stack.Screen name="Map" component={Map} />
          <Stack.Screen name="ApproveCampaign" component={ApproveCampaign} />
          <Stack.Screen name="Favorite" component={Favorite} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
