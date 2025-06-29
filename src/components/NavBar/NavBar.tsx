import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { makeNavigation } from './make-navigation';

const NavBar = () => {
  const navigation = makeNavigation();

  const goLogin = async() => {
    navigation.navigate("Login")
  }

  const goHome = async() => {
    navigation.navigate("Home")
  }
  
  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity style={styles.navItem}>
        <Icon name="home" size={24} color="#4CAF50" onPress={goHome} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Icon name="notifications" size={24} color="#999" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Icon name="bookmark" size={24} color="#999" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Icon name="person" size={24} color="#999" onPress={goLogin}/>
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
