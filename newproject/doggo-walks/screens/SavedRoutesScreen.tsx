// SavedRoutesScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Route = {
  name: string;
  distance: number;
  coordinates: { latitude: number; longitude: number }[];
  createdAt: string;
};

export default function SavedRoutesScreen({ navigation }: any) {
  const [routes, setRoutes] = useState<Route[]>([]);

  useEffect(() => {
    const loadRoutes = async () => {
      const data = await AsyncStorage.getItem('saved_routes');
      if (data) {
        setRoutes(JSON.parse(data));
      }
    };

    const unsubscribe = navigation.addListener('focus', loadRoutes);
    return unsubscribe;
  }, [navigation]);

  const renderItem = ({ item }: { item: Route }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() =>
        navigation.navigate('RouteViewer', {
          routeData: item,
        })
      }
    >
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.subtitle}>
        {item.distance} meters — {new Date(item.createdAt).toLocaleString()}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {routes.length === 0 ? (
        <Text style={styles.empty}>No routes saved yet</Text>
      ) : (
        <FlatList
          data={routes}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#fff' },
  item: {
    backgroundColor: '#eee',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
  },
  title: { fontSize: 18, fontWeight: 'bold' },
  subtitle: { fontSize: 14, color: '#555' },
  empty: { marginTop: 20, textAlign: 'center', fontSize: 16, color: '#777' },
});
 