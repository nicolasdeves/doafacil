import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { makeNavigation } from './make-navigation';
import { useRoute } from '@react-navigation/native';

const NavBar = () => {
  const navigation = makeNavigation();
  const route = useRoute();

  const goLogin = async () => {
    navigation.navigate('Login');
  };

  const goHome = async () => {
    navigation.navigate('Home');
  };

  const goMap = async () => {
    navigation.navigate('Map');
  };

  const getIconColor = (routeName: string) =>
    route.name === routeName ? '#4CAF50' : '#999999';

  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity style={styles.navItem}>
        <Icon
          name="home"
          size={24}
          color={getIconColor('Home')}
          onPress={goHome}
        />
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.navItem}>
        <Icon
          name="notifications"
          size={24}
          color={getIconColor('Notifications')}
        />
      </TouchableOpacity> */}
      <TouchableOpacity style={styles.navItem}>
        <Icon
          name="map"
          size={24}
          color={getIconColor('Map')}
          onPress={goMap}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Icon name="bookmark" size={24} color={getIconColor('Bookmark')} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Icon
          name="person"
          size={24}
          color={getIconColor('Login')}
          onPress={goLogin}
        />
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
});
