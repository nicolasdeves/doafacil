import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import NavBar from "../../components/NavBar/NavBar";

const Map = () => {
  //pegar isso aqui do back das campanhas
  const markers = [
    {
      id: 1,
      latitude: -30.0346,
      longitude: -51.2177,
      title: "Porto Alegre",
      description: "Capital do RS",
    },
    {
      id: 2,
      latitude: -23.5505,
      longitude: -46.6333,
      title: "São Paulo",
      description: "Cidade grande demais kkk",
    },
  ];

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -30.0346,
          longitude: -51.2177,
          latitudeDelta: 10,
          longitudeDelta: 10,
        }}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
          >
            <Callout>
              <View>
                <Text>{marker.title}</Text>
                <Text>{marker.description}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
      <NavBar />
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
