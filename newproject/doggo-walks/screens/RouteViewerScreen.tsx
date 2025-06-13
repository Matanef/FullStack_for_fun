import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Polyline, Marker } from 'react-native-maps';

export default function RouteViewerScreen({ route }: any) {
  const { routeData } = route.params;

  if (!routeData?.coordinates?.length) {
    return <Text>No data</Text>;
  }

  const start = routeData.coordinates[0];

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: start.latitude,
        longitude: start.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Marker coordinate={start} title="Start" />
      <Polyline coordinates={routeData.coordinates} strokeColor="#FF6347" strokeWidth={4} />
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
