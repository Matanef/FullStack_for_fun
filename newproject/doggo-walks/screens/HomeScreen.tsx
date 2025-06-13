import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, TextInput, Button, KeyboardAvoidingView, Platform } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen() {
  const [location, setLocation] = useState<Location.LocationObjectCoords | null>(null);
  const [distance, setDistance] = useState<string>('1000');
  const [routeName, setRouteName] = useState<string>('');
  const [generatedRoute, setGeneratedRoute] = useState<{ latitude: number; longitude: number }[]>([]);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission denied', 'Location access is needed to use the app.');
        return;
      }

      const loc = await Location.getCurrentPositionAsync({});
      setLocation(loc.coords);
    })();
  }, []);

  const generateRandomLoopRoute = () => {
    if (!location) return;

    const startLat = location.latitude;
    const startLng = location.longitude;
    const targetMeters = parseFloat(distance);
    const metersToDegrees = 0.000009;

    let totalDistance = 0;
    let angle = Math.random() * 2 * Math.PI;
    let current = { latitude: startLat, longitude: startLng };
    const route = [current];

    while (totalDistance < targetMeters) {
      const step = 100 + Math.random() * 100;
      angle += (Math.random() - 0.5) * (Math.PI / 4);

      const dx = Math.cos(angle) * step * metersToDegrees;
      const dy = Math.sin(angle) * step * metersToDegrees;

      const next = {
        latitude: current.latitude + dy,
        longitude: current.longitude + dx,
      };

      route.push(next);
      current = next;
      totalDistance += step;
    }

    route.push({ latitude: startLat, longitude: startLng });

    setGeneratedRoute(route);
  };

  const saveRoute = async () => {
    if (!generatedRoute.length) {
      Alert.alert('No route to save!');
      return;
    }

    if (!routeName.trim()) {
      Alert.alert('Please enter a name for the route.');
      return;
    }

    const newRoute = {
      name: routeName,
      distance: parseFloat(distance),
      coordinates: generatedRoute,
      createdAt: new Date().toISOString(),
    };

    try {
      const existing = await AsyncStorage.getItem('saved_routes');
      const routes = existing ? JSON.parse(existing) : [];

      routes.push(newRoute);
      await AsyncStorage.setItem('saved_routes', JSON.stringify(routes));
      Alert.alert('Route saved!', `Saved as "${routeName}"`);
      setRouteName('');
    } catch (e) {
      console.error('Error saving route:', e);
      Alert.alert('Error', 'Failed to save the route.');
    }
  };

  if (!location) {
    return (
      <View style={styles.center}>
        <Text>Getting location...</Text>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View style={styles.controls}>
        <Text>Enter Distance (in meters):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={distance}
          onChangeText={setDistance}
        />

        <Button title="Generate Route" onPress={generateRandomLoopRoute} />

        <TextInput
          style={styles.input}
          placeholder="Name this route"
          value={routeName}
          onChangeText={setRouteName}
        />

        <Button title="Save This Route" onPress={saveRoute} />
      </View>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker coordinate={location} title="You're here" />
        {generatedRoute.length > 0 && (
          <Polyline
            coordinates={generatedRoute}
            strokeColor="#FF6347"
            strokeWidth={4}
          />
        )}
      </MapView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  controls: {
    padding: 10,
    backgroundColor: 'white',
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    padding: 8,
    marginVertical: 10,
  },
});
