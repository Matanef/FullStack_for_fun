import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, TextInput, Button, KeyboardAvoidingView, Platform } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';
const polyline = require('@mapbox/polyline');
import axios from 'axios';

type Coordinate = {
  latitude: number;
  longitude: number;
};

export default function HomeScreen() {
  const [location, setLocation] = useState<Coordinate | null>(null);
  const [distance, setDistance] = useState<string>('1000');
  const [routeName, setRouteName] = useState<string>('');
  const [generatedRoute, setGeneratedRoute] = useState<Coordinate[]>([]);

  // Fetch user location once at startup
  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission denied', 'Location access is needed to use the app.');
        return;
      }

      const loc = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
      };
      setLocation(coords); // ✅ No type error now
    })();
  }, []);

  const generateRealRoute = async () => {
    if (!location) {
      Alert.alert('Location error', 'User location is unavailable.');
      return;
    }

    try {
      const response = await axios.post(
        'https://api.openrouteservice.org/v2/directions/foot-walking?geometry_format=encodedpolyline',
        {
          coordinates: [
            [location.longitude, location.latitude],
            [location.longitude + 0.005, location.latitude + 0.005], // Dummy second point
          ],
        },
        {
          headers: {
            Authorization: 'eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6ImZhNGI3NGUyODQxODRiN2ZhNmY4ZWQ2MTg2ODk1NTUyIiwiaCI6Im11cm11cjY0In0=', // Replace with your actual key
            'Content-Type': 'application/json',
          },
        }
      );

      const route = response.data.routes?.[0];
      if (!route || !route.geometry) {
        Alert.alert('Error', 'Route geometry missing or invalid');
        return;
      }

      // Decode polyline
      const decoded = polyline.decode(route.geometry);
      const coords = decoded.map(([lat, lng]) => ({
        latitude: lat,
        longitude: lng,
      }));

      setGeneratedRoute(coords);
    } catch (error) {
      console.error('Failed to fetch route:', error);
      Alert.alert('Error', 'Could not generate route. Please try again.');
    }
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

        <Button title="Generate Route" onPress={generateRealRoute} />

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
          <Polyline coordinates={generatedRoute} strokeColor="#FF6347" strokeWidth={4} />
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
