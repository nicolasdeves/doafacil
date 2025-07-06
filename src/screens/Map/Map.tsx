import React, { useEffect, useState } from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import NavBar from "../../components/NavBar/NavBar";
import { getActiveCampaigns } from "../../services/campaign/campaign.service";

const Map = () => {
  const [markers, setMarkers] = useState<any[]>([]);

  const fetchMarkers = async () => {
    const campaigns = await getActiveCampaigns();
    setMarkers(campaigns);
  }

  useEffect(() => {
    fetchMarkers();
  }, [])

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -30.0346,
          longitude: -51.2177,
          latitudeDelta: 5,
          longitudeDelta: 10,
        }}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={{
              latitude: Number(marker.latitude),
              longitude: Number(marker.longitude),
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
